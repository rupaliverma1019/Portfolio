import React from 'react'
import './Sidebar.css'
import logo from './img/img/rupali.jpg';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineWork } from "react-icons/md";
import { FcBiotech } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { Link,  animateScroll as scroll, scrollSpy } from 'react-scroll';

const Sidebar = ({toggle}) => {
  return (
    <>
      {
        toggle ? (
        <div className='navbar-profile-pic'>
        <img src={logo} alt="" srcset="" />
        <div className="nav-items">
            <div className="nav-item">
              
                <div className="nav-link">
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                    <FaHome />
                        Home
                    </Link>
                
                </div>
                <div className="nav-link">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />
                        About
                    </Link>
                
                </div>
                
                <div className="nav-link">
                <Link to='teckstack' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech />
                    Tech Stack
                    </Link>
                
                </div>
                <div className="nav-link">
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                    <MdCastForEducation />
                    Education
                    </Link>

                
                </div>
                <div className="nav-link">
                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100}>
                    <MdOutlineWork />
                    Work Experience
                    </Link>
                
                </div>
                
                <div className="nav-link">
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                    <GoProjectRoadmap title='Project'/>
                    Projects
                    </Link>
                
                </div>
                <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                <IoIosContact title='Contact' />
                    Contact
                    </Link>
                
                </div>
            </div>
        </div>
        
    </div>) :
    
    (
      <div className="nav-items">
            <div className="nav-res">
                <div className="nav-link">
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <FaHome title='Home'/>
                  </Link>
                
                    
                </div>
                <div className="nav-link">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout title='About'/>
                </Link>
                    
                </div>
                
                
                <div className="nav-link">
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                <MdCastForEducation  title='Education'/>
                </Link> 
                </div>
                <div className="nav-link">
                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech title='Tech Stack'/>
                </Link>
                </div>
                <div className="nav-link">
                <Link to='experience' spy={true} smooth={true} offset={-100} duration={100}>

                <MdOutlineWork title='Work Experience' />
                </Link>
                </div>
                
                <div className="nav-link">
                <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                <GoProjectRoadmap title='Project'/>
                </Link>
                </div>
                <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}> 
                <IoIosContact title='Contact' />
                </Link>
                </div>
            </div>
        </div>
    ) 
      }

    </>
  )
}

export default Sidebar