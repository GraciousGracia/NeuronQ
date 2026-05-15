import React, { useState } from 'react'
import Tutprojectform from './Tutprojectform'
import { useSubmit } from 'react-router-dom'

function Tutprojects() {
  const [bckchange,setbckchange] = useState(false)
  return (
    <>
      <main className={bckchange ? 'deactivatepjbck' : ''}>
        <div style={{backgroundColor:'transparent',width:'40%',height:"11vh",marginLeft:'26%',marginTop:'4px',display:'flex',justifyContent:"space-evenly",}}>
          <button className='btnlevels'>Intermediates</button>
          <button className='btnlevels'>Advanced</button>
        </div>
        <div>
          <div style={{marginLeft:'15%',display:'flex',flexDirection:"row",gap:'50px',marginTop:"-1.5%"}}>
                <ul style={{fontSize:'17px'}}>
                  <li>Course</li>
                  <li>Level</li>
                </ul>
                <ul style={{listStyle:'none'}}>
                  <li>Backend web development</li>
                  <li>Intermediates</li>
                </ul>
          </div>
        </div>
        <div style={{marginLeft:"40%",display:'flex',flexDirection:"row",gap:"30px"}}>
          <button className='btnlevels'>New project</button>
          <button className='btnlevels'>Submitted projects</button>
        </div>

        <div>
          <button className='startpj' onClick={() => setbckchange(!bckchange)}>Start to enter project details</button>
        </div>
      </main>
      {bckchange && (
        <Tutprojectform
            bckchange={bckchange}
            setbckchange={setbckchange}
        />
      )}
    </>
  )
}

export default Tutprojects