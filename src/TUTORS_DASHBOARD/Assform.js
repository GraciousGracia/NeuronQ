import React from 'react'
import { useState } from 'react'
function Assform({
    track,
    settrack,
    level,
    setlevel,
    title,
    settitle,
    dor,
    setdor,
    tod,
    settod,
    dod,
    setdod,
    describe,
    setdescribe,
    postass,
    trackvalid,
    levelvalid,
    titlevalid,
    dorvalid,
    todvalid,
    dodvalid,
    describevalid
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
    
        let [subs,setsubs] = useState(false)
        let [area,setarea] = useState(false)
        const selecttrack = (course) => {
            setsubs(!subs)
            settrack(course)
        }
        const selectlevel = (grade) => {
            setarea(!area)
            setlevel(grade)
        }
    
  return (
    <form className='assform' onSubmit={(e) => e.preventDefault()}>
        <div>
            <input className='tutassinput'
                placeholder='Enter Track'
                onClick={() => setsubs(!subs)}
                value={track}
                onChange={(e) => settrack(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{trackvalid}</p>  
        </div>
        <div>
            <input className='tutassinput'
                placeholder='Enter Level'
                onClick={() => setarea(!area)}
                value={level}
                onChange={(e) => setlevel(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{levelvalid}</p>  
        </div>
        <div>
            <input className='tutassinput'
                placeholder='Enter assignment title'
                value={title}
                onChange={(e) => settitle(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{titlevalid}</p>  
        </div>
         <div>
            <label className='labelnext' style={{color:'black',marginLeft:"50px"}}>Date of assignment release</label>
            <input className='tutassinput'
               placeholder='Enter date of assignment release'
               value={dor}
               onChange={(e) => setdor(e.target.value)}
               type='date'
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{dorvalid}</p>  
        </div>
        <div>
            <label className='labelnext' style={{color:'black',marginLeft:"50px"}}>Time of assignment deadline</label>
            <input className='tutassinput'
              placeholder='Enter time of deadline for assignment'
              value={tod}
              onChange={(e) => settod(e.target.value)}
              readOnly
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{todvalid}</p>  
        </div>
        <div>
            <label className='labelnext' style={{color:'black',marginLeft:"50px"}}>Date of assignment deadline</label>
            <input className='tutassinput'
               placeholder='Enter date of deadline for assignment'
               value={dod}
               onChange={(e) => setdod(e.target.value)}
               type='date'
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{dodvalid}</p>  
        </div>
         <div>
            <textarea className='tutassinput'
               placeholder='Enter assignment description'
               value={describe}
               onChange={(e) => setdescribe(e.target.value)}
            />
            <p style={{color:'red',fontSize:'14px',marginLeft:"43px",marginTop:'10px'}}>{describevalid}</p>  
        </div>
        <button className='postass' onClick={() => postass()}>Post</button>
        {subs && (
            <div className='fixtracks'>
                <ul style={{marginLeft:'-20px'}}>
                {tracks.map((Courses) => (
                    <li style={{listStyle:"none",fontSize:"17px",lineHeight:'26px',cursor:"pointer",}} className='listhover' onClick={() => selecttrack(Courses.name)}>{Courses.name}</li>
                ))}
           </ul>
           </div>
        )}
        {area && (
            <div className='stageback' style={{marginTop:'50px'}}>
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

export default Assform