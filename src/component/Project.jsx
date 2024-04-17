import React from 'react';
import './Project.css';
import projet from './img/img/Screenshot 2024-04-11 164113.png'
const Project = () => {
  return (
    <>
    <div className="project container" id='project'>
    <h1>Top Recent Projects</h1>
    <p>This project is related to notebook on the cloud. Means you can write and retrieve your notes from anywhere by just login your I'd and password. For creating this project I used mern technology. In this app there are there pages signup login and notes page if you are a new user then first you have to register yourself by username,email,password and confirmpassword. After that you redirect to login page after adding email I'd and password and login you redirect to login page. In this project on emai id is generated for one user because I use jwt token for authentication.</p>
    
       <div className='card cardc'>
        <img src={projet} alt="" />
        <h2>NOTEBOOK</h2>
        <div className='tech'>
        <h3 >MongoDB</h3>
        <h3>ExpressJS</h3>
        <h3>ReactJS</h3>
        <h3>NodeJS</h3>
        </div>
        <p><a href="https://rupaliverma1019.github.io/inoteFrontend/">View</a></p>
       </div>
       </div>
      
    </>
  )
}

export default Project