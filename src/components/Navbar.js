import React, { useState } from 'react'
import { FaHome,FaUserAlt,FaBuffer,FaAddressBook,FaCogs,FaBars} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Navbar.css';


export default function Navbar({children}) {
  const[isOpen, setIsOpen] = useState (false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
    {
       path:"/" ,
       name: "Home",
       icon:<FaHome/>
    },
    {
      path:"/about" ,
      name: "About",
      icon:<FaUserAlt/>
    },
    {
      path:"/service" ,
      name: "Services",
      icon: <FaCogs/>
    },
    {
       path:"/contact" ,
       name: "Contact",
       icon: <FaAddressBook/>
    },
    {
      path:"/projects" ,
      name: "Projects",
      icon:<FaBuffer/>
    }
  ]

  return (
    <>
    <div className='sidebar_containers'>
      <div style={{width: isOpen ? "350px" : "100px"}} className='sidebar'>
       <div className='top_section'>
          <h1 style={{display: isOpen ? "block" : "none"}}className='name'>MANSI</h1>
         <div style={{marginLeft: isOpen ? "105px" : "0px"}} className='bars'>
          <FaBars onClick={toggle}/>
         </div>
       </div>
       {
          menuItem.map((item,index)=> (
            <NavLink to ={item.path} key={index} className="link" activeclassname="active">
                <div className='icon'>{item.icon}</div>
                <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div> 

            </NavLink>
          ))
       }
      </div>
      <main>{children}</main>
    </div>

</>
  )
}
