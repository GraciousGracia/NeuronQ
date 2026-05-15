import React, { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { FaXbox } from 'react-icons/fa'
function Viewcourses({progams,visible,setvisible}) {
  const [open,setopen] = useState(true)
  function check () {
    setopen(false)
    setvisible(!visible)
    window.document.body.style.overflowY = 'none'
  }
  console.log(progams.Plans.Basic.Technology.first)
  return (
    <main className='view' style={{display : visible ? 'block' : 'none',backgroundColor:'white'}}>
        <button style={{width:'32px',height:'30px',marginTop:'5px',marginLeft:'95%',fontSize:'22px',backgroundColor:'transparent',border:'none',fontWeight:'lighter',cursor:'pointer'}}onClick={() => check()}>x</button>
        <div style={{height:'75vh',width:'95%',display:'flex',flexDirection:'row',margin:'auto',gap:'30px'}}>
              <div className='show2'>
                <h2 style={{textAlign:"center",fontSize:'28px'}} className='head'>{progams.Plans.Basic.Plan} Plan</h2>
                <h1 className='plantxt' style={{marginTop:'-20px'}}>COST: {progams.Plans.Basic.cost} USD </h1>
                <h1 className='plantxt' style={{marginTop:'-10px'}}>DURATION: {progams.Plans.Basic.Duration}</h1>
                 <h1 className='plantxt' style={{textAlign:'center',marginTop:'10px'}}>What to learn</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.first}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.second}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.third}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.fourth}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.fifth}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.sixth}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.seventh}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.eigth}</h1>
                <h1 className='source' >{progams.Plans.Basic.Technology.ninth}</h1>
                <h1 className='plantxt' style={{textAlign:'center'}}>Learning resources</h1>
                <h1 className='source' >{progams.Plans.Basic.Resourse.first}</h1>
                <h1 className='source' >{progams.Plans.Basic.Resourse.second}</h1>
                <h1 className='source' >{progams.Plans.Basic.Resourse.third}</h1> 
                <h1 className='source' >{progams.Plans.Basic.Resourse.fourth}</h1> 
                <h1 className='plantxt' style={{textAlign:'center'}}>Final project</h1>
                <h1 className='source' >{progams.Plans.Basic.Extras.first}</h1>
                <h1 className='source' >{progams.Plans.Basic.Extras.second}</h1>
                <h1 className='source' >{progams.Plans.Basic.Extras.third}</h1>

              </div>
              <div className='show'>
                <h2 style={{textAlign:"center",fontSize:'28px'}} className='head'>{progams.Plans.Premium.Plan} Plan</h2>
                <h1 className='plantxt' style={{marginTop:'-30px'}}>COST: {progams.Plans.Premium.cost} USD</h1>
                <h1 className='plantxt'>DURATION: {progams.Plans.Premium.Duration}</h1> 
                   <h1 className='plantxt' style={{textAlign:'center',marginTop:'-5px'}}>What to learn</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.first}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.second}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.third}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.fourth}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.fifth}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.sixth}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.seventh}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.eigth}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.ninth}</h1>
                <h1 className='source' >{progams.Plans.Premium.Technology.twelvth}</h1>

                <h1 className='plantxt' style={{textAlign:'center',marginTop:'-10px'}}>Learning resources:</h1>
                <h1 className='source' >{progams.Plans.Premium.Resourse.first}</h1>
                <h1 className='source' >{progams.Plans.Premium.Resourse.second}</h1>
                <h1 className='source' >{progams.Plans.Premium.Resourse.third}</h1> 
                <h1 className='source' >{progams.Plans.Premium.Resourse.fourth}</h1> 
                <h1 className='source' >{progams.Plans.Premium.Resourse.fifth}</h1> 
                <h1 className='plantxt' style={{textAlign:'center',marginTop:'-12px'}}>Final projects</h1>
                <h1 className='source' >{progams.Plans.Premium.Extras.first}</h1>
                <h1 className='source' >{progams.Plans.Premium.Extras.second}</h1>
                <h1 className='source' >{progams.Plans.Premium.Extras.third}</h1>
              </div>

        </div>
    </main>
  )
}

export default Viewcourses