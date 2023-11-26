import React, { useState } from 'react';
import './navbar.css';
import {FaInstagram,FaStackOverflow,FaYoutube} from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useRef } from 'react';

import Home from '../home/home';
import Contact from '../contact/contact';
import Service from '../service/service';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    
    const [showMediaIcons,setShowMediaIcons]= useState(true);
    const [currentSection,setCurrentSection]=useState("home");
  //initialize userRef hook
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const scroolToSection = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  const changeCurrentSection = (currentSection)=>{
    setCurrentSection(currentSection);
  }
  return (
    <div>
        <nav className='main-nav'>
        <div className='logo'>
        <h1>
        <span>D</span>enil
        <span>N</span>air
        </h1>
        </div>
        <div className={showMediaIcons?"menuLink":"mobileMenuLink"}>
            <ul>
                <li className={currentSection=="home"?"selectedList":"notSelectedList"} onClick={()=>{scroolToSection(homeRef);
                changeCurrentSection("home")
                }}>
                    
                {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
                Home
                </li>
                
                
                <li className={currentSection=="service"?"selectedList":"notSelectedList"} onClick={()=>{scroolToSection(serviceRef);
                 changeCurrentSection("service")}}>
                    
                {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
                Service
                </li>
                
                <li className={currentSection=="contact"?"selectedList":"notSelectedList"} onClick={()=>{scroolToSection(contactRef);
                 changeCurrentSection("contact")}}>
                    
                {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
                Contact
                </li>
            
                
            </ul>
        </div>
        <div className='socialMedia'>
            <ul className='social-media-desktop'>
                <li>
                   <a target="_blank" href='https://stackoverflow.com/users/7305661/denil-nair' ><FaStackOverflow className="face"/></a> 
                </li>
                <li>
                   <a target="_blank" href='https://www.instagram.com/its_denil_nair/' ><FaInstagram className="insta"/></a> 
                </li>
                <li>
                   <a  target="_blank" href='https://www.youtube.com/channel/UCy7NSRJkgmxfmJF65XDcErg' ><FaYoutube className="youtube"/></a> 
                </li>
            </ul>
        </div>
        <div className='mobileMenu'>
            <a onClick={()=>setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu/>
            </a>
           
        </div>
    </nav>
    
    <div  className='sections' ref={homeRef}>
                <Home/>
    </div>
    
    <div  className='sections' ref={serviceRef}>
                <Service/>
    </div>
    
    <div  className='sections' ref={contactRef}>
                <Contact/>
    </div>
    </div>
    
    
  )
}

export default Navbar