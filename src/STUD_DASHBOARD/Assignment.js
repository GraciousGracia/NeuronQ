import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
function Assignment() {
  const [shownew,setshownew] = useState(false)
   const [showpast,setshowpast] = useState(true)

   function updatenew () {
    if(shownew) {
        setshownew(!shownew)
    }
    if(!showpast) {
       setshowpast(!showpast)
    }
   }
   function updatepast () {
     setshowpast(!showpast)
     setshownew(!shownew)
   }
  let [assign,setassign] = useState([
    {
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    },{
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    },{
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    },{
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    },{
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    },{
      'Title' : 'Showing array and methods',
      'Released' : '29/03/26',
      'Track' : 'Frontend web development',
      'Description' : 'Use all the array method to work on a variable that has array as it and create array of 5 object, each  object should    contain five different properties.',
      'Statues' : 'submitted'
    }
  ])
  return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>
        <div className='assbck'>
          <div className='asstab'>
            <button className={!shownew ? 'btnborder' : 'assbtn' }style={{marginLeft:'1.5px'}} onClick={() => updatenew()}>Latest assignment</button>
            <button className={!showpast ? 'btnborder' : 'assbtn' } onClick={() => updatepast()}>Past assignments</button>
          </div>
          {!showpast && (
              <ul className='assul'>
                {assign.map((assigns) => (
                  <li className='assbox'>
                    <h1 className='revdetails'>Assignment title: {assigns.Title}</h1>
                    <h1 className='revdetails'>Date of release: {assigns.Released}</h1>
                    <h1 className='revdetails'>Track: {assigns.Track}</h1>
                    <h1 className='revdetails'>Description: {assigns.Description}</h1>
                    <h1 className='revdetails'>Statues: {assigns.Statues}</h1>
                  </li>
                ))}
              </ul>
          )}
        {!shownew && (
          <div className='asscurrent'>
            <div style={{display:'flex',flexDirection:"row"}}>
              <ul style={{marginLeft:'8px',lineHeight:'200%'}}>
                <li>Assignment title</li>
                <li>Date released</li>
                <li>Track</li>
                <li>Submission deadline</li>
              </ul>
              <ul style={{marginLeft:'24%',listStyle:'none',lineHeight:'200%'}}>
                <li>Showing array and string methods</li>
                <li>12/02/27, 12:35 PM UTC+1</li>
                <li>Frontend web development</li>
                <li>14/02/27, 12:00 AM UTC+1</li>
              </ul>
            </div>
            <h1 style={{textAlign:"center",fontSize:"20px"}}>Description</h1>
            <h2 style={{textAlign:"center",fontSize:"17px",fontWeight:'lighter'}}>Use all the array method to work on a variable that has array as it's datatype, <br></br>and create array of 5 object, each  object should contain five different properties.</h2>
            <h1 style={{textAlign:"center",fontSize:"20px"}}>Submission</h1>
            <h2 style={{textAlign:"center",fontSize:"17px",fontWeight:'lighter'}}>Assignments should be done while being screen recorded with a screen record software (Vimeo or loom) and link to video should be entered on the submission form where provided</h2>
             <button className='subproj' style={{marginLeft:"-76px",marginTop:"40px"}}>Submit assignment</button>
          </div>
        )}
        </div>
    </main>
  )
}
export default Assignment