import React, { useEffect, useState } from 'react'
import Projectform from './Projectform'
import Axios from '../SERVICES/Axios'
function Projectformpage() {
    
    const getprojects = async () => {
        await Axios.get('/student_activity/project/information')
    }
    useEffect(() => {

    },[])
    let [fullname,setfullname] = useState('Abigail Gerald')
    const [track,settrack] = useState('Full-stack web development')
    const [title,settitle] = useState('DOM manipulation')
    const [code,setcode] = useState('016')
    const [link,setlink] = useState('')
    const [linkerr,setlinkerr] = useState('')
    let [load,setload] = useState(true)
    const [label,setlabel] = useState('Submit project')
    let linkarr = []
    const vimeoregex = '/^https?:\/\/(www\.)?vimeo\.com\/\d+/'
    let validatelink = () => {
        if(link == '') {
            setlinkerr('A link to your presentation is required')
            linkarr.push(6)
        }else {
            setlinkerr('')
        }
        
    }
    
    const postproj = async () => {
        const formbody = {
            name : fullname,
            course : track,
            topic : title,
            numerics : code,
            url : link
        }
        await Axios.post('/student/activity/project_submission',formbody)
        .then()
        .catch()
    }
    const checkproj = () => {
        validatelink()
        if(linkarr.length == 0) {
            postproj()
            setload(!load)
            setlabel('Submitting...')
        }
    }
  return (
    <main className={'studpages'} style={{pointerEvents: !load ? 'none' : ''}}>
        <p style={{fontSize:"19px",textAlign:"center",marginTop:"60px",fontWeight:'lighter'}}>Please enter the link to your presentation on the form and submit</p>
        <Projectform
            fullname={fullname}
            track={track}
            link={link}
            title={title}
            code={code}
            setcode={setcode}
            setlink={setlink}
            setname={setfullname}
            settrack={settrack}
            settitle={settitle}
            linkerr={linkerr}
            postproject={checkproj}
            label={label}
        />
        {!load ? 
        <div role="status" aria-live="polite" style={{margin:'auto',backgroundColor:'transparent',width:'30%',marginTop:'-310px'}}>
            <div class="loader" aria-hidden="true">
                    <div class="ring"></div>
            </div>
        </div>
        : load}
    </main>
  )
}

export default Projectformpage