
// // import React, { useRef, useEffect } from 'react';
// // import "./Slider.css";

// // function Slider() {
// //   const viewerRef = useRef(null);

// //   useEffect(() => {
// //     showCarModel(); // Set Car.glb as the default model on component mount
// //   }, []);

// //   function showCarModel() {
// //     viewerRef.current.src = '/model/Car.glb';
// //   }

// //   function showTableModel() {
// //     viewerRef.current.src = '/model/Glove.glb';
// //   }

// //   return (
// //     <div>
// //       <div className='slider_container' >
// //         <model-viewer
// //           ref={viewerRef}
// //           id="viewer"
// //           auto-rotate
// //           camera-controls
// //           shadow-intensity="1"
// //         ></model-viewer>

// //         <div className="buttons">
// //           <button
// //             onClick={showCarModel}
// //             style={{
// //               backgroundImage:
// //                 "url('https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/812%20SuperfastModelImage.jpg&w=350&h=251&q=90&c=1')",
// //             }}
// //           ></button>

// //           <button
// //             onClick={showTableModel}
// //             style={{
// //               backgroundImage:
// //                 "url('https://www.ikea.com/in/en/images/products/nodeland-coffee-table-medium-brown__0974637_pe812499_s5.jpg')",
// //             }}
// //           ></button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Slider;




// import React, { useEffect, useRef, useState } from 'react';
// import './Slider.css';

// function Slider() {
//   const viewerRef = useRef(null);
//   const viewerRef2 = useRef(null);
//   const viewerRef3 = useRef(null);

//   useEffect(() => {
//     showCarModel();
//   }, []);

//   function applyColor(viewer, materialName, color) {
//     const model = viewer.current.model;
//     console.log(model);
//     const material = model.materials.find(mat => mat.name === materialName);

//     if (material) {
//       material.pbrMetallicRoughness.setBaseColorFactor(color);
//     }
//   }




//   function showCarModel() {
//     viewerRef.current.src = '/model/sofa.glb';
//     viewerRef2.current.src = '/model/ring.glb';
//     viewerRef3.current.src = '/model/blender.glb';
//   }

//   return (
//     <div>
//       <div className='threeD'>
//         <div>
//           <model-viewer
//             ref={viewerRef}
//             disable-zoom
//             id="viewer"
//             auto-rotate
//             camera-controls
//             shadow-intensity="1"
//             class="custom-camera-controls"
//           ></model-viewer>

//           <div className="controls">
//             <button className='btn_r' onClick={() => applyColor(viewerRef, 'Body', '#ffc300')}></button>
//             <button className='btn_g' onClick={() => applyColor(viewerRef, 'Body', 'rgb(191, 181, 255)')}></button>
//             <button className='btn_b' onClick={() => applyColor(viewerRef, 'Body', 'rgb(184, 241, 190)')}></button>
//           </div>

//         </div>


//         <div className='threed_content'>
//           <h3>Real-time & Personalised</h3>
//           <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
//         </div>
//       </div>

//       <div className='threeD'>
//         <div className='threed_content2'>
//           <h3>Real-time & Personalised</h3>
//           <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
//         </div>
//         <div>
//           <model-viewer
//             ref={viewerRef2}
//             disable-zoom
//             id="viewer2"
//             auto-rotate
//             camera-controls
//             shadow-intensity="1"
//           ></model-viewer>

//           <div className="controls_ring">
//             <button className='btn_ring1' onClick={() => applyColor(viewerRef2, 'Material_33', '#D1793B')}></button>
//             <button className='btn_ring2' onClick={() => applyColor(viewerRef2, 'Material_33', '#D4AF37')}></button>
//             <button className='btn_ring3' onClick={() => applyColor(viewerRef2, 'Material_33', '#b76e79')}></button>
//           </div>


//         </div>
//       </div>

//       <div className='threeD'>
//         <div>
//           <model-viewer
//             ref={viewerRef3}
//             disable-zoom
//             id="viewer3"
//             auto-rotate
//             camera-controls
//             shadow-intensity="1"
//           ></model-viewer>

//           <div className="controls_chair">
//             <button className='btn_chair1' onClick={() => applyColor(viewerRef3, 'black paint', '#996515')}></button>
//             <button className='btn_chair2' onClick={() => applyColor(viewerRef3, 'black paint', '#c0c0c0')}></button>
//             <button className='btn_chair3' onClick={() => applyColor(viewerRef3, 'black paint', '#cfb53b')}></button>
//           </div>


//         </div>
//         <div className='threed_content2'>
//           <h3>Real-time & Personalised</h3>
//           <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
//         </div>
//       </div>




//       {/* <div>
//   <div>
//     <div>
//       <div>
//       <div>
//         <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
//       </div>
//       <div>
//         <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
//       </div>
//       </div>
//       <div>
//       <div>
//         <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
//       </div>
//       <div>
//         <img src='https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
//       </div>
//       </div>
//     </div>
//     <div>
//       scjdfdfhjsdghdfjdfgjadjdah
//     </div>
//   </div>
// </div>




//       {/* new */}

//       <div className='test'>

//         <div className='demooo'>
//           <div>
//             <model-viewer
//               ref={viewerRef2}
//               disable-zoom
//               id="viewer2"
//               auto-rotate
//               camera-controls
//               shadow-intensity="1"
//             ></model-viewer>

//             <div className="controls_ring">
//               <button className='btn_ring1' onClick={() => applyColor(viewerRef2, 'Material_33', '#D1793B')}></button>
//               <button className='btn_ring2' onClick={() => applyColor(viewerRef2, 'Material_33', '#D4AF37')}></button>
//               <button className='btn_ring3' onClick={() => applyColor(viewerRef2, 'Material_33', '#b76e79')}></button>
//             </div>


//           </div>

//           <div className='threed_content2'>
//             <h3>Real-time & Personalised</h3>
//             <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
//           </div>




//         </div>

//         <div className='demooo'>
//           <div>
//             <model-viewer
//               ref={viewerRef3}
//               disable-zoom
//               id="viewer2"
//               auto-rotate
//               camera-controls
//               shadow-intensity="1"
//             ></model-viewer>

//             <div className="controls_ring">
//               <button className='btn_ring1' onClick={() => applyColor(viewerRef3, 'Material_33', '#D1793B')}></button>
//               <button className='btn_ring2' onClick={() => applyColor(viewerRef3, 'Material_33', '#D4AF37')}></button>
//               <button className='btn_ring3' onClick={() => applyColor(viewerRef3, 'Material_33', '#b76e79')}></button>
//             </div>


//           </div>

//           <div className='threed_content2'>
//             <h3>Real-time & Personalised</h3>
//             <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualise products and make better purchase decisions.</p>
//           </div>


//         </div>

//       </div>




//     </div>
//   );
// }

// export default Slider;





// horizondal slider //

// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import "./Slider.css";

// gsap.registerPlugin(ScrollTrigger);

// function Slider() {
//   useEffect(() => {
//     const horizontalSections = gsap.utils.toArray('.horiz-gallery-wrapper');

//     horizontalSections.forEach(function (sec, i) {
//       const pinWrap = sec.querySelector(".horiz-gallery-strip");

//       let pinWrapWidth;
//       let horizontalScrollLength;

//       function refresh() {
//         pinWrapWidth = pinWrap.scrollWidth;
//         horizontalScrollLength = pinWrapWidth - window.innerWidth;
//       }

//       refresh(); // Initial refresh

//       ScrollTrigger.create({
//         trigger: sec,
//         start: "center center",
//         end: () => `+=${pinWrapWidth}`,
//         pin: sec,
//         scrub: true,
//         invalidateOnRefresh: true,
//         onUpdate: self => {
//           gsap.to(pinWrap, {
//             x: -self.scroll(),
//             ease: "none"
//           });
//         }
//       });

//       ScrollTrigger.addEventListener("refreshInit", refresh);
//     });
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return (
//     <div id="smooth-wrapper">
//       <div id="smooth-content">
//         <section>
//           <h1>Here comes the gallery</h1>
//         </section>

//         <section id="portfolio">
//           <div className="container-fluid">
//             <div className="horiz-gallery-wrapper">
//               <div className="horiz-gallery-strip">
//                 <div className="project-wrap">
//                   <img src="https://via.placeholder.com/600x400" alt="Image 1" />
//                   <h2>Image 1</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://via.placeholder.com/600x400" alt="Image 2" />
//                   <h2>Image 2</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://via.placeholder.com/600x400" alt="Image 3" />
//                   <h2>Image 3</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://via.placeholder.com/600x400" alt="Image 4" />
//                   <h2>Image 4</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="horiz-gallery-wrapper">
//               <div className="horiz-gallery-strip">
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80" />
//                   <h2>Image 1</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570824104967-27599c232b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2559&q=80" />
//                   <h2>Image 2</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80" />
//                   <h2>Image 3</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570824104967-27599c232b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2559&q=80" />
//                   <h2>Image 4</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="horiz-gallery-wrapper">
//               <div className="horiz-gallery-strip">
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80" />
//                   <h2>Image 1</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570824104967-27599c232b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2559&q=80" />
//                   <h2>Image 2</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570018144715-43110363d70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80" />
//                   <h2>Image 3</h2>
//                 </div>
//                 <div className="project-wrap">
//                   <img src="https://images.unsplash.com/photo-1570824104967-27599c232b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2559&q=80" />
//                   <h2>Image 4</h2>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//         <section>
//           <h3>Bye gallery</h3>
//         </section>

//       </div>
//     </div>);
// }

// export default Slider;




// gsap horizontal scroll- done //


// import React from 'react';
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./Slider.css";

// gsap.registerPlugin(ScrollTrigger);

// function Slider() {

//   gsap.registerPlugin(ScrollTrigger);

//   //GSAPHorizontalScroll
//   function GSAPHorizontalScroll() {
//     let Sections = gsap.utils.toArray("section");

//     let GSAPHorizontalScrollTL = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#PageWrap",
//         pin: true,
//         start: "0% 0%",
//         end:
//           "+=" +
//           (document.querySelector("#PageWrap").scrollWidth - window.innerWidth),
//         scrub: 0,
//         snap: {
//           snapTo: 1 / (Sections.length - 1),
//           duration: { min: 0.22, max: 0.31 },
//           delay: 0,
//           ease: "sine.inOut"
//         }
//         // markers: "true",
//       }
//     });
//     GSAPHorizontalScrollTL.to(Sections, {
//       xPercent: -100 * (Sections.length - 1),
//       ease: "none"
//     });
//   }
//   //GSAPHorizontalScroll

//   //SectionB
//   function SectionBGSAP() {
//     let SectionBGSAPTL = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#SectionB",
//         // toggleActions: "play reverse play reverse",
//         scrub: 0,
//         start: () =>
//           "top top-=" +
//           (document.querySelector("#SectionB").offsetLeft - window.innerWidth),
//         end: () => "+=" + document.querySelector("#SectionB").offsetWidth,
//         // scroller:"#SectionB",
//         // horizontal: true,
//         markers: "false"
//       }
//     });
//     SectionBGSAPTL.from("#SectionB h1", {
//       y: "-360",
//       ease: "none"
//     })
//       .from("#SectionB h1", {
//         scale: 10,
//         ease: "none"
//       })
//       .from("#SectionB h1", {
//         rotate: 360,
//         ease: "none"
//       });
//   }
//   //SectionB

//   window.onload = () => {
//     GSAPHorizontalScroll();
//     SectionBGSAP();
//   };

//   return (
//     <>
//       <div>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>

//       </div>
//       <div>
//         <div id="PageWrap">
//           <section id="SectionA">
//             <h1>Section A</h1>
//           </section>
//           <section id="SectionB">
//             <h1>Section B</h1>
//           </section>
//           <section id="SectionC">
//             <h1>Section C</h1>
//           </section>
//         </div>
//       </div>
//       <div>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>
//         hvafjksdgk<br></br>

//       </div>
//     </>
//   );
// }

// export default Slider;



// another//


// import React from 'react';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Slider.css";

// gsap.registerPlugin(ScrollTrigger);


// function Slider() {



//   let sections = gsap.utils.toArray(".panel");

//   let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 2),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//       trigger: ".container",
//       pin: true,
//       markers: true,
//       scrub: 0.1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=3000 bottom"
//     }
//   });

//   gsap.utils.toArray(".panel").forEach((panel) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       containerAnimation: scrollTween,
//       markers: true,
//       start: "left left",
//       toggleClass: "stick"
//     });
//   });

//   return (
//     <>
//       <div className='container'>
//         <div className='panel'>
//           <h1>
//             Card Title Goes here.
//           </h1>
//         </div>
//         <div className='panel'>
//           <h1>
//             Card Title Goes here.
//           </h1>
//         </div>
//         <div className='panel target'>
//           <h1>
//             Card Title Goes here.
//           </h1>
//         </div>
//         <div className='panel'>
//           <h1>
//             Card Title Goes here.
//           </h1>
//         </div>
//         <div className='panel'>
//           <h1>
//             Card Title Goes here.
//           </h1>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Slider;