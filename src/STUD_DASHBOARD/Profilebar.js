import React, { useState } from 'react'
import photo from '../IMAGES/origin2.jpg'
import { Link } from 'react-router-dom'
import { FaEdit,FaArrowRight } from 'react-icons/fa'
import Axios from '../SERVICES/Axios'
function Profilebar() {
  const getCurrentId = sessionStorage.getItem('stud_doc_id')
  const [username,setusername] = useState([
    {
      'Fname' : 'Abigail',
      'Lname' : 'Gerald'
    }
  ])
  let FetchStudentName = async () => {
     const getCurrentId = sessionStorage.getItem('stud_doc_id')
    await Axios.get('/student/dashboard/view/profilebarinfo',{
      params : {ID : getCurrentId}
    })
    .then((data) => setusername(data.usernames))
    .catch()
  }
  FetchStudentName()
  return (
    <main className='profbar'>
        <img src={photo} style={{height:'20vh',width:'57%',borderRadius:'50%',marginLeft:'20%',marginTop:'-5px'}}/>
        <FaEdit className='icons'/>
        <h1 className='profname'>Abigail Gerald</h1>
        <Link className='proflink' style={{marginLeft:'70px'}} to={'/student/dashboard/profile'}>View your profile<FaArrowRight style={{marginBottom:'-3px'}}/></Link>
    </main>
  )
}

export default Profilebar