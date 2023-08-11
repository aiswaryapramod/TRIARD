// import React from 'react';
// import "./Banner.css";
// import bannerVideo from "../../assets/banner.mp4"

// function Banner() {
//     return (
//         <>
//             <div >


//             <div className="banner_video">
//                 <video width={ '100%' } height={ '100%' } autoPlay playsInline muted loop style={ { minWidth: '100%', minHeight: '100%', objectFit: 'cover' } }><source src={ bannerVideo } type='video/mp4'></source></video>
//                 {/* <ReactPlayer url={ 'https://www.youtube.com/embed/6YoRg0VHjs0' } playing controls={ false } loop={ true } muted={ true } config={ {

//                     playerVars: { showinfo: 0, fullscreen: 1, playsinline: 1 }
//                 } } /> */}
//             </div>
//                 {/* <div className='banner'>
//                     <div className='banner_info'>
//                         <h1>A cutting-edge tool that will take your business-customer interaction to the next level.</h1>
//                         <button>Get a free demo</button>
//                     </div>

//                     <div className='banner_img'>
//                         <img></img>
//                     </div>


//                 </div> */}
//             </div>
//         </>
//     );
// }

// export default Banner;


// import bannerVideo from "../../assets/banner.mp4";
// import './Banner.css';

// function Banner() {

//     return (
//         <div className='banner'>
//             <div className='banner__video'>
//                 <video width={'100%'} height={'100%'} autoPlay playsInline muted loop style={{ minWidth: '100%', minHeight: '100%', objectFit: 'cover' }}><source src={bannerVideo} type='video/mp4'></source></video>
//             </div>

//             <div className='banner__wrapper'>
//                 <section className='banner__section'>
//                     <h1 className='banner__wrapper-heading' data-aos="fade-up">A cutting-edge tool that will take your business-customer interaction to the next level.</h1>
//                     <button>Get a free demo</button>
//                 </section>


//             </div>

//         </div>
//     );
// }

// export default Banner;


import React, { useRef,useEffect } from 'react';
// import bannerVideo from "../../assets/banner2.mp4";
import bannerVideo from "../../../assets/banner4.webm"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Banner.css';

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;

    // Bounce animation on scroll down
    gsap.fromTo(
      h1Element,
      {
        y: -50,
        opacity: 0,
        scale: 1
      },
      {
        y: -25,
        opacity: 1,
        scale: 1,
        ease: 'bounce.out',
        duration: 1.5,
        scrollTrigger: {
          trigger: h1Element,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(
      h1Element,
      {
        y: 0,
        opacity: 1,
        scale: 1
      },
      {
        y: -50,
        opacity: 1,
        scale: 1,
        ease: 'power2.Out',
        duration: 1.5,
        scrollTrigger: {
          trigger: h1Element,
          start: 'bottom 80%',
          scrub: true, 
        }
      }
    );
  }, []);  // const viewerRef = useRef(null);

    // useEffect(() => {
    //   showCarModel(); // Set Car.glb as the default model on component mount
    // }, []);
  
    // function showCarModel() {
    //   viewerRef.current.src = '/model/Car.glb';
    // }
  
    // function showTableModel() {
    //   viewerRef.current.src = 'Table.glb';
    // }
  
  return (
    <div >
    <div className='banner_container'>
        <div className='banner_info'>
            <h1 ref={h1Ref}>Experience The Endless Possibilities of 3D & AR!</h1>
            <h3>A cutting-edge tool that will take your business-customer interaction to the next level.</h3>
            <button><a href='#contactus'>Get a free demo</a></button>
        </div>
        <div className='banner_video'>
        <video width={'100%'} height={'100%'} autoPlay playsInline muted loop ><source src={bannerVideo} type='video/mp4'></source></video>
        {/* <div className='slider_container' >
        <model-viewer
          ref={viewerRef}
          id="viewer"
          auto-rotate
          camera-controls
          shadow-intensity="1"
          style={{ width: '800px', height: '500px' }}

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

      </div> */}
 
        </div>
    </div>
    </div>
  )
}

export default Banner