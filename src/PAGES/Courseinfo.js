import React, { useState } from 'react'
import Courseform from '../COMPONENTS/Courseform'
import Axios from '../SERVICES/Axios'
import { useNavigate } from 'react-router-dom'
function Courseinfo() {
  const [course,setcourse] = useState('')
   
  const [queryone,setqueryone] = useState('')
  const [querytwo,setquerytwo] = useState('')
  let [valcourse,setvalcourse] = useState('')
  let [valQ1,setvalQ1]  = useState('')
  let [valQ2,setvalQ2]  = useState('')
  const [label,setlabel] = useState('Submit application')
  const [load,setload] = useState(true)

  const coursearr = [] 

  const validateform = () => {
  if(course == '') {
    setvalcourse('Please select a course')
    coursearr.push(1)
  }else {
    setvalcourse('')
  }

  if(queryone == '') {
    setvalQ1('Please select an option')
    coursearr.push(3)
  }else {
    setvalQ1('')
  }

  if(querytwo == '') {
    setvalQ2('Please select an option')
    coursearr.push(4)
  }else {
    setvalQ2('')
  }
  }
  const navigate = useNavigate()
  const cand_id = sessionStorage.getItem('applicant_id')
  let sendinfo = async () => {
    const reqbody = {
      ID : cand_id,
      Course : course,
      Query01 : queryone,
      Query02 : querytwo
    }
    await Axios.put('/apply/postregdetails',reqbody)
    .then(() => navigate('/candidate_apply/success'))
    .catch()
  }
  const postdata = () => {
    validateform()
    if(coursearr.length == 0) {
      sendinfo()
      setload(!load)
      setlabel('Submitting...')
    }
  }
  return (
    <main style={{height:'100vh'}} className={!load ? 'load' : ''}>
        <p className='headbasic'>Provide other informations</p>

        <Courseform
            course={course}
            courseval={valcourse}
            queryone={queryone}
            queryoneval={valQ1}
            querytwo={querytwo}
            querytwoval={valQ2}
            setcourse={setcourse}
            setqueryone={setqueryone}
            setquerytwo={setquerytwo}
            send_data={postdata}
            label={label}
        />
        {!load ? 
         <div role="status" aria-live="polite" style={{margin:'auto',backgroundColor:'transparent',width:'30%',marginTop:'-350px'}}>
               <div class="loader" aria-hidden="true">
                     <div class="ring"></div>
               </div>
         </div>
        : load}
    </main>
  )
}

export default Courseinfo