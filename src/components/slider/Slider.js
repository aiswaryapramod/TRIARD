
// import React, { useRef, useEffect } from 'react';
// import "./Slider.css";

// function Slider() {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     showCarModel(); // Set Car.glb as the default model on component mount
//   }, []);

//   function showCarModel() {
//     viewerRef.current.src = '/model/Car.glb';
//   }

//   function showTableModel() {
//     viewerRef.current.src = '/model/Glove.glb';
//   }

//   return (
//     <div>
//       <div className='slider_container' >
//         <model-viewer
//           ref={viewerRef}
//           id="viewer"
//           auto-rotate
//           camera-controls
//           shadow-intensity="1"
//         ></model-viewer>

//         <div className="buttons">
//           <button
//             onClick={showCarModel}
//             style={{
//               backgroundImage:
//                 "url('https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/812%20SuperfastModelImage.jpg&w=350&h=251&q=90&c=1')",
//             }}
//           ></button>

//           <button
//             onClick={showTableModel}
//             style={{
//               backgroundImage:
//                 "url('https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg')",
//             }}
//           ></button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Slider;




import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

function Slider() {
  const viewerRef = useRef(null);
  const viewerRef2 = useRef(null);
  const viewerRef3 = useRef(null);

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



  // useEffect(() => {
  //   const modelViewerParameters = viewerRef.current;

  //   const onLoad = () => {
  //     let material = modelViewerParameters.model.materials[0];

  //     let metalnessDisplay = document.querySelector("#metalness-value");
  //     let roughnessDisplay = document.querySelector("#roughness-value");

  //     metalnessDisplay.textContent = material.pbrMetallicRoughness.metallicFactor;
  //     roughnessDisplay.textContent = material.pbrMetallicRoughness.roughnessFactor;

  //     // // Defaults to gold
  //     // material.pbrMetallicRoughness.setBaseColorFactor([0.7294, 0.5333, 0.0392]);

  //     document.querySelector('#metalness').addEventListener('input', (event) => {
  //       material.pbrMetallicRoughness.setMetallicFactor(event.target.value);
  //       metalnessDisplay.textContent = event.target.value;
  //     });

  //     document.querySelector('#roughness').addEventListener('input', (event) => {
  //       material.pbrMetallicRoughness.setRoughnessFactor(event.target.value);
  //       roughnessDisplay.textContent = event.target.value;
  //     });
  //   };

  //   modelViewerParameters.addEventListener("load", onLoad);

  //   return () => {
  //     modelViewerParameters.removeEventListener("load", onLoad);
  //   };
  // }, []);


  function showCarModel() {
    viewerRef.current.src = '/model/sofa.glb';
    viewerRef2.current.src = '/model/ring.glb';
    viewerRef3.current.src = '/model/blender.glb';
  }

  return (
    <div>
      <div className='threeD'>
        <div>
          <model-viewer
            ref={viewerRef}
            disable-zoom
            id="viewer"
            auto-rotate
            camera-controls
            shadow-intensity="1"
            class="custom-camera-controls"
          ></model-viewer>

          <div className="controls">
            <button className='btn_r' onClick={() => applyColor(viewerRef, 'Body', '#ffc300')}></button>
            <button className='btn_g' onClick={() => applyColor(viewerRef, 'Body', 'rgb(191, 181, 255)')}></button>
            <button className='btn_b' onClick={() => applyColor(viewerRef, 'Body', 'rgb(184, 241, 190)')}></button>
          </div>

          {/* <div className='sofa_texture'>
            <div className='slider-container'>
              <label className='slider-label'>Shade : </label>
              <input type="range" id="metalness" min="0" max="1" step="0.01" className='slider-input' />
              <span id="metalness-value" className='slider-value'>    0</span>
            </div>

            <div className='slider-container'>
              <label className='slider-label'>Rough : </label>
              <input type="range" id="roughness" min="0" max="1" step="0.01" className='slider-input' />
              <span id="roughness-value" className='slider-value'>    0</span>
            </div>
          </div> */}
        </div>


        <div className='threed_content'>
          <h3>Real-time & Personalised</h3>
          <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
        </div>
      </div>

      <div className='threeD'>
        <div className='threed_content2'>
          <h3>Real-time & Personalised</h3>
          <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
        </div>
        <div>
          <model-viewer
            ref={viewerRef2}
            disable-zoom
            id="viewer2"
            auto-rotate
            camera-controls
            shadow-intensity="1"
          ></model-viewer>

          <div className="controls_ring">
            <button className='btn_ring1' onClick={() => applyColor(viewerRef2, 'Material_33', '#D1793B')}></button>
            <button className='btn_ring2' onClick={() => applyColor(viewerRef2, 'Material_33', '#D4AF37')}></button>
            <button className='btn_ring3' onClick={() => applyColor(viewerRef2, 'Material_33', '#b76e79')}></button>
          </div>


        </div>
      </div>

      <div className='threeD'>
        <div>
          <model-viewer
            ref={viewerRef3}
            disable-zoom
            id="viewer3"
            auto-rotate
            camera-controls
            shadow-intensity="1"
          ></model-viewer>

          <div className="controls_chair">
            <button className='btn_chair1' onClick={() => applyColor(viewerRef3, 'black paint', '#996515')}></button>
            <button className='btn_chair2' onClick={() => applyColor(viewerRef3, 'black paint', '#c0c0c0')}></button>
            <button className='btn_chair3' onClick={() => applyColor(viewerRef3, 'black paint', '#cfb53b')}></button>
          </div>


        </div>
        <div className='threed_content2'>
          <h3>Real-time & Personalised</h3>
          <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
        </div>
      </div>




{/* <div>
  <div>
    <div>
      <div>
      <div>
        <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      <div>
        <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      </div>
      <div>
      <div>
        <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      <div>
        <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
      </div>
      </div>
    </div>
    <div>
      scjdfdfhjsdghdfjdfgjadjdah
    </div>
  </div>
</div> */}




    </div>
  );
}

export default Slider;
