import React from 'react'
import { useState } from 'react'
function Tutschemes() {
  const [classdata,setclassdata] = useState([
    {
      'Topic' : 'Introduction to Nodejs',
      'Date' : '12-12-26',
      'Start-time' : "12:30pm",
      'End time' : '2:00pm',
      'Duration' : '2hrs'
    },{
      'Topic' : 'Custom modules and Npm packages',
      'Date' : '12-12-26',
      'Start-time' : "12:30pm",
      'End time' : '2:00pm',
      'Duration' : '2hrsjjuuuiuopoopopp'
    },{
      'Topic' : 'Express and mongoDB',
      'Date' : '12-12-26',
      'Start-time' : "12:30pm",
      'End time' : '2:00pm',
      'Duration' : '2hrs'
    }
  ])
  return (
    <main>
        <div style={{backgroundColor:'transparent',width:'40%',height:"11vh",marginLeft:'26%',marginTop:'4px',display:'flex',justifyContent:"space-evenly",}}>
          <button className='btnlevels'>Intermediates</button>
          <button className='btnlevels'>Advanced</button>
        </div>

        <table style={{marginLeft:'15%',width:'65%',borderCollapse:'collapse'}}>
          <tr>
              <th>Topic</th>
              <th>Date</th>
              <th>Sub-topics</th>
              <th>Time</th>
              <th>Duration</th>
          </tr>
              {classdata.map((data) => (
                <tr>
                  <td>{data.Topic}</td>
                  <td>{data.Date}</td>
                  <td style={{listStyle:"none"}}>
                      <li>{data.Duration}</li>
                  </td>
                  <td>12:30pm - 2:00am UTc+1</td>
                  <td>2hrs 30mins</td>
                </tr>
              ))}
          <table/>
        </table>
    </main>  
  )
}                                     
export default Tutschemes