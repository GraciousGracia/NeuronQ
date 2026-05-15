import React from 'react'
//import Profilebar from './Profilebar'
//import Studsidebar from './Studsidebar'   
import logo from '../IMAGES/LOGO.jpg'
function Schedules() {
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo' alt=''/>
        <div className='pagebox'>
            <p className='scheduleheader'>The admin releases schedules of learning activities for every month</p>
        </div>
    </main>
  )
}

export default Schedules