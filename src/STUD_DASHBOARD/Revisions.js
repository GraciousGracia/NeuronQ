import React, { useState } from 'react'
import logo from '../IMAGES/LOGO.jpg'
function Revisions() {
  const [revisions,setrevisions] = useState([
    {
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },,{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    },{
      'Topic' : 'DOM manipulation(Event listeners)',
      'Date released' : '02/06/25',
      'Track' : 'Frontend web development',
    }
  ])
    return (
    <main className='studpages'>
        <img src={logo} className='dashlogo'/>
        <ul className='revstudbck'>
          {revisions.map((revise) => (
              <li className='revbox'>
                <h1 className='revdetails'>Track: {revise.Track}</h1>
                <h1 className='revdetails'>Topic: {revise.Topic}</h1>
                <h1 className='revdetails'>Date released : {revise['Date released']}</h1>
                <button className='playrev'>Watch video</button>
              </li>
          ))}
        </ul>
    </main>
  )
}

export default Revisions