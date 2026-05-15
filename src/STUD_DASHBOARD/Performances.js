import React from 'react'
import logo from '../IMAGES/LOGO.jpg'
const PastPerformances = [
  {
    'Title' : 'HTML attributes',
    'Track' : 'Backend web development',
    'Level' : 'Intermediate',
    'Audibility' : 'Fairly audible',
    'Camera status' : 'Well positioned',
    'Background state' : 'Distractive',
    'Grade' : 'Excellent'
  },{
    'Title' : 'HTML attributes',
    'Track' : 'Backend web development',
    'Level' : 'Intermediate',
    'Audibility' : 'Fairly audible',
    'Camera status' : 'Well positioned',
    'Background state' : 'Distractive',
    'Grade' : 'Excellent'
  },{
    'Title' : 'HTML attributes',
    'Track' : 'Backend web development',
    'Level' : 'Intermediate',
    'Audibility' : 'Fairly audible',
    'Camera status' : 'Well positioned',
    'Background state' : 'Distractive',
    'Grade' : 'Excellent'
  }
]
function Performances() {
  return (    
    <main className='studpages'>
      <img src={logo} className='dashlogo'/>
      <h1 className='newtxt' style={{marginLeft:"20.5%"}}>Older</h1>
      <div className='performbck'>
        <div className='box1ass'>
          {PastPerformances.map((pasts) => (
            <li className='olderperformance'>
              <ul>
                <li>Assignment title</li>
                <li>Track</li>
                <li>Level</li>
                <li>Audibility</li>
                <li>Camera position</li>
                <li>Background state</li>
                <li>Grade</li>
              </ul>
              <ul style={{marginLeft:"70px",listStyle:'none'}}>
                <li>{pasts.Title}</li>
                <li>{pasts.Track}</li>
                <li>{pasts.Level}</li>
                <li>{pasts.Audibility}</li>
                <li>{pasts['Camera status']}</li>
                <li>{pasts['Background state']}</li>
                <li>{pasts.Grade}</li>
              </ul>
            </li>
          ))}
        </div>
        <h1 className='newtxt'>New</h1>
        <div className='box2ass'></div>
      </div>
    </main>
  )
}

export default Performances 