import React from 'react'

function Projectform({fullname,track,title,code,link,setname,settrack,setcode,settitle,setlink,linkerr,postproject,label}) {
  return (
    <form className='projectform' onSubmit={(e) => e.preventDefault()}>
        <div style={{display:'flex',flexDirection:'column',gap:"4px"}}>
            <label>Student's fullname</label>
            <input className='inputsub'
                value={fullname}
                onChange={(e) => setname(e.target.value)}
                readOnly
            />
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:"4px"}}>
            <label>Track</label>
            <input className='inputsub'
                value={track}
                onChange={(e) => settrack(e.target.value)}
                readOnly
            />
        </div>
         <div style={{display:'flex',flexDirection:'column',gap:"4px"}}>
            <label>Project title</label>
            <input className='inputsub'
                value={title}
                onChange={(e) => settitle(e.target.value)}
                readOnly
            />
        </div>
         <div style={{display:'flex',flexDirection:'column',gap:"4px"}}>
            <label>Project code</label>
            <input className='inputsub'
                value={code}
                onChange={(e) => setcode(e.target.value)}
                readOnly
            />
        </div>
         <div style={{display:'flex',flexDirection:'column',gap:"4px"}}>
            <label>Link/URL to project presentation</label>
            <input className='inputsub'
                value={link}
                onChange={(e) => setlink(e.target.value)}
            />
            <p style={{color:'red',fontSize:'15px',marginTop:'-3px'}}>{linkerr}</p>
        </div>
        <button className='setbtn' style={{width:'80%',marginLeft:'-20px',marginTop:'-30px'}} onClick={() => postproject()}>{label}</button>
    </form>
  )
}

export default Projectform