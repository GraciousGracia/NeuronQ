import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
import Tutsetform from './Tutsetform'
import Axios from '../SERVICES/Axios'
function Tutorsetlogin() {
    const [email,setemail] = useState('')
    const [id,setid] = useState('')
    let [emailval,setemailval] = useState('')
    let [idval,setidval] = useState('')
    const [label,setlabel] = useState('Continue')
    
    const [load,setload] = useState(true)
    const setuparr = []
    function validatemail (mailer){
      let mailercode = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailercode.test(String(mailer).toLowerCase())
    }
    const validate = () => {
        if(email == '') {
            setuparr.push(1)
            setemailval('This field is required')
        }else if(!validatemail(email)) {
            setuparr.push(2)
            setemailval('Email address is invalid')
        }else {
            setemailval('')
        }

        if(id == '') {
            setuparr.push(3)
            setidval('This field is required')
        }else {
            setidval('')
        }
    }
   
    const PostAsyncForm = async () => {
        const postbody = {
            Tutemail : email,
            Tutid : id
        }
        await Axios.post('/tutors/account_setup/auth',postbody)
        .then((data) => {
            sessionStorage.setItem('Tutor_doc_id',data.data.Doc_id)
            sessionStorage.setItem('Doc_name',data.data.name)
        })
        .catch()
    }
    function checkform () {
        validate()
        if(setuparr.length == 0) {
            PostAsyncForm()
            setlabel('Loading...')
            setload(!load)
        }
    }
  return (
    <main className={!load ? 'loadtutse' : 'tutorsetuplogin'}>
          <img src={logo} className='dashlogo' style={{marginTop:"20px"}}/>  
          <p style={{marginTop :"100px",textAlign:'center',fontSize:"20px"}}>Welcome tutor, please enter your email address and your tutor's ID number to continue setting up your teaching account.</p>

          <Tutsetform
             email={email}
             id={id}
             emailval={emailval}
             idval={idval}
             label={label}
             postdata={checkform}
             setemail={setemail}
             setid={setid}
          />
        <h1 style={{textAlign:'center',fontSize:'15px',fontWeight:'lighter',marginTop:'-150px',color:'red'}}>{}</h1>
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

export default Tutorsetlogin