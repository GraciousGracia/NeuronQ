import React from 'react'
import tutors from '../IMAGES/NeuronQ tutors.png'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import teacher1 from '../IMAGES/teacher1.png'
import teacher2 from '../IMAGES/teacher2.png'
import teacher3 from '../IMAGES/teacher3.png'
import teacher4 from '../IMAGES/teacher4.png'
function Tutors() {
      const ismobile = useMediaQuery({maxWidth : 767})
      const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
      const iscomputer = useMediaQuery({minWidth : 1023})
  return (
      <main className = 'tutorsecbck' style={{display : ismobile ? 'flex' : '', flexDirection : ismobile ? 'column' : '',marginTop : ismobile ? '120%' : ''}}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9}}
                
            >
           {iscomputer && (
                <img src = {tutors} style = {{height : '82vh', width : '115%', borderRadius : '30px', marginTop : '70px', marginLeft :" 10px"}}/>
            )}
            </motion.div>
        
          {ismobile && (
              <p style={{textAlign:'center',fontSize:'28px'}}>Meet some our seasoned tutors</p>
          )}
          {ismobile && (
               <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                 <div style={{display : 'flex',flexDirection : 'column',height:'100vh',width:'100%',gap:'30px'}}>
                    <img src={teacher1}/>
                    <img src={teacher2}/>
                    <img src={teacher3}/>
                    <img src={teacher4}/>
                 </div>

                </motion.div>
          )}
          <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true, amount: 0.3 }}
            >
            <div className = 'tutsecwrite' style={{marginTop:ismobile ? '215%' : '',width : ismobile ? '93%' : '',background:ismobile ? 'none' : '',marginLeft:ismobile ? '20px' : ''}}>
              <h5 className = 'tutorstxt' style={{marginLeft:ismobile ? '-6px' : ''}}>Across the globe, in all continent, we have our seasoned and <br></br>qualified tutors that mentors and guide our students through theie career's pathway</h5>
              <h5 className = 'tutorstxt' style={{marginTop : '-17px',marginLeft:ismobile ? '-6px' : ''}}>Check out the for oppurtuinity to join the community of NeuronQ tutors.</h5>
              {iscomputer && (
                <button className='tutorsbut'>Search job</button>
              )}
              {ismobile && (
                <button style={{width:'54%',height:'10vh',borderRadius:'5px',color:'white',fontSize:'18px',backgroundColor:" rgba(5, 44, 5, 0.877)",border:'none'}}>Search job</button>
              )}
              <h5 className = 'tutorstxt' style={{marginTop : '17px',marginLeft:'-8px'}}>Already teaching? log into your dashoboard </h5>
              
              {iscomputer && (
                  <button className='tutorsbut'>Login</button>
              )}

              {ismobile && (
                   <button style={{width:'54%',height:'10vh',borderRadius:'5px',color:'white',fontSize:'18px',backgroundColor:" rgba(5, 44, 5, 0.877)",border:'none'}}>Login</button>
              )}
          </div>

            </motion.div>
      </main>
  )
}

export default Tutors