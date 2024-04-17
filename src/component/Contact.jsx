import React from 'react';
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contactimg from './img/img/contact.jpg'
const Contact = () => {
  return (
    <>
    <div className='container contact' id='contact'>
        
        
    <div className="left">
        <img src={Contactimg} alt="" />
    </div>
    <div className="right">
        <h1>Contact With    <FaLinkedinIn /><FaGithub /> </h1>
        
        <input type="text" placeholder='Enter Your Name'/>
        <input type='email'placeholder='Enter Your Address'/>
        <textarea type='text' placeholder='Write your message' />
        <button type='submit' className='btn'>SEND MESSAGE</button>
    </div>
    </div>
    
    </>
  )
}

export default Contact