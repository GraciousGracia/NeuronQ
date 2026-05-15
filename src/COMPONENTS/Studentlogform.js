import React from 'react'
import { Link } from 'react-router-dom'

function Studentlogform({password,id,setpassword,setid,passval,idval,postreq}) {
  return (
    <form className='loginform' onSubmit={(e) => e.preventDefault()}>
        <div>
            <label style={{marginLeft:'13px'}}>Enter your student ID number</label>
            <input className='setup'
               value={password}
               onChange={(e) => setpassword(e.target.value)}
            /> 
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{passval}</p>
       </div>
       <div>
            <label style={{marginLeft:'13px'}}>Enter your password</label>
            <input className='setup'
               value={id}
               onChange={(e) => setid(e.target.value)}
            /> 
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{idval}</p>   
       </div>
       <Link className='forgotten'>Forgotten password?</Link>
       <button className='setbtn' style={{marginTop:'-50px'}} onClick={() => postreq()}>Login</button>
    </form>
  )
}

export default Studentlogform