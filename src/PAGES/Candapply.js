import React from 'react'
import Applyform from '../COMPONENTS/Applyform'
import { Country } from 'country-state-city'
import { useState , useEffect, } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../SERVICES/Axios'
function Candapply() {
 const [firstname,setfirstname] = useState('')
 let [lastname,setlastname] = useState('')
 var [email,setemail] = useState('')
 const [mobile,setmobile] = useState('')
 const [gender,setgender] = useState('')
 let [nation,setnation] = useState('')
 const [valfname,setvalfname] = useState('')
 const [vallname,setvallname] = useState('')
 const [valemail,setvalemail] = useState('')
 const [valmobile,setvalmobile] = useState('')
 const applyarr = []
function validatemail (mailer){
      let mailercode = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailercode.test(String(mailer).toLowerCase())
}
 let validate = () => {
   if(firstname ==='') {
      applyarr.push(1)
      setvalfname('First name is required')
   }else {
      setvalfname('')
   }

   if(lastname ==='') {
      setvallname('Lastname is required')
      applyarr.push(2)
   }else {
      setvallname('')
   }

   if(email ==='') {
      setvalemail('Email address is required')
      applyarr.push(3)
   }else if(!validatemail(email)) {
      setvalemail('Email address is invalid')
      applyarr.push(3)
   }else {
      setvalemail('')
   }

   if(mobile ==='') {
      setvalmobile('Mobile number is required')
      applyarr.push(4)
   }else if(mobile.length < 8 || mobile.length > 14 && Number(mobile) ==  NaN) {
      setvalmobile('Mobile number is invalid')
      applyarr.push(5)
   }else {
      setvalmobile('')
   }
 }
 const [error,seterror] = useState('')
 const erract = () => {
   setsaving(saving)
   setsaveload('Save and continue')
   seterror('Your basic informations failed to save, please make sure your device is connected to the internet and try again')
 }
 const locate = useNavigate()
 const postbasic = async () => {
   let senduser = {
      candfname : firstname,
      candlname : lastname,
      candemail : email,
      candmob : mobile,
      candgender : gender,
      candcountry : nation
   }
   await Axios.post('/apply/postregbasic',senduser)
   .then((data) => {
      locate('/apply/course_info')
      console.log(data.data.cand_id)
      sessionStorage.setItem('applicant_id',data.data.cand_id)
   })
   .catch(() => erract())
 }
 const [saving,setsaving] = useState(true)
 let [saveload,setsaveload] = useState('Save and continue')
const checkinfo = () => {
   validate()
   seterror('')
   if(applyarr.length == 0) {
      setsaving(!saving)
      setsaveload('Saving...')
      postbasic()
   }
}
 const [country,setcountry] = useState([])
 const uploadcont = () => {
    setcountry(Country.getAllCountries())
 }
 useEffect(() => {
    uploadcont()
 })
  return (
    <div style={{height:'80vh'}} className={!saving ? 'disable' : ''}>
        <p className='headbasic'>Provide your basic informations</p>
        <Applyform
           countries={country}
           fname={firstname}
           lname={lastname}
           email={email}
           mobile={mobile}
           gender={gender}
           nation={nation}
           setfname={setfirstname}
           setlname={setlastname}
           setmail={setemail}
           setgender={setgender}
           setmobile={setmobile}
           setnation={setnation}
           valfname={valfname}
           vallname={vallname}
           valmail={valemail}
           valmobile={valmobile}
           send={checkinfo}
           label={saveload}
        />
        <h1 style={{textAlign:'center',fontSize:'15px',fontWeight:'lighter',marginTop:'30px',color:'red'}}>{error}</h1>
        {!saving ? 
         <div role="status" aria-live="polite" style={{margin:'auto',backgroundColor:'transparent',width:'30%',marginTop:'-150px'}}>
               <div class="loader" aria-hidden="true">
                     <div class="ring"></div>
               </div>
         {/* <div class="loader-label">Loading blogs</div> */}
            {/* <span class="sr-only">Content is loading, please wait</span> */}
         </div>
       : saving}
    </div>
  )
}

export default Candapply