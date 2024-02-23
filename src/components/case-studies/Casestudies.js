import React from 'react';
import "./Casestudies.css";
import invis from "../../assets/invis1.png";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



function Casestudies() {
  return (
    <div>

      <Navbar />

      <div className='casestudy-homepage'>


        <div className='main-casestudy'>
          <h1>Case Study</h1>
          <p>Learn from our customers' success stories and how they have leveraged better buying experiences to transform their businesses.</p>
        </div>


        <div className='case-study-cards'>
          <div className='case-study-invis-card'>
            <div class="image-container">
              <img src={invis} alt='invis'></img>
              <div class="overlay">
                <button class="zoom-button"><a href='/case-studies-invis-furniture' target='_blank'>View Case Study</a></button>
              </div>
            </div>
            <div>
              <p><a href='/case-studies-invis-furniture' target='_blank'>The Digital Revolution: Invis Furniture's Success Story in Modern E-commerce with 3D and AR Integration</a></p>
            </div>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Casestudies;