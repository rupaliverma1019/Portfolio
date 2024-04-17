import React, { useState } from 'react';
import './Layout.css';
import { AiFillBackward, AiFillFastForward } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Layout = () => {
  
  const[toggle , setToggle] = useState(true)
  const handleToggle = ()=>{
      setToggle(!toggle)
  }

  return (
    <>
        <div className='sidebar-section layout' id='layout'>
            <div className={toggle ? "sidebar-toggle" : "sidebar"}>
              <div className='sidebar-toggle-icons'>
                <p onClick={handleToggle}>
                      {
                        toggle ? (<AiFillBackward size={30}/>) : (<AiFillFastForward size={30}/>)
                      }
                </p>
              </div>
              <Sidebar toggle={toggle}/>
            </div>
        </div>
    </>
  )
}

export default Layout