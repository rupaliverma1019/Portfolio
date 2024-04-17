import React from 'react'
import './Techstack.css'
import { TechstackList } from './utils/TechstackList'
const Techstack = () => {
  return (
    <>
    <div className='container techstack' id='techstack'>
    <h1>Technologies Stack</h1>
    <p>👉including programing Language , frameworks databases , front-end and back-end tools , and APIs </p>
    <div className="row">
        {
            TechstackList.map(tech=>(
                <div key={tech._id} className="container col-md-3 cardContainer">
                    <div className="card-m-2">
                        <div className="card-content ">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                    <tech.icon className='tech-icon '/>
                                    </div>
                                    <div className="media-body">
                                        <h5>{tech.name}</h5>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            ))
        }
    </div>
    </div>
    </>
  )
}

export default Techstack