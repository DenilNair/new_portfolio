import React, { useState } from "react";
import "./navbar.css";
import { FaInstagram, FaStackOverflow, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";

import Home from "../home/home";
import Contact from "../contact/contact";
import Service from "../service/service";
import Blog from "../blog/blog";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ sendScreenModeToApp }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  //state to set dark mode enable/disable
  const [isDarkMode, setIsDarkmode] = useState(true);
  const [appModeColor, setAppModeColor] = useState("");
  //initialize userRef hook
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const scroolToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const changeCurrentSection = (currentSection) => {
    setCurrentSection(currentSection);
  };

  const changeIsDarkmode = () => {
    console.log("control come to changeIsDarkmode");
    setIsDarkmode(!isDarkMode);
    if (isDarkMode) {
      console.log("is dark mode true");
      setAppModeColor("#0D1A2D");
      sendScreenModeToApp("#0D1A2D");
    } else {
      console.log("is dark mode false");
      setAppModeColor("#7db1ff");
      sendScreenModeToApp("#7db1ff");
    }
  };

  return (
    <div className="main-nav-div">
      <nav className="main-nav">
        <div className="logo">
          <h1>
            <span>D</span>enil
            <span>N</span>air
          </h1>
        </div>
        <div className={showMediaIcons ? "menuLink" : "mobileMenuLink"}>
          <ul>
            <li
              className={
                currentSection == "home" ? "selectedList" : "notSelectedList"
              }
              onClick={() => {
                scroolToSection(homeRef);
                changeCurrentSection("home");
              }}
            >
              {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
              Home
            </li>

            <li
              className={
                currentSection == "service" ? "selectedList" : "notSelectedList"
              }
              onClick={() => {
                scroolToSection(serviceRef);
                changeCurrentSection("service");
              }}
            >
              {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
              Service
            </li>

            <li
              className={
                currentSection == "blog" ? "selectedList" : "notSelectedList"
              }
              onClick={() => {
                scroolToSection(blogRef);
                changeCurrentSection("blog");
              }}
            >
              {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
              Blog
            </li>

            <li
              className={
                currentSection == "contact" ? "selectedList" : "notSelectedList"
              }
              onClick={() => {
                scroolToSection(contactRef);
                changeCurrentSection("contact");
              }}
            >
              {/* earlier using link tag to route to particular section to add funtionality to scrool down removing it 
                <Link to='/home'>Home</Link>
                */}
              Contact
            </li>
          </ul>
        </div>
        <div className="toogleMode">
          {" "}
          <button className="sidebar-toggle" onClick={changeIsDarkmode}>
            {isDarkMode && (
              <span>
                <img
                  src={process.env.PUBLIC_URL + "/img/mode-light.svg"}
                  alt="project1"
                />
              </span>
            )}
            {!isDarkMode && (
              <span>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/img/lighting-display-dark-mode.svg"
                  }
                  alt="project1"
                />
              </span>
            )}
          </button>
        </div>
        <div className="socialMedia">
          <ul className="social-media-desktop">
            <li>
              <a
                target="_blank"
                href="https://stackoverflow.com/users/7305661/denil-nair"
              >
                <FaStackOverflow className="face" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/its_denil_nair/"
              >
                <FaInstagram className="insta" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCy7NSRJkgmxfmJF65XDcErg"
              >
                <FaYoutube className="youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="mobileMenu">
          <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>

      <div className="sections" ref={homeRef}>
        <Home />
      </div>

      <div className="sections" ref={serviceRef}>
        <Service />
      </div>

      <div className="sections" ref={blogRef}>
        <Blog />
      </div>
      <div className="sections" ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
