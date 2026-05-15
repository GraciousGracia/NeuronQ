import React from 'react'
function Studentmailpay() {
  return (
    <form className='setupform' onSubmit={(e) => e.preventDefault()}>
        <div>
            <label style={{marginLeft:'18px'}}>Create a password</label>
            <input className='setup'
                
            /> 
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{}</p>
       </div>
    </form>
  )
}

export default Studentmailpay