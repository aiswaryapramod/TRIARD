import React from "react";
import logo from "../../assets/logo2.png";
import "./AboutUs.css";
import boywearingar from "../../assets/boy-wearing-pair-vr-glasses-with-word-vr-front.png";
import mixedreality from "../../assets/mixed_reality_mr.png";
import whomweare from "../../assets/whom-we-are.png";
import virtualclothing from "../../assets/virtual_clothing.png";
import ourcommitment from "../../assets/our-commitment-to-you.png";
import fistbump from "../../assets/3d-rendering-cartoon-hand.png";
import "./Card.css";
import Card from "./Cards";
import Footer from "../footer/Footer";

import whychooseus from "../../assets/whychooseus3.png";
/* import whychooseustriard from "../../assets/whychoosetriadg.png"; */

import innovation from "../../assets/innovation1.png";
import expertise from "../../assets/expertise.png";
import customer from "../../assets/customer.png";
import support from "../../assets/support.png";
import seamless from "../../assets/seamless.png";
import rectangleright from "../../assets/Rectangle-background-right.png";
import rectangleleft from "../../assets/Rectangle-background-left.png";

const AboutUs = () => {
  const data = [
    {
      icon: innovation,
      title: "Innovation",
      description:
        "We take pride in being at the forefront of digital innovation, constantly pushing boundaries, and exploring new horizons.",
    },
    {
      icon: expertise,
      title: "Expertise",
      description:
        " Our team comprises tech experts, creatives, and industry specialists, who collaborate to deliver exceptional results.",
    },
    {
      icon: customer,
      title: "Customer-Centric Approach",
      description:
        " Understanding your needs is our priority. We tailor Triard to align with your unique business requirements.",
    },
    {
      icon: support,
      title: "Support and Updates ",
      description:
        "We provide reliable customer support and continuously update Triard with the latest features and enhancements",
    },
    {
      icon: seamless,
      title: "Seamless Integration",
      description:
        " We ensure that integrating Triard into your existing e-commerce platform is a smooth and seamless process.",
    },
  ];
  return (
    <div>
      <header className="aboutus_navbar_image_container">
        <a href="/">
          <img
            className="aboutus_navbar_image"
            alt="Triard logo"
            src={logo}
          ></img>
        </a>
      </header>
      <div className="aboutus_boy_image_container">
        <img
          className="aboutus_boy_image"
          src={boywearingar}
          alt="boy wearing ar"
        />
      </div>
      <div className="aboutus_ourcommitment_aboutus_text_container">
        <h3 className="aboutus_ourcommitment_text_container_h31">About Us</h3>
        <p className="aboutus_ourvision_text_container_p ">
          Welcome to Triard, where innovation meets technology to redefine
          digital experiences. We are a dynamic team of passionate minds at
          DigitalBuddha, committed to empowering businesses with transformative
          solutions in the digital realm.
        </p>
      </div>
      <div className="aboutus_container">
        <div className="aboutus_ourvision_main_container">
          <div className="aboutus_ourvision_text_container">
            <h3 className="aboutus_ourvision_text_container_h3">Our Vision</h3>
            <p className="aboutus_ourvision_text_container_p">
              At Triard, we envision a future where customers can unleash their
              creativity and experience personalized shopping like never before.
              Our goal is to revolutionize the e-commerce landscape by offering
              cutting-edge 3D visualization, configuration, and AR
              visualizations under a single customizable platform.
            </p>
          </div>

          <img
            className="aboutus_ourvision_image_container_img"
            src={mixedreality}
            alt="mixed reality"
          />
        </div>
        <div className="aboutus_ourvision_main_container3">
          <img
            className="aboutus_ourvision_image_container_img"
            src={whomweare}
            alt="whom we are"
          />
          <div className="aboutus_ourvision_text_container">
            <h3 className="aboutus_ourvision_text_container_h3">Whom We Are</h3>
            <p className="aboutus_ourvision_text_container_p">
              At Triard, we envision a future where customers can unleash their
              creativity and experience personalized shopping like never before.
              Our goal is to revolutionize the e-commerce landscape by offering
              cutting-edge 3D visualization, configuration, and AR
              visualizations under a single customizable platform.
            </p>
          </div>
        </div>
        <div className="aboutus_ourvision_main_container">
          <div className="aboutus_ourvision_text_container">
            <h3 className="aboutus_ourvision_text_container_h3">TRIARD</h3>
            <p className="aboutus_ourvision_text_container_p">
              A Game-Changing Solution: Our flagship product, Triard, is the
              culmination of relentless innovation and unwavering commitment to
              customer-centricity. Triard's real-time customization empowers
              customers to explore a vast range of options, visualize products,
              and make informed purchase decisions.
            </p>
          </div>

          <img
            className="aboutus_ourvision_image_container_img"
            src={virtualclothing}
            alt="virtual clothing"
          />
        </div>
        \
        <div className="aboutus_whychoose_traiad_container">
          <div className="aboutus_whychoose_traiad_header">
            <img
              className="aboutus_whychoose_traiad_image"
              src={whychooseus}
              alt="why choose us"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className="card-container">
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>

      <div className="aboutus_ourcommitmenttoyou_container">
        <div className="aboutus_ourcommitmenttoyou_text_container">
          <h1 className="aboutus_ourcommitmenttoyou_text_container_h3">
            OUR COMMITMENT TO YOU
          </h1>
          <p className="aboutus_ourcommitmenttoyou_text_container_p">
            At Triard, we believe in the transformative power of technology to
            elevate customer experiences. We are dedicated to helping you stay
            ahead of the competition, enhance customer satisfaction, and drive
            business growth.
          </p>
        </div>
        <img
          className="aboutus_ourcommitmenttoyou_background_image"
          src={rectangleleft}
          alt="why choose us"
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        <img
          className="aboutus_ourcommitmenttoyou_image"
          src={ourcommitment}
          alt="why choose us"
        />
      </div>
      <div className="aboutus_letsshapethefuture_container">
        <div className="aboutus_letsshapethefuture_text_container">
          <h1 className="aboutus_ourcommitmenttoyou_text_container_h3">
            LET'S SHAPE THE FUTURE TOGETHER
          </h1>
          <p className="aboutus_ourcommitmenttoyou_text_container_p">
            We invite you to embark on this exciting journey with us. Experience
            the endless possibilities of 3D visualization and AR integration
            with Triard. Together, let's shape the future of e-commerce and
            create unforgettable customer journeys. Join us in transforming the
            way your customers interact with your products. Get in touch with
            our team today to explore how Triard can elevate your digital
            experiences.
          </p>
        </div>
        <img
          className="aboutus_ourcommitmenttoyou_background_image"
          src={rectangleright}
          alt="why choose us"
          /*  style={{
            width: "100%",
            height: "auto",
          }} */
        />

        <img
          className="aboutus_letsshapethefuture_image"
          src={fistbump}
          alt="why choose us"
        />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
