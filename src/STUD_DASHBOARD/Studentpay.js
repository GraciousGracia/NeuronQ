import React from 'react'
import Studentmailpay from './Studentmailpay'
import logo from '../IMAGES/LOGO.jpg'
function Studentpay() {
  return (
    <main className='payemailpage'>
        <img src={logo} style={{marginLeft:'4%',height:'21vh',width:'11%',marginTop:'-20px'}}/>
        <p >Enter the email address you applied with to proceed to payments</p>
        <Studentmailpay/>
    </main>
  )
}

export default Studentpay