import React from "react";
import "./card.css";
function Card(props) {
  const isBlog = props.isBlog || "false";
  return (
    <div>
      {isBlog === "true" ? (
        
        <div className="max-w-sm .rounded-md overflow-hidden shadow-lg p-1">
         <div class="relative">
        <img className=" rounded-md w-60 h-60" src={props.passedImage} alt="Sunset in the mountains"/>
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
            </h1>
        </div>
        <div className="px-4 py-3">
          <div className="font-bold text-xl text-white mb-2">{props.passedData}</div>
          <p className="text-gray-700 text-base text-left">
          {props.passedDescription}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a target="_blank"href={props.passedUrl} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More...</a>

        </div>
      </div>
      ) : (
        <div className="card" style={props.passedStyle}>
          <img
            className="image"
            style={props.passedStyle}
            src={props.passedImage}
            alt="project1"
          />
          <div className="card-header">{props.passedData}</div>
          <div className="card-data">{props.passedDescription}</div>
        </div>
      )}
    </div>
  );
}

export default Card;
