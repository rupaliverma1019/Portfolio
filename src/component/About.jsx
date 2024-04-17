import React from 'react'
import './About.css'
import img from './img/img/IMG_20230901_183502.jpg'
const About = () => {
  return (
    <>
        <div className='about' id='about'>
        <h3 style={{color: "chocolate" , textAlign:"center"}}>ABOUT ME</h3>
            <div className='about-content'>
            
                <img src={img} alt="" />
            
            
              
                <p>Hello, I'm Rupali Verma, hailing from Bihar, India. I hold a Master's in Computer Applications (MCA) from Lovely Professional University, where I achieved an impressive aggregate of 8.19 CGPA. My passion lies in web development, and I've honed my skills in HTML, CSS, JavaScript, and ReactJS , Nodejs , Expressjs MongoDB to create captivating and responsive web applications. I have a strong foundation in data structures and algorithms, which enables me to write efficient, clean code.

One of my notable projects is "Cloud NoteBook," where I designed and implemented a cloud-based note-taking application, offering users seamless access and synchronization of their notes across devices. Also I have dove one Internship from Bhavana Digital Academy as a Web Developer
 </p>
            </div>
        </div>
    </>
  )
}

export default About