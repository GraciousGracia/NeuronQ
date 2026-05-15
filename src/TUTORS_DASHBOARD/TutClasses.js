import React, { useState } from 'react'
import { FaEdit,FaTimes } from 'react-icons/fa'
import Nextclass from './Nextclass'
import Axios from '../SERVICES/Axios'
function TutClasses() {
  const [TrackValue,setTrackvalue] = useState('')
   const [LevelValue,setLevelvalue] = useState('')
  let [DateValue,setDateValue] = useState('')
  const [TimeValue,setTimeValue] = useState('')
  const [ZoneValue,setZoneValue] = useState('UTC+1')
  const [TopicValue,setTopicValue] = useState('')
  let [DurationValue,setDurationValue] = useState('')
  const [ModeValue,setModeValue] = useState('Life virtual')
  const [WorkValue,setWorkValue] = useState('Included')
  let [TestValue,setTestValue] = useState('Included')

  const [trackvalid,settrackvalid] = useState('')
  const [levelvalid,setlevelvalid] = useState('')
  const [datevalid,setdatevalid] = useState('')
  const [timevalid,settimevalid] = useState('')
  const [zonevalid,settzonevalid] = useState('')
  let [topicvalid,settopicvalid] = useState('')
  const [durationvalid,setdurationvalid] = useState('')

  const [showform,Isshowform] = useState(false)
  const NewClassArray = []
  const validateclassform = () => {
      if(TrackValue == '') {
        NewClassArray.push(1)
        settrackvalid('This field is required')
      }else {
        settrackvalid('')
      }

      if(LevelValue == '') {
        NewClassArray.push(2)
        setlevelvalid('This field is required')
      }else {
        setlevelvalid('')
      }

      if(DateValue == '') {
        NewClassArray.push(3)
        setdatevalid('This field is required')
      }else {
        setdatevalid('')
      }

      if(TimeValue == '') {
        NewClassArray.push(4)
        settimevalid('This is a required field')
      }else {
        settimevalid('')
      }

      if(ZoneValue == '') {
        NewClassArray.push(5)
        settzonevalid('This field is required')
      }else {
        settzonevalid('')
      }

      if(DurationValue == '') {
        NewClassArray.push(6)
        setdurationvalid('This field is required')
      }else {
        setdurationvalid('')
      }

      if(TopicValue == '') {
        NewClassArray.push(7)
        settopicvalid('This field is required')
      }else {
        settopicvalid('')
      }
  }
  
  const AsyncClassPost = async () => {
    const ClassFormBody = {
      course : TrackValue,
      stage : LevelValue,
      date : DateValue,
      time : TimeValue,
      zone : ZoneValue,
      topic : TopicValue,
      duration : DurationValue
    }
    await Axios.post('/student/activity/class/post',ClassFormBody)
    .then()
    .catch()
  }
  function postclass () {
    validateclassform()
    if(NewClassArray.length == 0) {
      AsyncClassPost()
    }
  }
  return (
    <>
     
    <main className={showform ? 'blurtutclass' : ''}>
       <div style={{backgroundColor:'transparent',width:'40%',height:"11vh",marginLeft:'26%',marginTop:'4px',display:'flex',justifyContent:"space-evenly",}}>
          <button className='btnlevels'>Intermediates</button>
          <button className='btnlevels'>Advanced</button>
     </div>
      <div className='classbackground'>
        <div>
          <div className='classbox ' style={{marginTop:'20px'}}>
          <ul style={{lineHeight:'25px'}}>
            <li>Track</li>
            <li>Level</li>
            <li>Class date</li>
            <li>Time of class</li>
            <li>Time of class based on your location (Israel)</li>
            <li>Class duration</li>
            <li>Topic</li>
            <li>Mode of learning</li>
            <li>Class work</li>
            <li>Test</li>
            <button className='startclass'>Start class</button>
          </ul>
          <ul style={{marginLeft:"70px",listStyle:"none",lineHeight:'25px'}}>
            <li>Backend web development (Node js)</li>
            <li>Intermediate</li>
            <li>15/4/26</li>
            <li>12:00am UTC+1</li>
            <li>12:20pm UTC+7</li>
            <li>1hr 20mins</li>
            <li>Middlewares</li>
            <li>Life virtual</li>
            <li>Included</li>
            <li>Included</li>
          </ul>
          <FaEdit style={{fontSize:'25px',marginLeft:"150px"}} onClick={() => Isshowform(!showform)}/>
        </div>
        </div>
        <div className='classbox' style={{height:'54vh'}}>
          <div>
            <ul style={{lineHeight:'25px'}}>
            <li>Track</li>
            <li>Level</li>
            <li>Class date</li>
            <li>Time of class</li>
            <li>Time of class based on your location (Israel)</li>
            <li>Class duration</li>
            <li>Topic</li>
            <li>Mode of learning</li>
            <li>Class work</li>
            <li>Test</li>
          </ul>
          <button className='startclass' style={{marginLeft:"30px",marginTop:"-20px"}}>Start class</button>
          </div>
          <ul style={{marginLeft:"70px",listStyle:"none",lineHeight:'25px'}}>
            <li>Backend web development</li>
            <li>Intermediate</li>
            <li>15/4/26</li>
            <li>12:00am UTC+1</li>
            <li>12:20pm UTC+7</li>
            <li>1hr 20mins</li>
            <li>API routes</li>
            <li>Life virtual</li>
            <li>Included</li>
            <li>Included</li>
            <li>None</li>
          </ul>
          <FaEdit style={{fontSize:'25px',marginLeft:"210px"}} onClick={() => Isshowform(!showform)}/>
        </div>
      </div>
    </main>
            {showform && (
          <Nextclass
            trackvalue={TrackValue}
            settrackvalue={setTrackvalue}
            levelvalue={LevelValue}
            setlevelvalue={setLevelvalue}
            datevalue={DateValue}
            setdatevalue={setDateValue}
            timevalue={TimeValue}
            settimevalue={setTimeValue}
            durationvalue={DurationValue}
            setdurationvalue={setDurationValue}
            zonevalue={ZoneValue}
            setzonevalue={setZoneValue}
            topicvalue={TopicValue}
            settopicvalue={setTopicValue}
            modevalue={ModeValue}
            setmodevalue={setModeValue}
            classvalue={WorkValue}
            setclassvalue={setWorkValue}
            testvalue={TestValue}
            settestvalue={setTestValue}
            trackvalid={trackvalid}
            levelvalid={levelvalid}
            datevalid={datevalid}
            timevalid={timevalid}
            zonevalid={zonevalid}
            durationvalid={durationvalid}
            topicvalid={topicvalid}
            postclass={postclass}
            exitform={showform}
            setexitform={Isshowform}
          />
        )}

    </>
  )
}

export default TutClasses