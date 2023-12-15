import React from "react";
import "./service.css";
import Card from "../cards/card";
import Carousel from "react-grid-carousel";
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
    height: "400px",
  };
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
      <h4 className="sub-headings">Technologies</h4>
      <div className="slider">
        <Slider {...settings}>
          {technologiesList.map((pair, index) => (
            <TechnologiesPair
              key={index}
              pair={pair}
              cardStyle={serviceCardStyle}
            />
          ))}
        </Slider>
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

      <Carousel cols={2} rows={1} gap={10} loop className="carousel">
        <Carousel.Item
          style={{ backgroundColor: "red" }}
        >
          <Card
            style={{ backgroundColor: "red" }}
            passedData="this is my first project in my life"
            passedImage="https://picsum.photos/800/600?random=2"
            passedStyle={projectCardStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Card
            passedData="fjgj"
            passedImage="https://picsum.photos/800/600?random=2"
            passedStyle={projectCardStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Card
            passedData="fjgj"
            passedImage="https://picsum.photos/800/600?random=2"
            passedStyle={projectCardStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </div>
  );
};

const TechnologiesPair = ({ pair, cardStyle }) => {
  return (
    <div class="grid-item">
      <Card
        passedImage={pair.value}
        passedStyle={cardStyle}
      />
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
        />
      </Carousel.Item>
    </div>
  );
};

export default Service;
