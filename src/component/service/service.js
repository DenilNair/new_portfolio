import React from "react";
import "./service.css";
import Card from "../cards/card";
const Service = () => {
  const technologiesList = [
    { key: "Angular", value: process.env.PUBLIC_URL + "/img/angular.png" },
    { key: "Java", value: process.env.PUBLIC_URL + "/img/java.jpg" },
    { key: "Node JS", value: process.env.PUBLIC_URL + "/img/node.png" },
    {
      key: "Oracle Database",
      value: process.env.PUBLIC_URL + "/img/oracle.png",
    },
    { key: "React", value: process.env.PUBLIC_URL + "/img/react.png" },
    { key: "Android", value: process.env.PUBLIC_URL + "/img/android.jpg" },
    {
      key: "Chrome Extension",
      value: process.env.PUBLIC_URL + "/img/extension.jpg",
    },
    { key: "Javascript", value: process.env.PUBLIC_URL + "/img/js.png" },
    {
      key: "Springboot",
      value: process.env.PUBLIC_URL + "/img/springboot.png",
    },
    { key: "Ionic", value: process.env.PUBLIC_URL + "/img/ionic.png" },
  ];
  return (
    <div className="mainService">
      <div>service</div>
      <div>
        <h4>Technologies</h4>
        <div>
          <div className="gridClass">
            <div class="outer-grid">
              <div class="grid-item">Previous</div>
              <div class="grid-item">
                <div class="inner-grid">
                {technologiesList.map((pair, index) => (
                    <TechnologiesPair key={index} pair={pair} />
                  ))}
                </div>
              </div>

              <div class="grid-item">Next</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4>Projects</h4>
        <div>
          <div className="gridClass">
            <div class="outer-grid">
              <div class="grid-item">Previous</div>
              <div class="grid-item">
                <div class="inner-grid">
                  {technologiesList.map((pair, index) => (
                    <TechnologiesPair key={index} pair={pair} />
                  ))}
                </div>
              </div>

              <div class="grid-item">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechnologiesPair = ({ pair }) => {
  return (
    <div class="grid-item">
      <Card passedData={pair.key} passedImage={pair.value} />
    </div>
  );
};

export default Service;
