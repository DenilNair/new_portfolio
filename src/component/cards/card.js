import React from "react";
import "./card.css";
function Card(props) {
  return (
    
      <div className="card" style={props.passedStyle}>
        
          <img className="image" style={props.passedStyle} src={props.passedImage} alt="project1" />
      
        <div className="card-data">{props.passedData}</div>
      </div>
    
  );
}

export default Card;
