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
      key: "Deploy Docker Image",
      value: process.env.PUBLIC_URL + "/img/docker.png",

      url: "https://medium.com/@denil007nair/deploy-docker-image-to-kubernetes-3f8c5c26dfdc",
      description:
        "Deploy your docker image to google cloud Platform under Kubernetes ",
    },
    {
      key: "Learn Docker Compose",
      value: process.env.PUBLIC_URL + "/img/docker_compose.png",

      url: "https://medium.com/@denil007nair/docker-compose-for-spring-boot-microservices-55d99fd34448",
      description:
        "Learn how to we can use Docker compose for Microservice application",
    },

    {
      key: "Few Steps towards Docker ..",
      value: process.env.PUBLIC_URL + "/img/docker.png",
      url: "https://medium.com/@denil007nair/few-steps-towards-docker-35399bcbd2de",
      description:
        " Lets learn about how to create your First docker image deploy it",
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
                passedImage={pair.value}
                passedStyle={projectCardStyle}
                passedUrl={pair.url}
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
