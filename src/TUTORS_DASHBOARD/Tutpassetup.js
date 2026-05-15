import React from 'react'
import { useState } from 'react'
import Tutpasssetform from './Tutpasssetform'
import Axios from '../SERVICES/Axios'
import logo from '../IMAGES/LOGO.jpg'
function Tutpassetup() {
        const [password,setpassword] = useState('')
        const [passwordcon,setpasswordcon] = useState('')
        let [passval,setpassval] = useState('')
        let [passvalcon,setpassvalcon] = useState('')
        const [label,setlabel] = useState('Save password')
        let [load,setload] = useState(true)
        const [error,seterror] = useState('')
        const passwordreg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let passarr = []
        function passfunc () {
        if(password == '') {
            passarr.push(1)
            setpassval('Please enter a password')
        }else if (!passwordreg.test(password)) {
            passarr.push(2)
            setpassval('Password must contain atleast one lower-case (a-z), one upper-case (A-Z),one special character(@$!%*?&) one number(0-9) and not less than eight in length')
        }else {
            setpassval('')
        }

        if(passwordcon == '') {
            passarr.push(3)
            setpassvalcon('Please confirm your password')
        }else if (passwordcon != password) {
            passarr.push(4)
            setpassvalcon('Password has no match')
        }else {
            setpassvalcon('')
        }
    }
    const ID = sessionStorage.getItem('Tutor_doc_id')
    const putpassword = async () => {
        let passbody = {
            Tutid : ID,
            Password : password
        }    
        await Axios.put('/tutor/account_setup/password',passbody)
        .then()
        .catch(() => {
            setlabel('Save password')
            seterror('Your password could not save, please be sure your are connected to the internet and try again shortly.')
            setload(load)
        })
    }
    const checkval = () => {
        passfunc()
        seterror('')
        if(passarr.length == 0) {
            putpassword()
            setlabel('Saving...')
            setload(!load)
        }
    }
  return (
    <main className='tutorsetuplogin'>
        <img src={logo} style={{marginLeft:'4%',height:'21vh',width:'11%',marginTop:'-20px'}}/>
        <p style={{marginTop :"-50px",textAlign:'center',fontSize:"20px"}}>Create a password for login in</p>
        <Tutpasssetform
           password={password}
           setpassword={setpassword}
           passwordval={passval}
           passwordcon={passwordcon}
           setpasswordcon={setpasswordcon}
           passwordconval={passvalcon}
           sendpass={checkval}
           label={label}
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

export default Tutpassetup