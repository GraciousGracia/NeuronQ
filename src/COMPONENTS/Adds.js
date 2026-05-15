import React from 'react'
import { FaBook,FaCertificate } from 'react-icons/fa'
import stud2 from '../IMAGES/stud.jpg'
import { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'
function Adds() {
    const ismobile = useMediaQuery({maxWidth : 767})
    const iscomputer = useMediaQuery({minWidth : 1023})
    //192.168.243.27
    //set HOST=0.0.0.0&&npm start
  return (
    <div className='adds' style={{display:ismobile ? 'flex' : '', flexDirection : ismobile ? 'column' : '', marginTop: ismobile ? '830%' : '',}}>
        <div> 
            {iscomputer && (
              <p className='growth'>Continous growth, <br></br> limitless oppurtuinities</p>
            )}
             {ismobile && (
              <p style = {{fontSize:'37px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",marginLeft:'12px'}}>Continous growth, <br></br> limitless oppurtuinities</p>
            )}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
            {iscomputer && (
              <div>
                <h1 className='project'>NeuronQ remote tech schools offers a project <br></br>based learning system to her students, hence giving student <br></br>hands on experience in there preferred career in I.T industry </h1>
                <h2 className='project'style={{marginTop:'16px',}}>Our expertly curated curriculum and learning resources ensures:</h2>
                <h3 className='head'><FaBook style={{marginLeft:'30px',marginRight:'20px'}}/>Wide-Ranging topics</h3>
                <h1 className='write'>Each course encompasses of all essential topics and guides <br></br>starting from the foundamentals to the avanced and complex level.</h1>
                <h3 className='head'><FaCertificate style={{marginLeft:'30px',marginRight:'20px'}}/>Industry recognised certificates</h3>
                <h1 className='write'>Upon completion  of each course and final project, a certificate <br></br>is issued to students to proove satisfactory perfomance during studies.</h1>
              </div>
            )}
            {ismobile && (
              <div>
                  <h1 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:'21px',marginLeft:'5px'}}>NeuronQ remote tech schools offers a project <br></br>based learning system to her students, hence giving student <br></br>hands on experience in there preferred career in I.T industry </h1>
                  <h2 style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",fontSize:'21px',marginLeft:'5px'}}>Our expertly curated curriculum and learning resources ensures:</h2>
                  <h3 style={{fontSize:'23px',marginLeft:'-20px'}}><FaBook style={{marginLeft:'30px',marginRight:'20px'}}/>Wide-Ranging topics</h3>
                  <h1 style={{fontSize:'20px',marginLeft:'10px',fontWeight:'lighter'}}>Each course encompasses of all essential topics and guides <br></br>starting from the foundamentals to the avanced and complex level.</h1>
                  <h3 style={{fontSize:'23px',marginLeft:'-20px'}}><FaCertificate style={{marginLeft:'30px',marginRight:'20px'}}/>Industry recognised certs</h3>
                  <h1 style={{fontSize:'20px',marginLeft:"10px",fontWeight:'lighter'}}>Upon completion  of each course and final project, a certificate <br></br>is issued to students to proove satisfactory perfomance during studies.</h1>
              </div>
            )}
                </motion.div>
          
        </div>
           <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
          >
              <img src={stud2} className='studimg' style={{display : ismobile ? 'none' : ''}} alt=''/>
          </motion.div>
      
    </div>
  )
}

export default Adds