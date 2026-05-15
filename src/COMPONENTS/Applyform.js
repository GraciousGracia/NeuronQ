import React from 'react'

function Applyform({countries,fname,lname,email,mobile,gender,nation,setfname,setlname,setmail,setmobile,setgender,setnation,valfname,vallname,valmail,valmobile,send,label}) {
  return (
    <div>
        <form className='applyform' onSubmit={(e) => e.preventDefault()}>
            <div>
                <label>First name</label>
                <input className='applyinput'
                   placeholder='Enter your first name'
                   value={fname}
                   onChange={(e) => setfname(e.target.value)}
                />
                <p style={{color:'red',fontSize:'15px',marginLeft:"20px",marginTop:'10px'}}>{valfname}</p>
            </div>
            <div>
                <label>Last name</label>
                <input className='applyinput'
                   placeholder='Enter your last name'
                   value={lname}
                   onChange={(e) => setlname(e.target.value)}
                />
                <p style={{color:'red',fontSize:'15px',marginLeft:"20px",marginTop:'10px'}}>{vallname}</p>
            </div>
            <div>
                <label>Email-address</label>
                <input className='applyinput'
                  placeholder='Enter your email-address'
                  value={email}
                  onChange={(e) => setmail(e.target.value)}
                />
                <p style={{color:'red',fontSize:'15px',marginLeft:"20px",marginTop:'10px'}}>{valmail}</p>
            </div>
            <div>
                <label>Mobile number</label>
                <input className='applyinput'
                  placeholder='Enter your mobile number'
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
                <p style={{color:'red',fontSize:'15px',marginLeft:"20px",marginTop:'10px'}}>{valmobile}</p>
            </div>
            <div>
                <label>Select Gender</label>
                <select className='applyinput'
                   value={gender}
                   onChange={(e) => setgender(e.target.value)}
                >
                <option>Male</option>
                <option>Female</option>
                </select>
            </div>
            <div>
                <label>Select Country of residence</label>
                <select className='applyinput'
                  value={nation}
                  onChange={(e) => setnation(e.target.value)}
                >
                {countries.map((conts) => (
                    <option key={conts.isoCode}>
                        {conts.name}
                    </option>
                ))}
                </select>
            </div>
            <button className='applybtn' onClick={() => send()}>{label}</button>
        </form>
    </div>
  )
}

export default Applyform