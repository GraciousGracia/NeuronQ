import React from 'react'

function Tutpasssetform({password,setpassword,passwordval,passwordcon,passwordconval,setpasswordcon,sendpass,label}) {
  return (
        <form className='setupform' onSubmit={(e) => e.preventDefault()} style={{marginTop:'40px'}}>
       <div>
            <label style={{marginLeft:'18px'}}>Create a password</label>
            <input className='setup'
             value={password}
             onChange={(e) => setpassword(e.target.value)}
            /> 
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{passwordval}</p>
       </div>
       <div>
            <label style={{marginLeft:'18px'}}>Confirm password</label>
            <input className='setup'
             value={passwordcon}
             onChange={(e) => setpasswordcon(e.target.value)}
            /> 
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{passwordconval}</p>   
       </div>
       <button className='setbtn' onClick={() => sendpass()}>{label}</button>
    </form>
  )
}

export default Tutpasssetform