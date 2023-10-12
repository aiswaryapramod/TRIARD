import React, { useRef, useEffect, useState } from 'react';
import ar from "../../assets/AR-cube.png";
import QRCode from "qrcode.react";
import "./Blenderpilot.css";
import TriardLogo from "../../assets/logo1.png";



function Blenderpilot() {
  const viewerRef3 = useRef(null);
  const [qrPopupVisible, setQrPopupVisible] = useState(false);


  useEffect(() => {
    showCarModel();
  }, []);

  function applyColor(viewer, materialName, color) {
    const model = viewer.current.model;
    console.log(model);
    const material = model.materials.find(mat => mat.name === materialName);

    if (material) {
      material.pbrMetallicRoughness.setBaseColorFactor(color);
    }
  }


  function showCarModel() {
    viewerRef3.current.src = '/model/blender.glb';
  }


  const handleQrPopup = () => {
    if (window.innerWidth <= 912) {
      window.location.href = "https://phpstack-947027-3582384.cloudwaysapps.com/";
    } else {
      setQrPopupVisible(!qrPopupVisible);
    }
  };


  return (
    <div className='blender-pilot-page'>
      <div >

        <div className='blender_pilot_header' >
          <a href='/'>
            <div className='blender_pilot_header_img'>
              <img src={TriardLogo}></img>
            </div>
          </a>
        </div>



        <div className='pilot-threeD'>
          <div>
            <model-viewer
              ar
              ref={viewerRef3}
              disable-zoom
              id="viewerpilot"
              auto-rotate
              camera-controls
              shadow-intensity="1"
            ></model-viewer>

            <div className="pilot-controls_chair">
              <button className='pilot-btn_chair1' onClick={() => applyColor(viewerRef3, 'black paint', '#996515')}></button>
              <button className='pilot-btn_chair2' onClick={() => applyColor(viewerRef3, 'black paint', 'blue')}></button>
              <button className='pilot-btn_chair3' onClick={() => applyColor(viewerRef3, 'black paint', '#cfb53b')}></button>
              <button className='pilot-btn_chair4' onClick={() => applyColor(viewerRef3, 'black paint', 'pink')}></button>
            </div>

            <button className="pilot-custom-button" onClick={handleQrPopup}>
              <img className='pilot-ar-cube' src={ar}></img> &nbsp;
              <img src="/assets/img/icon-img/cube.png" alt="" />
            </button>


            {qrPopupVisible && (
              <div className="pilot-singlepage-qr-popup">
                <div className="pilot-qr-content">
                  <button className="pilot-close-button" onClick={handleQrPopup}>
                    &#10005;
                  </button>
                  <div className="pilot-single-qrpopup">
                    <div >
                      <QRCode value="http://phpstack-947027-3847840.cloudwaysapps.com" />
                    </div>
                  </div>
                  <p>Scan QR Code with your smartphone camera to place your model in your place.</p>

                </div>
              </div>
            )}


          </div>
          <div className='pilot-threed_content2'>
            <h3>Experience Triard's Innovation: Elevate BlendJet's E-commerce with Our Pilot Program</h3>
            <p>Explore the interactive 3D configurator and Augmented Reality (AR) fusion that redefines e-commerce for BlendJet.<br></br>
              See Your BlendJet Blender in 3D & AR:
              Customize and visualize your BlendJet blender like never before.

            </p>
          </div>
        </div>
      </div>


      <div className='blender_pilot_contact'>
        <h3>Ready to Elevate BlendJet's E-commerce?</h3>
        <p>Join our exclusive pilot program to experience Triard's impact firsthand.</p>
        <h2>Email: <a href='mailto:demo@triard.io'>info@triard.io</a></h2>
        <h2>Phone: +91 8594 00 10 10</h2>
        <div className='blender_pilot_contactus_btn'>
          <button><a href='https://triard.io/contactUs' target="_blank">Contact Us</a></button>
        </div>
      </div>
    </div>
  );
}

export default Blenderpilot;




