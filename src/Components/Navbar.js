import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineClose } from 'react-icons/ai';
import { FcInfo } from "react-icons/fc";
function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
     
        <div className='navbar'>
 
            <FcInfo onClick={showSidebar} />
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
              
                <AiOutlineClose className="icon" onClick={showSidebar} />
              
            </li>
            <li className='navbar-toggle data'>
              <strong>Name:</strong>
              <span>{props.name}</span>
            </li>
            <li className='navbar-toggle data'>Borders:</li>
            <li className='navbar-toggle data'>
            <ul>
              {props.borders.map((border,index)=>{
                return (
                    
                    <li key={index} className="borders">{border}</li>
                );
              })
              }
             </ul>
            </li>
            <li className='navbar-toggle data'>
              <strong>Area Code:</strong>
              
              <span>{props.area}</span>
              
            </li>
            <li className='navbar-toggle data'>
            <strong>Time-Zone:</strong>
              <span>{props.timezone}</span>
            </li>
          </ul>
        </nav>
      
    </>
  );
}

export default Navbar;
