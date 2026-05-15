import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Courses from '../COMPONENTS/Courses'
function Nextclass({
    trackvalue,
    settrackvalue,
    levelvalue,
    setlevelvalue,
    datevalue,
    setdatevalue,
    timevalue,
    settimevalue,
    zonevalue,
    setzonevalue,
    topicvalue,
    settopicvalue,
    durationvalue,
    setdurationvalue,
    modevalue,
    setmodevalue,
    classvalue,
    setclassvalue,
    testvalue,
    settestvalue,
    trackvalid,
    levelvalid,
    datevalid,
    timevalid,
    zonevalid,
    topicvalid,
    durationvalid,
    postclass,
    setexitform,
    exitform
    }) {
    const tracks = [
        {
            "name" : 'Front-end web development',
            'id' : 1
        },{
            'name' : 'Back-end web development',
            'id' : 2
        }, {
            'name' : 'Full-stack web development',
            'id': 3
        }, {
            'name' : 'Mobile app development',
            'id' : 4
        },{
            'name' : 'Game development',
            'id' : 5
        },{
            'name' : 'Block chain development',
            'id' : 6
        }, {
            'name': 'Data analysis',
            'id' : 9
        },{
            'name' : 'AI / Machine learning',
            'id' : 10
        }
    ]

    let levelist =  [
        {
            'name' : 'Beginner'
        },{
            'name' : 'Intermediate'
        },{
            'name' : 'Advanced'
        }
    ]

    let [track,settrack] = useState(false)

    let [level,setlevel] = useState(false)

    const selecttrack = (course) => {
        settrack(!track)
        settrackvalue(course)
    }
    const selectlevel = (grade) => {
        setlevel(!level)
        setlevelvalue(grade)
    }
  return (
    <form className='nextclass' onSubmit={(e) => e.preventDefault()}>
        <div>
            <label className='labelnext'>Track</label>
            <input className='nextinput' 
                onClick={() => settrack(!track)}
                value={trackvalue}
                onChange={(e) => settrackvalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{trackvalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Level</label>
            <input className='nextinput'
                onClick={() => setlevel(!level)}
                value={levelvalue}
                onChange={(e) => setlevelvalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{levelvalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Date of class</label>
            <input className='nextinput' 
                placeholder=''
                type='date'
                value={datevalue}
                onChange={(e) => setdatevalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{datevalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Time of class</label>
            <input className='nextinput'
               type='time'
               value={timevalue}
               onChange={(e) => settimevalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{timevalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Time Zone</label>
            <input className='nextinput'
               value={zonevalue}
               readOnly
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{zonevalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Topic</label>
            <input className='nextinput' 
               value={topicvalue}
               onChange={(e) => settopicvalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{topicvalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Class duration</label>
            <input className='nextinput'
               placeholder='Format: 2hrs 30mins'
               value={durationvalue}
               onChange={(e) => setdurationvalue(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"17px",marginTop:'10px'}}>{durationvalid}</p>  
        </div>
        <div>
            <label className='labelnext'>Mode of learning</label>
            <input className='nextinput'
               value={modevalue}
               onChange={(e) => setmodevalue(e.target.value)}
               readOnly
            />
        </div>
        <div>
            <label className='labelnext'>Class work</label>
            <input className='nextinput'
                value={classvalue}
                readOnly
            />
        </div>
         <div>
            <label className='labelnext'>Test</label>
            <input className='nextinput'
                value={testvalue}
                readOnly
            />
        </div>
        <button className='postclass' onClick={() => postclass()}>Post</button>
        <button className='postclass' onClick={() => setexitform(!exitform)}>Cancel</button>
        {track && (
            <div className='fixtracks'>
                <ul style={{marginLeft:'-20px'}}>
                {tracks.map((Courses) => (
                    <li style={{listStyle:"none",fontSize:"17px",lineHeight:'26px',cursor:"pointer",}} className='listhover' onClick={() => selecttrack(Courses.name)}>{Courses.name}</li>
                ))}
           </ul>
           </div>
        )}
        {level && (
            <div className='stageback'>
                <ul style={{marginLeft:'-20px'}}>
                    {levelist.map((stages) => (
                        <li className='stagelist' onClick={() => selectlevel(stages.name)}>{stages.name}</li>
                    ))}
                </ul>
            </div>
        )}
    </form>
  )
}
export default Nextclass