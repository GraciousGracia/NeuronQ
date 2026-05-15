import React from 'react'
import student from '../IMAGES/femalestud.jpeg'
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
function Start() {
    const ismobile = useMediaQuery({maxWidth : 767})
    const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
    const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <main className='start' style={{marginTop : ismobile ? '370%' : '',display:ismobile ? 'flex' : '',flexDirection:ismobile ? 'column' : '',width:ismobile ? '110%' : '',height:ismobile ? '230vh' : ''}}>
        <div>
            {iscomputer && (
              <p style={{fontSize:'45px',marginLeft:'40px',fontWeight:'bold'}}>Your learning journey made simple</p>
            )}
            {ismobile && (
              <p style={{fontSize:'30px',marginLeft:'40px',fontWeight:'bold',textAlign:'center'}}>Your learning journey made simple</p>
            )}
           {iscomputer && (
             <h1 className='begin'>Browse course, enroll easily and learn<br></br> at your comfort zone with expert-led courses and resources.</h1>
           )}
           {ismobile && (
             <h1 style={{fontSize:'18px',marginLeft:'15px'}}>Browse course, enroll easily and learn<br></br> at your comfort zone with expert-led courses and resources.</h1>
           )}
           {iscomputer && (
             <img src={student} style={{width:'95%',height:'85vh',borderRadius:'10px',marginLeft:'40px'}}/>
           )}
           {ismobile && (
             <img src={student} style={{width:'95%',height:'55vh',borderRadius:'10px',marginLeft:'10px'}}/>
           )}
        </div>
        <div className='holdsteps' style={{width:ismobile ? '100%' : '',marginTop:ismobile ? "1px" : ''}}>
            <div className='steps' style={{width:ismobile ? '100%' : '',height:ismobile ? '100vh' : ''}}>
              <h1 style={{color:'white',fontSize:'21px',textAlign:'center',marginTop:'5px'}} className='list'>01<br></br>Apply</h1>
              {iscomputer && (
                <h1 className='note' style={{marginRight:'30px'}}>Show your interest in enrolling <br></br> at NeuronQ by applying to study a course</h1>
              )}
              {ismobile && (
                <h1 className='note' style={{marginRight:'30px'}}>Show your interest in <br></br>enrolling at NeuronQ by applying to study <br></br>a course</h1>
              )}
            </div>
            <div className='steps' style={{width:ismobile ? '100%' : '',height:ismobile ? '90vh' : '',borderRadius:ismobile ? 'none' : ''}}>
              <h1 style={{color:'white',fontSize:'21px',textAlign:'center',marginTop:'5px'}} className='list'>02<br></br>Get admission offer</h1>
              {iscomputer && (
                  <h1 className='note' style={{marginRight:'30px'}} >Upon eligibility to study a course, an admission letter is sent to you with a onboarding virtual meeting schedule with the school admins</h1>
              )}
              {ismobile && (
                  <h1 className='note' style={{marginRight:'30px'}} >Upon eligibility to study a course, <br></br>an admission letter is sent to you with a onboarding virtual meeting schedule with <br></br>the school admins</h1>
              )}
            </div>
            <div className='steps' style={{width:ismobile ? '100%' : '',height:ismobile ? '80vh' : ''}}>
              <h1 style={{color:'white',fontSize:'21px',textAlign:'center',marginTop:'5px'}} className='list'>03<br></br>Receive ID and setup account</h1>
              {iscomputer && (
                  <h1 className='note' style={{marginRight:'30px'}}>After the onboarding, your student's ID is issued to you for your learning setup</h1>
              )}
              {ismobile && (
                  <h1 className='note' style={{marginRight:'30px'}}>After the onboarding, your student's ID is issued to you for your learning setup</h1>
              )}
            </div>
            <div className='steps' style={{width:ismobile ? '100%' : '',height:ismobile ? '80vh' : ''}}>
              <h1 style={{color:'white',fontSize:'21px',textAlign:'center',marginTop:'5px'}} className='list'>04<br></br>Make payment and start learning</h1>
              <h1 className='note' style={{marginRight:'30px'}}>Once account setup is done, choose a convenience payment option and make payment to learning amd unlock all feature on your dashboard</h1>
            </div>
            <Link style={{textDecoration:'dashed',fontSize:'25px',color:'black',textAlign:'center'}} to={'/apply'}>Get started<FaArrowRight style={{marginLeft:'10px',marginBottom:'-5px'}}/></Link>
        </div>
    </main>
  )
}

export default Start