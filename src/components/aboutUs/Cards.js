import React,{useEffect, useRef} from "react";
import "./Card.css";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Card = ({ data }) => {


  return (
    <div className="card" >
      <img src={data.icon} alt="Card Icon" className="card-icon" />
      <h1 className="card-title">{data.title}</h1>
      <p className="card-description">{data.description}</p>
    </div>
  );
};

export default Card;
