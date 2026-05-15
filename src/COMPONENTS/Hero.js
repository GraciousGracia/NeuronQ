import React from 'react'
import student from '../IMAGES/Hero_img.png'
import logo from '../IMAGES/LOGO.jpg'
import { motion } from 'framer-motion'
import {useMediaQuery} from 'react-responsive'
function Hero() {
  const ismobile = useMediaQuery({maxWidth : 767})
  const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
  const iscomputer = useMediaQuery({minWidth : 1023})

  function openform (route) {
    window.location.pathname = route
  }
  return (
     <main className='hero' style={{backgroundImage : `url(${student})`, width : ismobile ? '270%' : istablet ? '85%' : iscomputer ? '100%' : '',backgroundSize:ismobile ? 'contain' : '',backgroundPosition:ismobile ? '-20%' : '',}} >
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
        >
        <div className='hold'>
          <img src={logo} style={{height:"33vh",width:"33vh",marginTop:'-50px',marginRight:"70px"}}/> 
          <div className='holdnavbts'                              >
             <button className='linkbtn' onClick={() => openform('./apply')}>Apply</button>
             <button className='linkbtn'>Sign in</button>
             <button className='linkbtn'>Courses</button> 
             <button className='linkbtn'>Contact</button>
          </div>
       </div>
       {iscomputer && (
            <p className='herotxt'>YOUR FUTURE <br></br> IN TECH STARTS HERE</p>
        )}
        {ismobile && (
          <p style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:'32px',color:'white',marginLeft:'10px',fontWeight:'bold'}}>YOUR FUTURE IN TECH <br></br>STARTS HERE</p>
        )}
        {iscomputer && (
          <h4 style={{color:'white',fontWeight:'lighter',fontSize:"23px",marginLeft:'30px',marginTop:"-30px",fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} >Gain in-demand tech skill from anywhere with our <span style={
          {color:'rgba(5, 44, 5, 0.877);'}
        }>Virtual Tutor-Led classes</span></h4>  
        )} 
        {ismobile && (
           <h4 style={{color:'white',fontWeight:'lighter',fontSize:"19px",marginLeft:'10px',marginTop:"20px",fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} >Gain in-demand tech skill from anywhere <br></br>with our <span style={
          {color:'rgba(5, 44, 5, 0.877);'}
        }>Virtual Tutor-Led classes</span></h4>  
        )} 
        </motion.div>                                                                                                   
    </main>
  )
}

export default Hero