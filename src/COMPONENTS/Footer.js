import React from 'react'
import logo from '../IMAGES/LOGO.jpg'
import{ FaWhatsapp } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa' 
import { FaCopyright } from 'react-icons/fa'
import Newsletter from './Newsletter'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

function Footer() {
      const ismobile = useMediaQuery({maxWidth : 767})
      const istablet = useMediaQuery({minWidth: 768, maxWidth : 1023})
      const iscomputer = useMediaQuery({minWidth : 1023})
  return (
    <>
      <footer style={{marginTop:ismobile ? '60%' : '',height:ismobile ? '150vh' : '',display:ismobile ? 'flex' : '', flexDirection : ismobile ? 'column' : ''}}>
        <div>
            <img src={logo} style={{height:'38vh',marginTop:'-50px'}}/>
            <p style={{color:'white',fontSize:'20px',marginTop:'-10%',marginLeft:'30px',lineHeight:'30px',fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Our mission is to equip and raise future innovators and technologist <br></br>accross the globe through quality tech education and mentorship.</p>
            <h3 className='follow'>Follow us</h3>
            <div style={{display:'flex',flexDirection:'row',gap:'15px',marginLeft:"20px"}}>
              <FaFacebook style={{fontSize:'30px',color:"white"}}/>
              <FaLinkedin style={{fontSize:'30px',color:'white'}}/>
              <FaInstagram style={{fontSize:'30px',color:'white'}}/>
              <FaTiktok style={{fontSize:'30px',color:'white'}}/>
              <FaTwitter style={{fontSize:'30px',color:'white'}}/>
            </div> 
            <h3 className='contacts'>Contacts</h3>
            <h1 className='quick'><FaWhatsapp style={{color:'white'}}/> +234 700978922</h1>
            <h1 className='quick'><FaEnvelope style={{marginRight:'10px'}}/>info.neuronq@gmail.com</h1> 
        </div>
      
        <div style={{display:'flex',flexDirection:'column',marginLeft:'170px',marginTop:"8%"}}>
            <h3 style={{marginTop:'160px',marginLeft:'10px',fontSize:"45px",fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",color:'white'}}>News Letter</h3>
            <Newsletter/>
        </div>
      </footer>
      <h1 style={{marginTop:'-67px',textAlign:'center',fontSize:'15px',fontWeight:'lighter',color:'white'}}><FaCopyright style={{marginRight:'10px',marginTop:'20px'}}/>Copyright 2025, Alright reserved by neuronq</h1>
    </>
  )
}
export default Footer