import React, { useState } from 'react'
//import Tutorssidebar from './Tutorssidebar'
//import Tutnotification from './Tutnotification'
//import logo from '../IMAGES/LOGO.jpg'
import img2 from '../IMAGES/origin2.jpg'
import img3 from '../IMAGES/stud.jpg'
import img4 from '../IMAGES/studgirl.jpg'
// import img5 from '../IMAGES/tut15.jpg'
import img7 from '../IMAGES/tut6.jpg'
import img15 from '../IMAGES/tut15 copy - Copy.jpg'
import img12 from '../IMAGES/tut12.jpg'
import img13 from '../IMAGES/smilemedics.jpg'
import img14 from '../IMAGES/tut14 copy.jpg'
import img16 from '../IMAGES/tut13 copy.jpg'
//import Perfomform from './Perfomform'
import { FaTimes } from 'react-icons/fa'
function Tutstudents() {
  const [typevalidate,settypevalidate] = useState('')
  const [titlevalidate,settitlevalidate] = useState('')
  const [audiblevalidate,setaudiblevalidate] = useState('')
  const [cameravalidate,setcameravalidate] = useState('')
  const [backgroundvalidate,setbackgroundvalidate] = useState('')
  const [gradevalidate,setgradevalidate] = useState('')
  let [typevalue,settypevalue] = useState('')
  const [titlevalue,settitlevalue] = useState('')
  let [audvalue,setaudvalue] = useState('')
  const [camvalue,setcamvalue] = useState('')
  let [backvalue,setbackvalue] = useState('')
  const [gradvalue,setgradvalue] = useState('')
  
  let [typebol,settypebol] = useState(true)
  const [titlebol,settitlebol] = useState(false)
  let [audbol,setaudbol] = useState(false)
  const [cambol,setcambol] = useState(false)
  let [backbol,setbackbol] = useState(false)
  const [gradvbol,setgradvbol] = useState(false)
  let [label,setlabel] = useState('Select task type')
  const [StudentArray,setStudentArray] = useState([
    {
      'name' : 'Abigail Gerald',
      'Country' : 'Thailand',
      'Image' : img2
    },{
      'name' : 'Theresa Cowans',
      'Country' : 'United kingdom',
      'Image' : img4
    },{
      'name' : 'James Austins',
      'Country' : 'Dubai',
      'Image' : img3
    },{
      'name' : 'Ferdinand Nwachukwu',
      'Country' : 'Nigeria',
      'Image' : img7
    },{
      'name' : 'Melkina Mbogo',
      'Country' : 'South Africa',
      'Image' : img15
    },{ 
      'name' : 'Kin Yunjan',
      'Country' : 'Japan',
      'Image' : img12
    },{
      'name' : 'Abel Georgina',
      'Country' : 'Nothern Ireland',
      'Image' : img13
    },{
      'name' : 'Ellaya Ruth',
      'Country' : 'India',
      'Image' : img14
    },{
      'name' : 'Maltida williams',
      'Country' : 'Germany',
      'Image' : img16
    }
  ])
  let [searchitem,setsearchitem] = useState("")
  let filterdata = StudentArray.filter((students) => (
    students.name.toLowerCase().includes(searchitem.toLowerCase())
  ))
  let [showbox,setshowbox] = useState(false)
  const  [studentname,setstudentname] = useState('')
  const showperform = (studname) => {
      setshowbox(!showbox)
      setstudentname(studname)
  }
  const switchcontent1 = () => {
      if(typevalue === '') {
        settypevalidate('Please select a task type')
      }else {
        settitlebol(!titlebol)
        setlabel('Enter task title')
        settypebol(!typebol)
        settypevalidate('')
      }
      // const data = e.target.values;
      // setype(data)
      console.log(typevalue)
  }

  const switchcontent2 = () => {
    if(titlevalue === '') {
      settitlevalidate('Please enter task title')
    }else {
      settitlebol(!titlebol)
      setaudbol(!audbol)
      setlabel('Select Audibility')
      settitlevalidate('Please enter task title')
      settitlevalidate('')
    }
  }
  const switchcontent3 = () => {
    if(audvalue === '') {
      setaudiblevalidate('Please select audibility')
    }else {
      setaudbol(!audbol)
      setcambol(!cambol)
      setlabel('Select camera statues')
      setaudiblevalidate('')
    }
  }
  const switchcontent4 = () => {
      if(camvalue === '') {
        setcameravalidate('Please select camera statues of student')
      }else {
        setcambol(!cambol)
        setbackbol(!backbol)
        setlabel('Select background state')
        setcameravalidate('')
      }
  }
    
  let switchcontent5 = () => {
    if(backvalue === '') {
      setbackgroundvalidate('Please select a background state')
    }else {
      setbackbol(!backbol)
      setgradvbol(!gradvbol)
      setlabel('Grade task')
      setbackgroundvalidate('')
    }
  }

  let saveperfomance = () => {
    if(gradvalue === '') {
      setgradevalidate('Please select a background state')
    }else {    
      setgradevalidate('')
    }
  }
  return (
    <>
        <div style={{backgroundColor:'transparent',width:'40%',height:"11vh",marginLeft:'26%',marginTop:'4px',display:'flex',justifyContent:"space-evenly",}}>
          <button className='btnlevels'>Intermediates</button>
          <button className='btnlevels'>Advanced</button>
        </div>
        <main>
            <div style={{marginLeft:'15%',display:'flex',flexDirection:"row",gap:'50px',marginTop:"-1.5%"}}>
                <ul style={{fontSize:'17px'}}>
                  <li>Course</li>
                  <li>Level</li>
                  <li>Number of students</li>
                </ul>
                <ul style={{listStyle:'none'}}>
                  <li>Backend web development</li>
                  <li>Intermediates</li>
                  <li>42</li>
                </ul>
              </div>
        <input
          className='studsearch'
          placeholder='Search students by name'
          value={searchitem}
          onChange={(e) => setsearchitem(e.target.value)}
        />
        <div className='studbox'>
           {filterdata.length > 0 ? (
              filterdata.map((list) => (
              <li className='studlist'>
                <img src={list.Image} style={{height:'160px',borderRadius:'50%',width:'60%',marginLeft:'20%',marginTop:'5px'}}  alt=''/>
                <h1 className='listnametxt'>{list.name}</h1>
                <h2 className='listconttxt'>{list.Country}</h2>
                <button className='upstud' onClick={() => showperform(list.name)}>Post update</button>
              </li>
              ))
            ) : <h1 className='listnametxt' >Name not found</h1>}
        </div>
    </main>
    {showbox  && (
        <div className='performancebox'>
            <FaTimes style={{fontSize:"16px",marginLeft:"93%",marginTop:'12px',cursor:"pointer"}} onClick={() => setshowbox(!showbox)}/>
            <p style={{textAlign:'center',fontWeight:'bold'}}>{`Task performance for ${studentname}`}</p>
      
            <label className='labperform'>{label}</label>
                {typebol && (
              <div className='showanim'>
                <select className='performinput'
                    value={typevalue}
                    onChange={(e) => settypevalue(e.target.value)}
                >
                <option></option> 
                <option>Assignment</option>
                <option>Project</option>
            </select>
            <p style={{marginLeft:'20px',color:'red'}}>{typevalidate}</p>
                <button className='nextperform' onClick={() => switchcontent1()}>Next</button>
              </div>
            )}
            {titlebol && (
              <div className='showanim'>
                <input className='performinput'
                   value={titlevalue}
                   onChange={(e) => settitlevalue(e.target.value)}
                />
                <p style={{marginLeft:'20px',color:'red'}}>{titlevalidate}</p>
                <button className='nextperform' onClick={() => switchcontent2()}>Next</button>
              </div>
            )}
            {audbol && (
              <div className='showanim'>
                <select className='performinput'
                    value={audvalue}
                    onChange={(e) => setaudvalue(e.target.value)}
                >
                <option></option> 
                <option>Very audible</option>
                <option>Fairly audible</option>
                <option>Mute</option>
            </select>
              <p style={{marginLeft:'20px',color:'red'}}>{audiblevalidate}</p>
                <button className='nextperform' onClick={() => switchcontent3()}>Next</button>
              </div>
            )}
            {cambol && (
              <div className='showanim'>
                <select className='performinput'
                style={{marginLeft:'20px'}}
                  value={camvalue}
                  onChange={(e) => setcamvalue(e.target.value)}
                >
                <option></option>
                <option>Well positioned and face captured fully</option>
                <option>Camera unstable and face partially captured</option>
                <option>Camera blur</option>
                <option>Face not seen</option>
            </select>
            <p style={{marginLeft:'20px',color:'red'}}>{cameravalidate}</p>
                <button className='nextperform' onClick={() => switchcontent4()}>Next</button>
              </div>
            )}
            {backbol && (
              <div className='showanim'>
                <select className='performinput'
                style={{marginLeft:'20px'}}
                value={backvalue}
                onChange={(e) => setbackvalue(e.target.value)}
                >
                <option></option>
                <option>Quite and serene</option>
                <option>Distractive</option>
                <option>Noisy</option>
                </select>
                <p style={{marginLeft:'20px',color:'red'}}>{backgroundvalidate}</p>
                <button className='nextperform' onClick={() => switchcontent5()}>Next</button>
              </div>
            )}
            {gradvbol && (
              <div className='showanim'>
                <select className='performinput'
                  style={{marginLeft:'20px'}}
                  value={gradvalue}
                  onChange={(e) => setgradvalue(e.target.value)}
                >
                <option></option>
                <option>Excellent</option>
                <option>Good</option>
                <option>fail</option> 
                </select>
                <p style={{marginLeft:'20px',color:'red'}}>{gradevalidate}</p>
                <button className='nextperform' onClick={() => saveperfomance()}>Post</button>
              </div>
        )}
      </div> 

    )}
    </>
  )
}

export default Tutstudents