import React from "react";
import "./Card.scss"; // Import the CSS file for styling

const Card = ({ image, title, description, startdate }) => {
  return (
    <div className="card-item">
      <div className="card-item-img-container">
        <img className="card-item-image" src={image} alt={title} />
      </div>
      <div className="card-item-info">
        <div className="card-item-header">
          <p className="card-item-startdate">{startdate}</p>
          <div className="card-item-name">
            <p>{title}</p>
          </div>
        </div>
        <div className="card-item-desc">
          <button className="card-item-button">EDIT</button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
