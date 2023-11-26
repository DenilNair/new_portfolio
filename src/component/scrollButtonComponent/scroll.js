import React from 'react';
import './scroll.css';

import {FaArrowCircleUp} from "react-icons/fa";

const Scroll = () => {
    
const handleScrollToTop=()=>{

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
};
  return (
    <div><FaArrowCircleUp className="instaaa"  onClick={handleScrollToTop}/></div>
  )
};

export default Scroll