import React from 'react'
import { useRef,useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from '../SERVICES/Axios'
import logo from '../IMAGES/LOGO.jpg'
function Tutimageset() {
    const [file,setfile] = useState('')
    let [image,setimage] = useState('')
    const [error,seterror] = useState('')
    const refs = useRef(null)

    const openpicker = () => {
        refs.current.click()
    }
    const previewphoto = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
           setimage(reader.result)
        }
    }
   
    const handlechange = (e) => {
        let file = e.target.files[0]
        setfile(file)
        previewphoto(file)
        seterror('')
    }
    const navigation = useNavigate()
    let ID = sessionStorage.getItem('Tutors_doc_id')
    const uploadimage = async (secure_url) => {
        let imgbody = {
            tut_id : ID,
            image_url : secure_url
        }
        await Axios.put('/tutors/account_setup/photo',imgbody)
        .then(() => navigation('/tutors/dashboard/',{replace : true}))
        .catch()
    }
    const postphoto = async (file) => {
        const url = `https://api.cloudinary.com/v1_1/dq4bazwe5/image/upload`
        const formdata = new FormData()
        formdata.append('file',file)
        formdata.append('unsigned_preset','webworks')
        try {
           const postimg = await fetch(url,{
            method : 'POST',
            body : formdata
           })
           if(postimg) {
            const responce = await postimg.json()
            uploadimage(responce.secure_url)
           }else {
              
           }
        }catch(err) {
            console.log(err)
        }
    }

    const validateimg = () => {
        if(!file) {
            seterror('Please choose a photo to upload')
        }else {
            postphoto(file)
        }
    }
  return (
    <main>
        <img src={logo} style={{marginLeft:'4%',height:'21vh',width:'11%',marginTop:'-15px'}}/>
                <p className='setuphead'>Upload your profile photo (Potrait)</p>
                <img src={image} style={{marginLeft:'39%',marginTop:'25px',height:'40vh',width:'20%',borderRadius:'4px'}}/>
                <input
                    type='file'
                    onChange={handlechange}
                    ref={refs}
                    className='hidden'
                    style={{marginLeft:"45%",marginTop:'10%',display:'none'}}
                />
                <button className='browseimg' onClick={() => openpicker()}>Browse photo</button>
                <button className='uploadimg' onClick={() => validateimg()}>Upload photo</button>
                <h1 style={{marginLeft:'41%',fontSize:'15px',fontWeight:'lighter',marginTop:'-150px',color:'red'}}>{error}</h1>
    </main>
  )
}

export default Tutimageset