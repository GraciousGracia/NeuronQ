import React from 'react'

function Setup_log({id,setid,idval,email,setemail,emailval,label,postsetup}) {
  return (
    <form className='setupform' onSubmit={(e) => e.preventDefault()}>
        <div>
            <label style={{marginLeft:'18px'}}>Email-address</label>
            <input className='setup'
               value={email}
               onChange={(e) => setemail(e.target.value)}
            />
            <p style={{color:'red',fontSize:'15px',marginLeft:"17px",marginTop:'10px'}}>{emailval}</p>
        </div>
         <div>
            <label style={{marginLeft:'18px'}}>Student ID number</label>
            <input className='setup'
               value={id}
               onChange={(e) => setid(e.target.value)}
            />
            <p style={{color:'red',fontSize:'15px',marginLeft:"17px",marginTop:'10px'}}>{idval}</p>
        </div>
        <button className='setbtn' onClick={() => postsetup()}>{label}</button>
    </form>
  )
}

export default Setup_log