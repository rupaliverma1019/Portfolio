import React from 'react'
import './Education.css'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { educationlist } from './utils/Educationlist';
const Education = () => {
  return (
    <>
        <div className='education' id='education'>
            <h1>Education</h1>
        
        {
            educationlist.map((list)=>
            <Timeline lineColor={'white'}>
            <TimelineItem
            key={list.id}
            dateText={list.name}
            style={{ color: 'burlywood', color: '#fff'}}
          >
            <div className="content">
            <h3>{list.degree}</h3>
            <h4>{list.school}</h4>
            <p>{list.percentage} </p>
            <p>{list.duration}</p>
            </div>
            
            
          </TimelineItem>
          </Timeline>
        )
        }
        
        </div>
    
    </>
  )
}

export default Education