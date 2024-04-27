import React from 'react'
import Resume from './assets/docs/resume.pdf'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <div className='home-content'>
    <h2>Hi👋 I'm a</h2>
    <h1>
    <Typewriter
              options={{
              strings: ["FullStack Developer !", 'Mern Developer !'],
              autoStart: true,
              loop: true,
  }}
          />
    </h1>

    <div className='home-buttons'>
      <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7491080833' rel='norefferer' target='_blank'>Hire Me</a>
        
        <a href={Resume} className='btn btn-cv'>Resume</a>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home