import React from "react";
import "./home.css";

import { FaHands } from "react-icons/fa";

const Home = () => {
  const downloadPdf = () => {
    console.log("download the pdf " + process.env.PUBLIC_URL);
  };
  var waveImg = process.env.PUBLIC_URL + "/img/angular.png";
  return (
    <div className="mainHome">
      <div>
        <div className="gridClass">
          <div class="outer-grid-home">
            <div className="grid-item-home">
              <div className="homeHeading">
                <div className="grid-item-home">
                  I'am <span className="grid-item-home">Denil</span>
                  <br /> Software developer based in India
                  <br/><div className="aboutIntro">I'm a skilled Software developer with 5 years of experience specializing in the Full Stack development
(Java, Spring boot Framework, Oracle, Mongo, Angualar,Express.js, React.js, and Node.js). 
Proficient in building web applications from concept to deployment. 
Demonstrated expertise in Backend as well as front-end development in dynamic web applications.
Currently associated with barclays bank.</div>
                </div>
                
                {/*
                <div>
                   <img className="image" src={waveImg} alt="project1" />
                </div>*/}
              </div>{" "}
            </div>

            <div class="grid-item">
              <img
                className="image2"
                src="https://picsum.photos/800/600?random=2"
                alt="project1"
              />
            </div>
          </div>
        </div>
        <div className="gridClass">
          <div class="outer-grid">
            <div class="grid-item">
              <a
                className="downloadCV"
                href={require("../../resume_27_01_24.pdf")}
                download="myresume"
              >
                Get My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
