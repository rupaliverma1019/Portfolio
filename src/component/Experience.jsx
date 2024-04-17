import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Experience.css'

const Experience = () => {
  return (
    <>
    <div className='experience' id='experience'>
            <h1>Experience</h1>
    
    <Timeline>
            <TimelineItem
    key="002"
    dateText="05/2023 – 12/2023"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Bhavana Digital Academy</h3>
    <h4 style={{ color: '#61b8ff' }}>Web Developer Trainee</h4>  
    <ul>
    <li>
    Designed and crafted visually engaging user interfaces
for the company's website, ensuring seamless navigation
and responsive layouts

    </li>
    <li>Collaborated with cross-functional teams to translate
design concepts into interactive web pages using HTML, CSS, and JavaScript. </li>
<li>Enhanced user experiences through these design and
development efforts.</li>


</ul>

  </TimelineItem>
  </Timeline>
  
  </div>
    </>
  )
}

export default Experience