import React from 'react'
import logo from '../IMAGES/LOGO.jpg'
function Projects() {
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>
        <div className='projectbck'>
          <p className='projdet'>Project details</p>
          <div className='projdetbck'>
            <ul className='ulprojhead' style={{listStyle:'circle'}}>
              <li>Project title</li>
              <li>Project code</li>
              <li>Project deadline</li>
              <li>Track</li>
            </ul>
            <ul className='ulprojhead' style={{marginLeft:"30%"}}>
              <li>DOM manipulation</li>
              <li>016</li>
              <li>12/5/2026, 12:00 am UTC+1</li>
              <li>Full-stack web development</li>
            </ul>
          </div>
          <div className='projdesc'>
            <p className='projdet' style={{marginTop:'-120px'}}>Project description</p>
            <p style={{textAlign:'center',marginTop:'30px'}}>Using HTML, CSS and javascript, create a single web page that showcases the following DOM operations :</p>
            <ul className='ulprojhead' style={{listStyle:'decimal-leading-zero',fontSize:"16px",lineHeight:"160%"}}>
              <li>Button click that pops up a box on the screen and a button that takes out the box</li>
              <li>Button MouseOver that changes the text color and size on the page</li>
              <li>Button click that appends a box to an existing parent box on the webpage</li>
              <li>A box whose background color changes at 3minutes intervals</li>
            </ul>
          </div>
          <div className='projdesc'>
            <p className='projdet' style={{marginTop:'-100px'}}>Project guide and instructions</p>
            <ul className='ulprojhead' style={{listStyle:'decimal-leading-zero',fontSize:"16px",lineHeight:"160%",marginTop:'30px'}}>
              <li>Students must make a screen record presentation while they do the project with an audible explanation (presenting the project after doing it will NOT be accepted)</li>
              <li>A prefered screen record software (Vimeo or loom) should be used for project presentation</li>
              <li>The link to video presentation should be obtained and entered appropriately on the submission form</li>
              <li>In order for students to meet up with project deadline, classes will be suspended amidst the project period, therefore failure to complete project on or before the deadline affects student's performance</li>
            </ul>
          </div>
          <button className='subproj' onClick={() => window.location.pathname = '/student/activity/project_submision'}>Submit project</button>
        </div>
    </main>
  )
}

export default Projects