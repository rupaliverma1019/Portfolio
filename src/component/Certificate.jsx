import React from 'react';
import './Certificate.css';
import certificate1 from './img/img/TCP-0124-0049_page-0001.jpg'
import certificate2 from './img/img/Screenshot (199).png'
const Certificate = () => {
  return (
    <>
    <div className="certificate container" id='certificate'>
    <h1>CERTIFICATE</h1>

    <div className="cards">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={certificate1} alt="Avatar" style={{width:300,height:300}}/>
    </div>
    <div class="flip-card-back">
      <h3>Responsive Web Design </h3> 
      <h6>FreeCodeCamp</h6> 
      <p>Proficient in designing responsive web pages through CSS media queries and flexible layout techniques. Ensured optimal user experiences on
various devices and screen sizes.</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={certificate2} alt="Avatar" style={{width:300,height:300}}/>
    </div>
    <div class="flip-card-back">
      <h3>Frontend Development Course</h3> 
      <h6> Tech Vidya
Training Institute</h6> 
      <p>Master the art of crafting dynamic user interfaces with our intensive React frontend development course. Learn to create responsive,
interactive web applications using advanced React technology and
industry best practices.</p>
    </div>
  </div>
  </div>
</div>
       </div>
      
    </>
  )
}

export default Certificate