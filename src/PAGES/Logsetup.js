import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
import Setup_log from '../COMPONENTS/Setup_log'
import Axios from '../SERVICES/Axios'
function Logsetup() {
    let [email,setemail] = useState('')
    const [id,setid] = useState('')
    const [valemail,setvalemail] = useState('')
    const [valid,setvalid] = useState('')
    const [label,setlabel] = useState('Continue')
    const [load,setload] = useState(true)
    const [error,seterror] = useState('')
    const setarr = []
    function validatemail (mailer){
      let mailercode = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailercode.test(String(mailer).toLowerCase())
    }
    const validatesetup = () => {
        if(email == '') {
            setarr.push(1)
            setvalemail('Email-address is required')
        }else if(!validatemail(email)) {
            setarr.push(2)
            setvalemail('Enter a valid email-address')
        }else {
            setvalemail('')
        }

        if(id == '') {
            setarr.push(3)
            setvalid('Your ID number is required')
        }else {
            setvalid('')
        }
    } 
    const postsetup = async () => {
        const setbody = {
            ID : id,
            Email : email
        }
        await Axios.post('/student_account/setup',setbody)
        .then((data) => {
            sessionStorage.setItem(data.data.ID,'stud_doc_id')
        })
        .catch(() => {
            seterror('An error occured on this process, please make sure your device is connected to the internet and try again shortly')
            setload(load)
            setlabel('Continue')
        })
    }

    let checkval = () => {
        validatesetup()
        if(setarr.length == 0) {
            postsetup()
            setload(!load)
            setlabel('Please wait...')
            seterror('')
        }
    }
  return (
    <main className= {!load ? 'load' : ''}>
        <img src={logo} style={{marginLeft:'4%',height:'21vh',width:'11%',marginTop:'-15px'}}/>
        <p className='setuphead'>Enter your Email-address and Student ID to setup your account. </p>
        <Setup_log
           email={email}
           setemail={setemail}
           id={id}
           setid={setid}
           emailval={valemail}
           idval={valid}
           label={label}
           postsetup={checkval}
        />
        <h1 style={{textAlign:'center',fontSize:'15px',fontWeight:'lighter',marginTop:'-150px',color:'red'}}>{error}</h1>
        {!load ? 
         <div role="status" aria-live="polite" style={{margin:'auto',backgroundColor:'transparent',width:'30%',marginTop:'-310px'}}>
               <div class="loader" aria-hidden="true">
                     <div class="ring"></div>
               </div>
         </div>
        : load}
    </main>
  )
}

export default Logsetup