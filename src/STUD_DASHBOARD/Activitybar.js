import React from 'react'
import { FaBell,FaSignOutAlt } from 'react-icons/fa'
import {RiMessage3Fill } from 'react-icons/ri'
function Activitybar() {
function showopt () {
    alert('ok')
}
  return (
    <main>
        <div className='iconbar'>
            <RiMessage3Fill style={{fontSize:'30px',marginLeft:"20px",color:'rgba(5, 44, 5, 0.877)',cursor:'pointer'}} onMouseOver={() => showopt()}/>
            <FaBell style={{fontSize:'30px',marginLeft:"20px",color:'rgba(5, 44, 5, 0.877)',cursor:'pointer'}}/>
            <FaSignOutAlt style={{fontSize:'30px',marginLeft:"20px",color:'rgba(5, 44, 5, 0.877)',cursor:'pointer'}}/>
        </div>
        <div className='iconnamebar'>
            <div className='icontxt'>Messages</div>
            <div className='icontxt'>Notifications</div>
            <div className='icontxt'>Signout</div>
        </div>
    </main>
  )
}

export default Activitybar