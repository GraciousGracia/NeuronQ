import React, { useState } from 'react'
import backimg from '../IMAGES/logbckimg.jpg'
import logo from '../IMAGES/LOGO.jpg'
import Studentlogform from '../COMPONENTS/Studentlogform'
import Axios from '../SERVICES/Axios'
function Studentlogin() {
  const [student_id,setstudent_id] = useState('')
  const [student_password,setstudent_password] = useState('')
  const [idval,setidval] = useState('')
  const [passval,setpassval] = useState('')

  const validate_arr = []
  const validate_function = () => {
    if(student_id == '') {
        validate_arr.push(1)
        setidval('This field is required')
    }else {
        setidval('')
    }
    if(student_password == '') {
        validate_arr.push(2)
        setpassval('This field is required')
    }else {
        setpassval('')
    }
  }

  const StudentAsyncReq = async () => {
    const ApiBody = {
        StudentID : student_id,
        StudentPWD : student_password
    }

    await Axios.post('/studentauth',ApiBody)
    .then()
    .catch()
  }
  const PostStudentAuth = () => {
    validate_function()
    if(validate_arr.length == 0) {
        StudentAsyncReq()
    }
  }
  return (
    <main className='loginbck'>
        <Studentlogform
            password={student_password}
            id={student_id}
            idval={idval}
            passval={passval}
            setpassword={setstudent_password}
            setid={setstudent_id}
            postreq={PostStudentAuth}
        />
        <img src={backimg} style={{width:"98.5%",height:'71vh',marginLeft:'10px'}} className='photolog'/>
    </main>
  )
}

export default Studentlogin