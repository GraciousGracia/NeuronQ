import React, { useState } from 'react'
import Assform from './Assform'
import Axios from '../SERVICES/Axios'
function Tutssignments() {
  let [track,settrack] = useState('')
  let [level,setlevel] = useState('')
  let [title,settitle] = useState('')
  let [DOR,setDOR] = useState('')
  let [TOD,setTOD] = useState('12:00 AM UTC+1')
  let [DOD,setDOD] = useState('')
  const [Description,setDescription] = useState('')

  let [trackvalid,settrackvalid] = useState('')
  let [levelvalid,setlevelvalid] = useState('')
  let [titlevalid,settitlevalid] = useState('')
  let [DORvalid,setDORvalid] = useState('')
  let [TODvalid,setTODvalid] = useState('')
  let [DODvalid,setDODvalid] = useState('')
  const [Descriptionvalid,setDescriptionvalid] = useState('')

  const formarr = []

  const [ass_arr,setass_arr] = useState([
    {
      'Title' : 'React hooks',
      'name' : 'Theresa Cowans',
      'Track' : 'Data analysis',
      'Level' : 'Intermediate',
      'Link' : 'https://vimeo.com/1290/assignment/90'
    },{
      'Title' : 'React hooks',
      'name' : 'Theresa Cowans',
      'Track' : 'Data analysis',
      'Level' : 'Intermediate',
      'Link' : 'https://vimeo.com/1290/assignment/90'
    },{
      'Title' : 'React hooks',
      'name' : 'Theresa Cowans',
      'Track' : 'Data analysis',
      'Level' : 'Intermediate',
      'Link' : 'https://vimeo.com/1290/assignment/90'
    },{
      'Title' : 'React hooks',
      'name' : 'Theresa Cowans',
      'Track' : 'Data analysis',
      'Level' : 'Intermediate',
      'Link' : 'https://vimeo.com/1290/assignment/90'
    }
  ])
  const validateform = () => {
    if(track == '') {
       formarr.push(1)
       settrackvalid('This is a required field')
    }else {
      settrackvalid('')
    }

    if(level == '') {
      setlevelvalid('This is a required field')
      formarr.push(2)
    }else {
      setlevelvalid('')
    }

    if(title == '') {
       settitlevalid('This is a required field')
       formarr.push(3)
    }else {
       settrackvalid('')
    }

    if(DOR == '') {
      setDORvalid('This is a required field')
      formarr.push(4)
    }else {
      setDODvalid('')
    }
    if(TOD == '') {
      setTODvalid('This is a required field')
      formarr.push(5)
    }
    if(DOD == '') {
      setDODvalid('This is a required field')
      formarr.push(6)
    }else {
      setDODvalid('')
    }

    if(Description == '') {
      setDescriptionvalid('This is a required field')
      formarr.push(7)
    }else {
      setDescription('')
    }
  }
  
  const AsyncAssignment = async () => {
    const bodyass = {
        track : track,
        level : level,
        title : title,
        Date_deadline : DOD,
        Time_deadline : TOD,
        Date_realease : DOR,
        Description : Description
    }

    await Axios.post('/student/activity/assignment/post',bodyass)
    .then()
    .catch()
  }
  const postass = () => {
    validateform()
    if(formarr.length == 0) {
      AsyncAssignment()
    }
  }
  let [SwitchNew,IsswitchNew] = useState(true)
  const [SwitchSubmitted,IsswitchSubmitted] = useState(false)

  function switfunc () {
    IsswitchNew(!SwitchNew)
    IsswitchSubmitted(!SwitchSubmitted)
  }
  function switfunc2 () {
    IsswitchNew(!SwitchNew)
    IsswitchSubmitted(!SwitchSubmitted)
  }
  return (
    <>
        <div style={{backgroundColor:'transparent',width:'40%',height:"11vh",marginLeft:'26%',marginTop:'4px',display:'flex',justifyContent:"space-evenly",}}>
          <button className='btnlevels'>Intermediates</button>
          <button className='btnlevels'>Advanced</button>
        </div>
    <main className='TutorAssback'>
      <div style={{marginLeft:'25%',width:'70%',gap:'20px',display:'flex',flexDirection:"row"}} className='assdiv'>
          <button className={SwitchNew ? 'opened' : 'assswitch'} onClick={() => switfunc2()} >New assignment</button>
          <button className={SwitchSubmitted ? 'opened' : 'assswitch'} onClick={() => switfunc()}>Submitted assignments</button>
      </div>
      {SwitchSubmitted && (
        <ul className='passmentbck'>
          {ass_arr.map((tasks) => (
            <li className='assbox'>
              <ul style={{marginLeft:'-15px',lineHeight:'50px'}}>
                <li>Name : {tasks.name}</li>
                <li>Track : {tasks.Track}</li>
                <li>Level : {tasks.Level}</li>
                <li>Title : {tasks.Title}</li>
                <li>Link to video :  {tasks.Link}</li>
              </ul>
            </li>
          ))}
      </ul>
      )}
     {SwitchNew && (
        <main className='assmainback'>
        <Assform
           track={track}
           level={level}
           title={title}
           tod={TOD}
           dor={DOR}
           dod={DOD}
           describe={Description}
           settrack={settrack}
           setlevel={setlevel}
           settitle={settitle}
           settod={setTOD}
           setdor={setDOR}
           setdod={setDOD}
           setdescribe={setDescription}
           trackvalid={trackvalid}
           levelvalid={levelvalid}
           titlevalid={titlevalid}
           todvalid={TODvalid}
           dodvalid={DODvalid}
           dorvalid={DORvalid}
           describevalid={Descriptionvalid}
           postass={postass}
        />
      </main>

     )}
    </main>

    </>
  )
}

export default Tutssignments