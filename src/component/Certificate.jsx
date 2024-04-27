import React from 'react'
import './Certificate.css'
import certificate1 from './img/img/Screenshot (199).png'
const Certificate = () => {
  return (
    <>
        <div className='certificate'>
        <h1>Certificates</h1>
        <div className="cards">
        <div class="card  " style={{width : 300}} >
            <img src={certificate1} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Responsive Web Design</h5>
            
            <p class="card-text">Proficient in designing responsive web pages through CSS media queries and flexible layout techniques. Ensured optimal user experiences on
various devices and screen sizes.
</p>
            
            </div>
        </div>
        <div class="card " style={{width : 300}} >
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">Frontend Development Course</h5>
            <p class="card-text">Master the art of crafting dynamic user interfaces with our intensive React frontend development course. Learn to create responsive,
interactive web applications using advanced React technology and
industry best practices.</p>
            
            </div>
        </div>
        </div>

  
  
        </div>
    </>
    
  
  )
}

export default Certificate

