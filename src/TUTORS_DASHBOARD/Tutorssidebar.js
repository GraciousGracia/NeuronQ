import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars,FaArrowRight } from 'react-icons/fa'
import logo from '../IMAGES/LOGO.jpg'
import { FaUserCircle, 
         FaChalkboardTeacher,
         FaLaptopCode,
         FaRedo,
         FaChartBar,
         FaTasks,
         FaUsers,
         FaCalendar,
         FaClipboardList,
         FaFileInvoiceDollar,
         FaSignOutAlt,
        } from 'react-icons/fa'
function Tutorssidebar() {
  var [collapsebar,setcollapse] = useState(false)
  let sidearr = [
    {
        'Link' : '/tutor/dashboard/students',
        'Name' : 'Students',
        'Icon' : <FaUsers/>
    },{
        'Link' : '/tutor/dashboard/schedules',
        'Name' : 'Admin schedules',
        'Icon' : <FaCalendar/>
    },{
        'Link' : '/tutor/dashboard/classes',
        'Name' : 'Classes',
        'Icon' : <FaChalkboardTeacher/>
    },{
        'Link' : '/tutor/dashboard/scheme',
        'Name' : 'Schemes',
        'Icon' : <FaTasks/>
    },{
        'Link' : '/tutor/dashboard/assignments',
        'Name' : 'Assignments',
        'Icon' : <FaClipboardList/>
    },{
        'Link' : '/tutor/dashboard/projects',
        'Name' : 'Projects',
        'Icon' : <FaLaptopCode/>
    },{
        'Link' : '/tutor/dashboard/revisions',
        'Name' : 'Revisions',
        'Icon' : <FaRedo/>
    },{
        'Link' : '/tutor/dashboard/reports',
        'Name' : 'Reports',
        'Icon' : <FaChartBar/>
    },{
        'Link' : '/tutor/dashboard/payments',
        'Name' : 'Payments/checks',
        'Icon' : <FaFileInvoiceDollar/>
    },{
        'Link' : '/tutor/dashboard/logout',
        'Name' : 'Signout',
        'Icon' : <FaSignOutAlt/>
    }
  ]
  return (
    <main className={collapsebar ? 'closedbar' : 'tutsidebar'}>
        <img src={logo} className='dashlogo' style={{marginLeft:"-2%",display:!collapsebar ? 'block' : 'none'}}/>  
        <FaBars style={{marginLeft:!collapsebar ?  '87%' : '30%',marginTop:'30px',fontSize:'20px',cursor:'pointer'}} onClick={() => setcollapse(!collapsebar)}/>
        <div> 
            <h1 className={!collapsebar ? 'tutname' : 'hidename'}>Kiliwese Otaha<FaArrowRight style={{marginLeft:"10px",marginBottom:'-3px'}}/></h1>
            <FaUserCircle style={{color:"rgba(5, 44, 5, 0.877)",display:collapsebar ? 'block' : 'none',fontSize: collapsebar ? '25px' : '',marginLeft:collapsebar ? '17px' : '',marginTop: collapsebar ? '30px' : ''}}/>
        </div>
        {sidearr.map((tabs) => (
            <NavLink className='tutsidelist' to={tabs.Link}>
                <h1 className='title' style={{borderRadius:window.location.pathname == tabs.Link ? '5px' : '',display: !collapsebar ? 'block' : 'none'}}>{tabs.Name}</h1>
                <h1 style={{marginRight:'12px',display:collapsebar ? 'block' : 'none',fontSize:collapsebar ? '26px' : '',marginLeft:"17px",color:'black'}}>{tabs.Icon}</h1>
            </NavLink>
        ))}
    </main>
  )
}


export default Tutorssidebar