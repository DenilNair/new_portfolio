import React from "react";
import "./card.css";
function Card(props) {
  const isBlog = props.isBlog || "false";
  return (
    <div>
      {isBlog === "true" ? (
        
        <div className="max-w-sm .rounded-md overflow-hidden shadow-lg p-1">
        <img className=" rounded-md" src={props.passedImage} alt="Sunset in the mountains"/>
        <div className="px-4 py-3">
          <div className="font-bold text-xl mb-2">{props.passedData}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More...</button>

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
