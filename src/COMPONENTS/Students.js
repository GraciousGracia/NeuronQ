import React from 'react'
import Student from '../IMAGES/all-students.jpg'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
function Students() {
  const ismobile = useMediaQuery({maxWidth : 767})
  const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
  const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <main className='studs' style={{marginTop : ismobile ? '410%' : '', display : ismobile ? 'flex' : '', flexDirection :  ismobile ? 'column' : '', width : ismobile ? '200%' : ''}}>
        <div className='studtxt' >
        {iscomputer && (
          <h1 className='testimony'>Connecting learners globally</h1>
        )}
         
        {ismobile && (
          <h1 style={{fontSize:"26px",textAlign:'center',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'80px',marginLeft:"-52px"}}>Connecting learners globally</h1>
        )}
        {ismobile && (
          <img src={Student} style={{borderRadius:'50%',height:'62vh',width:'90%'}}/>
        )}
         <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
          >
          {iscomputer && (
            <h2 style={{fontWeight:'lighter',}}>We grow a community that connects tech enthusiasts where students practice together and a long-term relationship is built and maintained between them</h2>
          )}
          {ismobile && (
            <h2 style={{fontWeight:'lighter',fontSize:'20px',marginLeft:'-22px'}}>We grow a community that connects <br></br>tech enthusiasts where students <br></br> practice together and a long-term relationship is built and maintained between them</h2>
          )}
          {iscomputer && (
            <h2 style={{fontWeight:'lighter'}}>Already learning? sign-in into your account to continue your amazing learning experience.</h2>
          )}
          {ismobile && (
            <h2 style={{fontWeight:'lighter',fontSize:'20px',marginLeft:'-22px'}}>Already learning? sign-in into your account to continue your amazing learning experience.</h2>
          )}
          {iscomputer && (
            <button className='signstud' >Sign in</button>
          )}
          {ismobile && (
            <button style={{height:'12vh',width:"60%",backgroundColor:"rgba(5, 44, 5, 0.877)",border :"none",borderRadius:"5px",fontSize:'22px',color : 'white',fontFamily : "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}} >Sign in</button>
          )}

          </motion.div>
        
        </div>
     <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          >
             {iscomputer && (
          <img src={Student} style={{borderRadius:'50%',height:'80vh'}}/>
        )}
            </motion.div>        
       
       
    </main>
  )
}
export default Students