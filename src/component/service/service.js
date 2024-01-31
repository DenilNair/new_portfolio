import React from "react";
import "./service.css";
import Card from "../cards/card";
import Carousel from "react-grid-carousel";
import "react-grid-carousel/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const serviceCardStyle = {
    width: "100px",
    height: "100px",
  };
  const projectCardStyle = {
    width: "400px",
    height: "200px",
    padding: "20px",
  }

  const projectList = [
    {
      key: "Encrypted QR",
      value: process.env.PUBLIC_URL + "/img/angular.png",

      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        "Encrypted QR is an android application developed in Ionic 5 Framework. This app can generate and read encrypted QR so that the intruder can't read the QR code data from other scanner",
    },
    {
      key: "MultiTasker",
      value: process.env.PUBLIC_URL + "/img/java.jpg",

      url: "https://play.google.com/store/apps/details?id=io.denil.Office",
      description:
        " Multitasker is an Android applicatio which can is used in daily life to make Todo list, Draw canvas, store notes and a basic calculator.",
    },

    {
      key: "Flight Booking System",
      value: process.env.PUBLIC_URL + "/img/node.png",
      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        " Flight Booking System is a Flight reservation application developed mainly with Angular frontend and Java Backend- for learning purpose. The backend of the application is fully developed on Microservices principal.",
    },

    {
      key: "Home Automation System",
      value: process.env.PUBLIC_URL + "/img/node.png",
      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        " Home automation system is the project used to control your home appliances using Raspberry Pi as controller unit",
    },
    {
      key: "Automated Railway System",
      value: process.env.PUBLIC_URL + "/img/node.png",
      description:
        "This is a prototype application used to automate Railyway reserveration system and eliminate Ticket conductor manual Job",
    },
    {
      key: "Blog maker",
      value: process.env.PUBLIC_URL + "/img/node.png",
      description: "MERN aaplication used to write and publish your own Blog",
    },
  ];

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

    { key: "Ionic", value: process.env.PUBLIC_URL + "/img/docker.png" },

    { key: "Ionic", value: process.env.PUBLIC_URL + "/img/k8.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
  };

  return (
    <div className="mainService">
      <div>
        <h4 className="sub-headings">Projects</h4>
        {/*<div>
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
                  */}
      </div>

      <Carousel cols={3} rows={1} gap={0} loop className="carousel">
        {projectList.map((pair, index) => (
          <Carousel.Item>
            <div className="cardele">
              <CarouselTechnologiesPair
                key={index}
                pair={pair}
                cardStyle={projectCardStyle}
              />
            </div>
          </Carousel.Item>
        ))}

        {/* ... */}
      </Carousel>
      <h4 className="sub-headings">Technologies</h4>
      <div className="slider">
      <Carousel  cols={6} rows={1} gap={0} responsive={{desktop:{items:6},tablet:{items:4},mobile:{items:9}}} loop className="carousel">
        {technologiesList.map((pair, index) => (
          <Carousel.Item>
            <div className="cardele">
            <TechnologiesPair
              key={index}
              pair={pair}
              cardStyle={serviceCardStyle}
            />
            </div>
          </Carousel.Item>
        ))}

        {/* ... */}
      </Carousel>
       
      </div>
      <div>
        {/** 
         * <div>
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
         */}
      </div>
      <br />
    </div>
  );
};

const TechnologiesPair = ({ pair, cardStyle }) => {
  return (
    <div class="grid-item">
      <Card passedImage={pair.value} passedStyle={cardStyle} />
    </div>
  );
};

const CarouselTechnologiesPair = ({ pair, cardStyle }) => {
  return (
    <div class="grid-item">
      <Carousel.Item>
        <Card
          passedData={pair.key}
          passedImage={pair.value}
          passedStyle={cardStyle}
          passedDescription={pair.description}
        />
      </Carousel.Item>
    </div>
  );
};

export default Service;
