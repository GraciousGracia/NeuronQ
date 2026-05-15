import React from 'react'
import { FaArrowRight  } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
function Newsletter() {
    const ismobile = useMediaQuery({maxWidth : 767})
    const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
    const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <form className='subform' style={{marginTop: ismobile ? '-200px' : '', marginLeft: ismobile ? '-30px' : ''}}>
        <p className='subtxt'>Subscribe to our news letter to receive updates on scholarships, <br></br>fee waves and school events</p>
        <div>
            <input className='subinput'
               placeholder='Enter your email to subscribe'
            />
        </div>
        <button className='btnsub'>Submit<FaArrowRight style={{marginLeft:'10px',color:'white'}}/></button>
    </form>
  )
}

export default Newsletter