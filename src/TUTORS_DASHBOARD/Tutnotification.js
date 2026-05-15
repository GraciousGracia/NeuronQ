import React, { useState } from 'react'
import { FaBell,FaBars } from 'react-icons/fa'
function Tutnotification() {
  const [collapsenote,setcollapsenote] = useState(false)
  return (
    <main className={!collapsenote ? 'hidenotification' : 'tutnotify'}>
        <FaBars  style={{marginLeft:'10px',marginTop:'15px',cursor:'pointer',fontSize:'20px'}} onClick={() => setcollapsenote(!collapsenote)}/>
        <h2 className='notetxt' style={{display:collapsenote ? 'block' : 'none'}}>Notification</h2>
        <FaBell style={{display:!collapsenote ? 'block' : 'none',marginLeft:'22px',fontSize:'25px',marginTop:'6px'}}/>
        <div className='notifybox'>

        </div>
    </main>
  )
}

export default Tutnotification