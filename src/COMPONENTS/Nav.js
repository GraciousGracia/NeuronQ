import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../IMAGES/LOGO.jpg'
function Nav() {
  function openform (route) {
    window.location.pathname = route
  }
  // return (
  //   <nav className='nav'>
  //     <img src={logo} className='logoimg'/>
  //     <div className='links'>
  //       <button className='linkbtn' onClick={() => openform('/')}>Home</button>
  //       <button className='linkbtn'>Courses</button>
  //       <button className='linkbtn' onClick={() => openform('/apply')}>Apply</button>
  //       <button className='linkbtn' onClick={() => openform('/student_signin' )}>Login</button>
  //     </div>
  //   </nav>
  // )
}

export default Nav