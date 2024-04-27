import React, { useRef } from 'react';
import './Contact.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Contactimg from './img/img/contact.jpg'
import emailjs from '@emailjs/browser';
const Contact = () => {
 const form =  useRef()

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_xhgrx9f', 'template_uuf6w7b', form.current, {
      publicKey: 'DgtJoQrR9ySgSOg3N',
    })
    .then(
      (result) => {
        console.log(result.success);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    
};
  
  return (
    <>
    <div className='container contact' id='contact'>
        
        
    <div className="left">
        <img src={Contactimg} alt="" />
    </div>
    <form ref={form} onSubmit={sendEmail} className="right" >
        <h1>Contact With    <FaLinkedinIn /><FaGithub /> </h1>
        
        <input type="text" placeholder='Enter Your Name'/>
        <input type='email'placeholder='Enter Your Email'/>
        <textarea type='text' placeholder='Write your message' />
        <button type='submit '  className='btn'>SEND MESSAGE</button>
    </form>
    </div>
    
    </>
  )
}

export default Contact