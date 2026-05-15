import React from 'react'
import logo from '../IMAGES/LOGO.jpg'
import { FaEdit } from 'react-icons/fa'
function Profile() {
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>
        <div className='profilebck'>
            <p className='basichead'>Basic information</p>
            <div className='basicbck'>
                <ul className='basicul'>
                    <li>Firstname</li>
                    <li>Lastname</li>
                    <li>Gender</li>
                    <li>Country</li>
                </ul>
                <ul className='basicul' style={{listStyle:'none',marginLeft:"-180px"}}>
                    <li>Abigail</li>
                    <li>Gerald</li>
                    <li>Female</li>
                    <li>Thailand<FaEdit style={{marginLeft:"10px",color:'rgba(5, 44, 5, 0.877)'}}/></li>
                </ul>
            </div>
            <p className='basichead' style={{marginTop:"-70px"}}>Contact information</p>
            <div className='basicbck' style={{gap:'20%'}}>
                <ul className='basicul'>
                    <li>Email-address</li>
                    <li>Mobile number</li>
                </ul>
                <ul className='basicul' style={{listStyle:'none'}}>
                    <li>abigail_gerald12@gmail.com<FaEdit style={{marginLeft:"10px",color:'rgba(5, 44, 5, 0.877)'}}/></li>
                    <li>+104 677190615<FaEdit style={{marginLeft:"10px",color:'rgba(5, 44, 5, 0.877)'}}/></li>
                </ul>
            </div>
            <p className='basichead' style={{marginTop:"-90px"}}>Course information</p>
            <div className='basicbck' style={{gap:'20%'}}>
                <ul className='basicul'>
                    <li>Track</li>
                    <li>Course duration</li>
                    <li>Remaining duration</li>
                    <li>Session</li>
                </ul>
                <ul className='basicul' style={{listStyle:'none'}}>
                    <li>Full-stack web development</li>
                    <li>8 months</li>
                    <li>6 months</li>
                    <li>Term 2-year 2026</li>
                </ul>
            </div>
            <p className='basichead' style={{marginTop:"-90px"}}>Statistics</p>
            <div className='basicbck' style={{gap:'20%'}}>
                <ul className='basicul'>
                    <li>Number of class attended</li>
                    <li>Number of missed classes</li>
                    <li>Number of submitted assignments</li>
                    <li>Total number of assignments given</li>
                    <li>Number of submitted projects</li>
                    <li>Total number of projects given</li>
                </ul>
                <ul className='basicul' style={{listStyle:'none'}}>
                    <li>12</li>
                    <li>0</li>
                    <li>10</li>
                    <li>10</li>
                    <li>5</li>
                    <li>8</li>
                </ul>
            </div>
            <h1 style={{textAlign:'center',fontSize:'15px',fontWeight:'lighter'}}>All information existing on your profile is visible only to the school admin</h1>
        </div>
    </main>
  )
}

export default Profile