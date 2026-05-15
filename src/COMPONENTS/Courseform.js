
const Courseform = ({course,setcourse,courseval,plan,setplan,planval,queryone,setqueryone,queryoneval,querytwo,setquerytwo,querytwoval,send_data,label}) => {
    return (
        <form className="courseform" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label style={{marginLeft:'30px'}}>Select Course</label>
                <select className="courseinput"
                   value={course}
                   onChange={(e) => setcourse(e.target.value)}
                >
                <option></option>
                <option>Front-end web development</option>
                <option>Back-end web development</option>
                <option>Full-stack web development</option>
                <option>Mobile app development</option>
                <option>Game development</option>
                <option>Blockchain development</option>
                <option>Data analysis</option>
                <option>AI/Machine learning</option>
                </select>
                <p style={{color:'red',fontSize:'15px',marginLeft:"27px",marginTop:'10px'}}>{courseval}</p>
            </div>
            <div>
                <label style={{marginLeft:'30px'}}>Do you have a computer or PC?</label>
                <select className="courseinput"
                   value={queryone}
                   onChange={(e) => setqueryone(e.target.value)}
                >
                <option></option>
                <option>Yes</option>
                <option>No</option>
                <option>Do not have,but can find.</option>
                </select>
                <p style={{color:'red',fontSize:'15px',marginLeft:"27px",marginTop:'10px'}}>{queryoneval}</p>
            </div>
            <div>
                <label style={{marginLeft:'30px'}}>Can you learn online for at least 2 hours for 3 days in a week?</label>
                <select className="courseinput"
                   value={querytwo}
                   onChange={(e) => setquerytwo(e.target.value)}
                >
                 <option></option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
                </select>
                <p style={{color:'red',fontSize:'15px',marginLeft:"27px",marginTop:'10px'}}>{querytwoval}</p>
            </div>
            <button className="appfinish" onClick={() => send_data()}>{label}</button>
        </form>
    )
}
export default Courseform