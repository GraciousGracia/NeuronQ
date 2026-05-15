import React from 'react'
import tutors from '../IMAGES/Tutors.jpg'
import {FaGraduationCap, FaMoneyBillWave, FaChalkboardTeacher, FaCertificate, FaBriefcase, } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
function Reason() {
    const ismobile = useMediaQuery({maxWidth : 767})
    const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
    const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <main className='why' style={{marginTop:ismobile ? '490px' : ''}}>
       {iscomputer && (
         <p className='reas'>Why choose NeuronQ</p>
       )}
       {ismobile && (
         <p style={{fontSize:'26px',textAlign:'center'}}>Why choose NeuronQ</p>
       )}
        <div className='reasflex' style={{display: ismobile ? 'flex' : '', flexDirection : ismobile ? 'column' : ''}}>
            <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
                <div className='reas1'  style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                  <h1 className='reashead'>Flexible Education<FaGraduationCap style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                  <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>Learn from <br></br>anywhere at your own pace</h2>
                </div>
            </motion.div>
           
               <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
              <div className='reas1' style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                <h1 className='reashead'>Affordable fees<FaMoneyBillWave style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>Low fees, Discounts and scholarships</h2>
              </div>
              </motion.div>
      
              <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
              <div className='reas1' style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                <h1 className='reashead'>Experienced tutors<FaChalkboardTeacher style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>Get taugth by seasoned tutors and mentors</h2>
             </div>

              </motion.div>
            
            
              <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
              <div className='reas1' style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                <h1 className='reashead'>Recognised certificates <FaCertificate style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>Get a certificate of completion which is industry recognised</h2>
               </div>
              </motion.div>
           
            <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
              <div className='reas1' style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                <h1 className='reashead'>Project based learning<FaBriefcase style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>Get hands on projects and guidiance in building portfolio</h2>
              </div>
              </motion.div>
        
             <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
              >
              <div className='reas1' style={{width:ismobile ? '95%' : '',marginLeft: ismobile ? '9px' : ''}}>
                <h1 className='reashead'>Affordable fees<FaMoneyBillWave style={{fontSize: ismobile ? '40px' : iscomputer ? '60px' : '',color:'white',marginLeft:'20px',marginTop:"18px"}}/></h1>
                <h2 className='txtreas' style={{display:ismobile ? 'none' : ''}}>We offer free and basic <br></br>course with limited features and paid courses with affordable cost</h2>
              </div>
              </motion.div>
            
        </div>
    </main>
  )
}

export default Reason