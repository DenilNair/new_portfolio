import React from "react";
import "./blog.css";
import Card from "../cards/card";
import Carousel from "react-grid-carousel";
import "react-grid-carousel/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const serviceCardStyle = {
    width: "100px",
    height: "100px",
  };
  const projectCardStyle = {
    width: "400px",
    height: "300px",
  };

  const projectList = [
    {
      key: "Deploy Docker Image to Kubernetes",
      value: process.env.PUBLIC_URL + "/img/angular.png",

      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        "Encrypted QR is an android application developed in Ionic 5 Framework. This app can generate and read encrypted QR so that the intruder can't read the QR code data from other scanner",
    },
    {
      key: "Docker Compose for Spring boot Microservices",
      value: process.env.PUBLIC_URL + "/img/java.jpg",

      url: "https://play.google.com/store/apps/details?id=io.denil.Office",
      description:
        " Multitasker is an Android applicatio which can is used in daily life to make Todo list, Draw canvas, store notes and a basic calculator.",
    },

    {
      key: "Few Steps towards Docker ..",
      value: process.env.PUBLIC_URL + "/img/node.png",
      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        " Flight Booking System is a Flight reservation application developed mainly with Angular frontend and Java Backend- for learning purpose. The backend of the application is fully developed on Microservices principal.",
    },

    {
      key: "First REST API using Spring boot",
      value: process.env.PUBLIC_URL + "/img/node.png",
      url: "https://play.google.com/store/apps/details?id=io.ionic.QRScan",
      description:
        " Home automation system is the project used to control your home appliances using Raspberry Pi as controller unit",
    }
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
        <h4 className="sub-headings">Blog</h4>
       
      </div>
      <Carousel cols={3} rows={1} gap={0} loop className="carousel">
        {projectList.map((pair, index) => (
          <Carousel.Item>
            <div className="cardele">
              <Card
                className="carr"
                passedData={pair.key}
                passedDescription={pair.description}
                passedImage="https://picsum.photos/800/600?random=2"
                passedStyle={projectCardStyle}
                isBlog= "true"
              />
            </div>
          </Carousel.Item>
        ))}

        {/* ... */}
      </Carousel>
      
      
      
      <br />
    </div>
  );
};


export default Blog;
