// import React from 'react'
// import "./Slider.css"

// function Slider() {
//   return (
//     <div className='container'>
//                     <a href="https://front.codes/" class="logo hover-target" target="_blank">
// 	</a> 

//              <div class="section full-height over-hide px-4 px-sm-0">
// 		<div class="container">
// 			<div class="row full-height justify-content-center">
// 				<div class="col-lg-10 col-xl-8 align-self-center padding-tb">
// 					<div class="section mx-auto text-center slider-height-padding">
// 			          	{/* <input class="checkbox frst" type="radio" id="slide-1" name="slider" checked/>
// 			          	<label for="slide-1"></label> */}
// 			          	<input class="checkbox scnd" type="radio" name="slider" id="slider-2"/>
// 			          	<label for="slider-2"></label>
// 			          	<input class="checkbox thrd" type="radio" name="slider" id="slider-3"/>
// 			          	<label for="slider-3"></label>
// 			          	<input class="checkbox foth" type="radio" name="slider" id="slider-4"/>
// 			          	<label for="slider-4"></label>
// 						<ul>
// 							<li>
// 								<span>MALE GOOFY FACE</span>
// 						    </li>
// 							<li>
// 								<span>TOY PIG</span>
// 						    </li>
// 							<li>
// 								<span>SHY PORTRAIT</span>
// 						    </li>
// 							<li>
// 								<span>SKATEBOARD FACE</span>
// 						    </li>
// 					    </ul>
// 				    </div>
// 			    </div>
// 	      	</div>
// 	    </div> 
//         </div>


//     </div>
//   )
// }

// export default Slider





import React, { useRef } from 'react';
import "./Slider.css";

function Slider() {
  const viewerRef = useRef(null);

  function showCarModel() {
    viewerRef.current.src = '/model/Car.glb';
  }

  function showTableModel() {
    viewerRef.current.src = 'Table.glb';
  }

  return (
    <div>
      <div className='slider_container' >
        <model-viewer
          ref={viewerRef}
          id="viewer"
          auto-rotate
          camera-controls
          shadow-intensity="1"
        ></model-viewer>

        <div className="buttons">
          <button
            onClick={showCarModel}
            style={{
              backgroundImage:
                "url('https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/812%20SuperfastModelImage.jpg&w=350&h=251&q=90&c=1')",
            }}
          ></button>

          <button
            onClick={showTableModel}
            style={{
              backgroundImage:
                "url('https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg')",
            }}
          ></button>
        </div>

      </div>

      {/* <div>
          <h3>3d customization</h3>
          <p>
          Stay ahead of the competition by providing a unique and engaging shopping experience. From furniture and home decor to automotive accessories and fashion apparel, our customizer spans across multiple industries, catering to diverse business needs.
          </p>
        </div>
 */}
    </div>
  );
}


export default Slider;