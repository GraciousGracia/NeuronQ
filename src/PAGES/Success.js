import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
function Success() {
  return (
    <main className='sucpage'>
        <p className='Thanks'>Thank you for applying</p>
        <FaCheckCircle style={{marginLeft:'45%',fontSize:'155px',marginTop:"40px"}} className='check'/>

        <h1 className='subnote'>Your application to learn at NeuronQ was submitted successfully, please keep an eye on your email <br></br>as we will get in touch with you soon</h1>

    <button className='backhome' onClick={() => window.location.pathname = '/'}>Go back to home page</button>
    </main>
  )
}

export default Success