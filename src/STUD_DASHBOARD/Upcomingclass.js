import React from 'react'
import logo from '../IMAGES/LOGO.jpg'
import Activity_bar from './Activity_bar'
import { FaCalendar } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
function Upcomingclass() {
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>  
        <p style={{marginLeft:'30%',fontWeight:'bold',fontSize:'22px'}}>Upcoming classes for your learning track</p>  
        <div className='schedulebox'>
            <div className='class01' style={{marginTop:'7px'}}>
                <ul style={{lineHeight:'150%',listStyle:'none',marginLeft:'-10px'}}>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Time based on your location (Thailand)</li>
                    <li>Class Duration</li>
                    <li>Track</li>
                    <li>Topic</li>
                    <li>Learning mode</li>
                    <li>Classwork</li>
                    <li>Assignments</li>
                    <li>Projects</li>
                </ul>
                <div className='classinfo' style={{display:'flex',flexDirection:'column'}}>
                    <ul style={{marginLeft:'100px',lineHeight:'150%',listStyle:'none',marginTop:'-10px'}}>
                        <li>1/8/2026</li>
                        <li>2:00pm UTC+1</li>
                        <li>11:40pm GMT+7</li>
                        <li>3hrs 20mins</li>
                        <li>Backend web development</li>
                        <li>RESTful APIs</li>
                        <li>Life virtual<FaVideo style={{marginLeft:'10px'}}/></li>
                        <li>Included</li>
                        <li>Included</li>
                        <li>None</li>
                   </ul>
                   <button className='joinclass'>Join class</button>
                </div>
            </div>
            <div className='class01'>
                <ul style={{lineHeight:'150%',listStyle:'none',marginLeft:'-10px'}}>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Time based on your location (Thailand)</li>
                    <li>Class Duration</li>
                    <li>Track</li>
                    <li>Topic</li>
                    <li>Learning mode</li>
                    <li>Classwork</li>
                    <li>Assignments</li>
                    <li>Projects</li>
                </ul>
                <div className='classinfo' style={{display:'flex',flexDirection:'column'}}>
                    <ul style={{marginLeft:'100px',lineHeight:'150%',listStyle:'none',marginTop:'-10px'}}>
                        <li>1/12/2026</li>
                        <li>5:30pm UTC+1</li>
                        <li>4:30am GMT+7, (1/13/2026)</li>
                        <li>2hrs</li>
                        <li>Backend web development</li>
                        <li>NPM installation and usage</li>
                        <li>Life virtual<FaVideo style={{marginLeft:'10px'}}/></li>
                        <li>Included</li>
                        <li>None</li>
                        <li>None</li>
                   </ul>
                   <button className='joinclass'>Join class</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Upcomingclass