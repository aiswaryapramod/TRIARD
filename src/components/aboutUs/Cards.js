import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.icon} alt="Card Icon" className="card-icon" />
      <h3 className="card-title">{data.title}</h3>
      <p className="card-description">{data.description}</p>
    </div>
  );
};

export default Card;
