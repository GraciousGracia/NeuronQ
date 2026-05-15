import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
import Passform from '../COMPONENTS/Passform'
import Axios from '../SERVICES/Axios'
function Passsetup() {
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
    const ID = sessionStorage.getItem('CandID')
    const putpassword = async () => {
        let passbody = {
            id : ID,
            pass_word : password
        }
        await Axios.put('/student_account/setup/password',passbody)
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
    <main className={!load ? 'load' : ''}>
        <img src={logo} style={{marginLeft:'4%',height:'21vh',width:'11%',marginTop:'-15px'}}/>
        <p className='setuphead'>Setup your password for login</p>
        <Passform
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

export default Passsetup