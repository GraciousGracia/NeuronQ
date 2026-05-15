import React from 'react'
import { FaCoins,FaClock } from 'react-icons/fa'
import Viewcourses from './Viewcourses'
import { useState } from 'react'
import front from '../IMAGES/frontend.png'
import back from '../IMAGES/backendimg.png'
import full from '../IMAGES/full=stackimg.png'
import game from '../IMAGES/Gamedev.png'
import datalysis from '../IMAGES/Dataanalysis.png'
import Cybersec from '../IMAGES/Cybersec.png'
import mobile from '../IMAGES/Mobiledev.png'
import AI from '../IMAGES/AI_ML.png'
import block from '../IMAGES/blockchain.png'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
function Courses() {
  const ismobile = useMediaQuery({maxWidth : 767})
  const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
  const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <main className='coursebck' style={{marginTop:ismobile ? '460px' : ''}}>
        {iscomputer && (
          <p style={{fontSize:'70px',textAlign:'center',marginBottom:"-5px"}} className='coursehead'
        >Our featured courses</p>
        )}
        {ismobile && (
          <p style={{fontSize:'32px',textAlign:'center',marginBottom:"-5px"}} className='coursehead'
        >Our featured courses</p>
        )}
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
        >
            {iscomputer && (
                <div>
                   <h5 className='courseexp'>Our tech school offers industry-focused training in Programming courses, AI / Machine learning, Data analysis and Cyber security. <br></br>Each program is designed to take students from beginner to job-ready level through live instructor-led classes, hands-on projects, mentorship, and practical real-world experience</h5>
                    <h5 className='courseexp'>We emphasize skill mastery and portfolio development, ensuring every learner graduates with the confidence and capability to work in the      global tech industry or build their own solutions.</h5>
                    <h5 className='courseexp'>To support accessibility, we provide flexible payment plans across all courses, allowing students to pay in installments or choose full payment options based on their convenience. This ensures that financial constraints do not stand in the way of quality tech education and career growth.</h5>
                </div>
            )}

            {ismobile && (
              <div>
                 <h5 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:"19px",marginLeft:'10px'}}>Our tech school offers industry-focused training in Programming courses, AI / Machine learning, Data analysis and Cyber security. <br></br>Each program is designed to take students from beginner to job-ready level through live instructor-led classes, hands-on projects, mentorship, and practical real-world experience</h5>
                <h5 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:"19px",marginLeft:'10px'}}>We emphasize skill mastery and portfolio development, ensuring every learner graduates with the confidence and capability to work in the      global tech industry or build their own solutions.</h5>
                <h5 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:"19px",marginLeft:'10px'}}>To support accessibility, we provide flexible payment plans across all courses, allowing students to pay in installments or choose full payment options based on their convenience. This ensures that financial constraints do not stand in the way of quality tech education and career growth.</h5>
              </div>
            )}
        </motion.div>
        <div className='courselayer' style={{display : ismobile ? 'flex' : '' , flexDirection : ismobile ? 'column' : ''}}>
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
           <div className='course'>
              <img src={front} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px'}}><FaCoins style={{marginRight:'7px'}}/>150 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>3 months</h4>
          </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
       >
          <div className='course'>
              <img src={back} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>170 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>4 months</h4>
          </div>
      </motion.div>
        
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='course'>
              <img src={full} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>350 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>10 months</h4>
        </div>
      </motion.div>
    
      <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className='course'>
              <img src={mobile} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>200 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>4 months</h4>
            </div>
       </motion.div>
     
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
           <div className='course'>
              <img src={game} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>285 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>4 months</h4>
          </div>
      </motion.div>
         
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
       >
          <div className='course'>
              <img src={datalysis} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>370 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>6 months</h4>
          </div>
      </motion.div>
     
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='course'>
               <img src={Cybersec} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
               <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>450 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>11 months</h4>
        </div>
      </motion.div>
          
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
       >
          <div className='course'>
              <img src={AI} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>470 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>10 months</h4>
          </div>
      </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
       >
           <div className='course'>
             <img src={block} style={{height:'47vh',width:"100%",borderRadius:"12px"}}/>
              <h4 style={{fontSize:'22px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginTop:'5px',}}><FaCoins style={{marginRight:'7px'}}/>300 USD</h4>
              <h4 style={{fontSize:'22px',marginTop:'-28px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}><FaClock style={{marginRight:'7px'}}/>5 months</h4>
          </div>
      </motion.div>
          
        </div>
    </main>   
  )
}

export default Courses