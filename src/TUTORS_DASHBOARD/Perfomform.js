import React from 'react'

function Perfomform() {
  return (
    <form className='perform'>
        <div>
            <label>Task type</label>
            <select className='performinput'
                  style={{marginTop:'20px',width:'200px',marginLeft:'-40px'}}
            >
            <option></option>
            <option>Assignment</option>
            <option>Project</option>
            </select>
        </div>
        <div>
            <label>Task title</label>
            <input className='performinput' 
                style={{height:'7.5vh',marginLeft:'-73px',marginTop:'-2px',width:'355px'}}
            />
                
        </div>
        <div>
            <label>Audibilty</label>
            <select className='performinput'
                // style={{width:'20px'}}
            >
            <option></option> 
            <option>Very audible</option>
            <option>Fairly audible</option>
            <option>Mute</option>
            </select>
        </div>
        <div>
            <label>Camera positioning</label>
            <select className='performinput'
                style={{marginLeft:'20px'}}
            >
            <option></option>
            <option>Well positioned and face captured fully</option>
            <option>Camera unstable and face partially captured</option>
            <option>Camera blur</option>
             <option>Face not seen</option>
            </select>
        </div>
        <div>
            <label>Background state</label>
            <select className='performinput'
                style={{marginLeft:'-120px',marginTop:'23px',width:'250px'}}
            >
            <option></option>
            <option>Quite and serene</option>
            <option>Distractive</option>
            <option>Noisy</option>
            </select>
        </div>
        <div>
            <label>Task Grading</label>
            <select className='performinput'
                  style={{marginLeft:'-40px',width:'120%'}}
            >
            <option></option>
            <option>Excellent</option>
            <option>Good</option>
            <option>fail</option>
            </select>
        </div>
    </form>
  )
}

export default Perfomform