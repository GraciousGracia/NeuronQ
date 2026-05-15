import React from 'react'

function Tutprojectform({bckchange,setbckchange}) {
  return (
    <form className='tutprojectform'>
        <div className='holdprojinput'>
            <div>
                <label>Course</label>
                <input
                    className='projectinput'
                />
            </div>
            <div>
                <label>Project Level</label>
                <input 
                    className='projectinput'
                
                />
            </div>
            <div>
                <label>Date of deadline</label>
                <input
                    className='projectinput'
                />
            </div>
             <div>
                <label>Time of deadline</label>
                <input
                    className='projectinput'
                />
            </div>
        </div>
        <div>
            <textarea className='projdescription'
               placeholder='Write projects'
            />
        </div>
        <div style={{marginLeft:"30%",width:"100%",marginTop:"25px"}}>
            <button className='projectformbtn'>Post</button>
            <button className='projectformbtn' onClick={() => setbckchange(!bckchange)}>Cancel</button>
        </div>
    </form>
  )
}

export default Tutprojectform