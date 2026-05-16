import React from 'react'
import { FaCalendar,FaClipboardCheck,FaClipboardList,FaClock,FaFileInvoiceDollar, FaLaptopCode, FaPlayCircle, FaRedo } from 'react-icons/fa'
function Studsidebar() {
  const sidearr = [
    {
        'name' : 'Schedules',
        'url' : '/student/dashboard/schedules',
        'icon' : <FaCalendar/>
    },{
        'name' : 'Upcoming classes',
        'url' : '/student/dashboard/upcoming_classes',
        'icon' : <FaClock/>
    },{
        'name' : 'Projects',
        'url' : '/student/dashboard/projects',
        'icon' : <FaLaptopCode/>
    },{
        'name' : 'Revisions',
        'url' : '/student/dashboard/revisions',
        'icon' : <FaRedo/>
    },{
        'name' : 'Assignments',
        'url' : '/student/dashboard/assignments',
        'icon' : <FaClipboardList/>
    },{
        'name' : 'Perfomances',
        'url' : '/student/dashboard/performances',
        'icon' : <FaClipboardCheck/>
    },{
        'name' : 'Video records',
        'url' : '/student/dashboard/records',
        'icon' : <FaPlayCircle/>
    },{
        'name' : 'Payments',
        'url' : '/student/dashboard/payments',
        'icon' : <FaFileInvoiceDollar/>
    }
  ]
  return (
    <main className='sidebar'>
        <ul className='listul'>
            {sidearr.map((tablist) => (
                <li className='liststud'  style={{color : window.location.pathname == tablist.url ? 'rgba(5, 44, 5, 0.877)' : '',borderBottom : window.location.pathname == tablist.url ? '1px solid rgba(5, 44, 5, 0.877)' : ''}} onClick={() => window.location.pathname == tablist.url}>{tablist.icon}<span style={{marginLeft:"8px"}}>{tablist.name}</span></li>
            ))}
        </ul>
    </main>
     )
}

export default Studsidebar