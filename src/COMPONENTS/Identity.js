import React from 'react'
import staffs from '../IMAGES/staffs.png'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
function Identity() {
  const ismobile = useMediaQuery({maxWidth : 767})
  const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
  const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <main>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
         {iscomputer && (
          <p style={{fontSize:'62px',textAlign:'center',fontFamily:'serif'}}>LEARN, BUILD, INNOVATE</p>
         )}
         {ismobile && (
          <p style={{fontSize : '25px',textAlign:'center'}}>LEARN, BUILD, INNOVATE</p>
         )}
        </motion.div>

        <div className='flexabout' style={{display: ismobile ? 'flex' : '', flexDirection: ismobile ? 'column' : ''}}>
            

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9}}
           
          >
            <img className='abtimg' src={staffs}
                 style={{height:ismobile ? '100%' : '',marginLeft:ismobile ? '5px' : '',width: ismobile ? '95%' : ''}}
            />
          </motion.div>
            <div className='abttxt' style={{width: ismobile ? '100%' : ''}}>
                <h4 className='introtxt' style={{fontSize: ismobile ? '21px' : '',marginLeft:ismobile ? '-18px' : ''}}>At NeuornQ tech schools, students are equipped with in-demand and relevant skills that enables them to build and maintain digital products and software solutions that solves problems and leverages technology in all business sector.</h4>

                {iscomputer && (
                  <p style={{color:'rgba(132, 203, 132, 0.88)',fontSize:'27px'}}>WHERE LEARNING MEETS CONVENIENCE</p>
                )}
                {ismobile && (
                  <p style={{color:'rgba(132, 203, 132, 0.88)',fontSize:'25px',marginLeft:'-12px'}}>WHERE LEARNING MEETS CONVENIENCE</p>
                )}

                {iscomputer && (
                  <h5 className='introtxt'>With an uncompromised quality education, our student learn remotely, flexibly and digitally from live virtual tutors</h5>
                )}
                {ismobile && (
                  <h5 className='introtxt' style={{fontSize:'21px',marginLeft:"-18px"}}>With an uncompromised quality education, our student learn remotely, flexibly and digitally from live virtual tutors</h5>
                )}
                {iscomputer && (
                  <button className='studbtn' onClick={() => window.location.pathname = './apply'}>Become a student</button>
                )}
                {ismobile && (
                  <button style={{width:'70%',height:'12vh',backgroundColor:"rgba(5, 44, 5, 0.877)",borderRadius:"6px",border:'none',marginLeft:'-18px',color:'white',fontSize:'21px'}} onClick={() => window.location.pathname = './apply'}>Become a student</button>
                )}
            </div>
        </div>
    </main>
  )
}

export default Identity
