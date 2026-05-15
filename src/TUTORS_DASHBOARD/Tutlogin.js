import React from 'react'
import Tutloginform from './Tutloginform'
import backimg from '../IMAGES/online_teacher.jpg'
import { useState } from 'react'
import Axios from '../SERVICES/Axios'
function Tutlogin() {
      const [tutor_id,settutor_id] = useState('')
      const [tutor_password,settutor_password] = useState('')
      const [idval,setidval] = useState('')
      const [passval,setpassval] = useState('')
    
      const validate_arr = []
      const validate_function = () => {
        if(tutor_id == '') {
            validate_arr.push(1)
            setidval('This field is required')
        }else {
            setidval('')
        }
        if(tutor_password == '') {
            validate_arr.push(2)
            setpassval('This field is required')
        }else {
            setpassval('')
        }
      }
    
      const TutorAsyncReq = async () => {
        const ApiBody = {
            TutorID : tutor_id,
            TutorPWD : tutor_password
        }
    
        await Axios.post('/studentauth',ApiBody)
        .then()
        .catch()
      }
      const PosttutorAuth = () => {
        validate_function()
        if(validate_arr.length == 0) {
            TutorAsyncReq()
        }
      }

  return (
     <main className='loginbck'>
        <Tutloginform
            password={tutor_password}
            id={tutor_id}
            idval={idval}
            passval={passval}
            setpassword={settutor_password}
            setid={settutor_id}
            postreq={PosttutorAuth}
        />
        <img src={backimg} style={{width:"98.5%",height:'71vh',marginLeft:'10px'}} className='photolog'/>
    </main>
  )
}

export default Tutlogin