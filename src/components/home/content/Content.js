import React, { useEffect, useRef } from 'react';
import "./Content.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img4 from "../../../assets/img4.png"
import img2 from "../../../assets/img2.png"
import img5 from "../../../assets/wallet.png"
import img6 from "../../../assets/img6.png"
import img7 from "../../../assets/img7.png"
import brand from "../../../assets/brand.png"
import shoe from "../../../assets/shoe.png"
import AR from "../../../assets/AR2.png"
import bike from "../../../assets/automotive.png"

// import Video1 from "../../assets/video1.mp4";


gsap.registerPlugin(ScrollTrigger);

function Content() {
    // const containerImage = useRef(null);
    // const containerImage2 = useRef(null);
    // const containerinfo = useRef(null);
    // const containerinfo2 = useRef(null);
    // const containerImage3 = useRef(null);
    // const containerinfo3 = useRef(null);
    // const containerinfo4 = useRef(null);
    // const containerImage4 = useRef(null);
    // const containerImage5 = useRef(null);
    // const containerinfo5 = useRef(null);
    const containerhome1 = useRef(null);
    const containerhome2 = useRef(null);
    const containerhome3 = useRef(null);
    const containerhome4 = useRef(null);
    const containerhome5 = useRef(null);

    // const containerhead = useRef(null);

    // useEffect(() => {
    //     gsap.fromTo(containerImage.current, { translateX: '-20%' }, {
    //         scrollTrigger: {
    //             trigger: containerImage.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 70%',
    //             end: '+=300',
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerImage2.current, { translateX: '20%' }, {
    //         scrollTrigger: {
    //             trigger: containerImage2.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 70%',
    //             end: '+=300',
    //         },
    //         translateX: '0%'
    //     });
    // }, []);


    // useEffect(() => {
    //     gsap.fromTo(containerinfo.current, { translateX: '10%' }, {
    //         scrollTrigger: {
    //             trigger: containerinfo.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%'
    //         },
    //         translateX: '0%'
    //     });
    // }, []);


    // useEffect(() => {
    //     gsap.fromTo(containerinfo2.current, { translateX: '-20%' }, {
    //         scrollTrigger: {
    //             trigger: containerinfo2.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%',
    //             end:'top 50%'
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerImage3.current, { translateX: '-30%' }, {
    //         scrollTrigger: {
    //             trigger: containerImage3.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 70%',
    //             end: '+=300',
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerinfo3.current, { translateX: '10%' }, {
    //         scrollTrigger: {
    //             trigger: containerinfo3.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%'
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerinfo4.current, { translateX: '-10%' }, {
    //         scrollTrigger: {
    //             trigger: containerinfo4.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%'
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerImage4.current, { translateX: '20%' }, {
    //         scrollTrigger: {
    //             trigger: containerImage4.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 70%',
    //             end: '+=300',
    //         },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerImage5.current, { translateX: '-30%' }, {
    //         scrollTrigger: {
    //             trigger: containerImage5.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 70%',
    //             end: '+=300',
    //             },
    //         translateX: '0%'
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.fromTo(containerinfo5.current, { translateX: '10%' }, {
    //         scrollTrigger: {
    //             trigger: containerinfo5.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%'
    //         },
    //         translateX: '0%'
    //     });
    // }, []);


    // why us//



    useEffect(() => {
        gsap.fromTo(containerhome1.current, { scale: 0.5 }, {
          scrollTrigger: {
            trigger: containerhome1.current,
            immediateRender: false,
            scrub: true,
            start:80,
            smooth: 2,
            start: 'top 80%'
          },
          scale: 1 
        });

        gsap.fromTo(containerhome2.current, { scale: 0.5 }, {
            scrollTrigger: {
              trigger: containerhome2.current,
              immediateRender: false,
              scrub: true,
              start:80,
              smooth: 2,
              start: 'top 80%'
            },
            scale: 1 
          });
  
          gsap.fromTo(containerhome3.current, { scale: 0.5 }, {
            scrollTrigger: {
              trigger: containerhome3.current,
              immediateRender: false,
              scrub: true,
              start:80,
              smooth: 2,
              start: 'top 80%'
            },
            scale: 1 
          });

          gsap.fromTo(containerhome4.current, { scale: 0.5 }, {
            scrollTrigger: {
              trigger: containerhome4.current,
              immediateRender: false,
              scrub: true,
              start:80,
              smooth: 2,
              start: 'top 80%'
            },
            scale: 1 
          });
  
          gsap.fromTo(containerhome5.current, { scale: 0.5 }, {
            scrollTrigger: {
              trigger: containerhome5.current,
              immediateRender: false,
              scrub: true,
              start:80,
              smooth: 2,
              start: 'top 80%'
            },
            scale: 1 
          });

  
    }, []);

    


    // useEffect(() => {
    //     gsap.fromTo(containerhead.current, { translateY: '-100%' }, {
    //         scrollTrigger: {
    //             trigger: containerhead.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 'top 80%'
    //         },
    //         translateY: '0%'
    //     });
    // }, []);


    return (
        <div className='container'>
             <div className='content_wrapper1' ref={containerhome1}>
                    <img src={shoe} alt=''  />

                <div className='content_info'>
                    <h3>Real-time & Personalised</h3>
                    <p>Visualise & Customise every aspect of products in real-time with TRIARD. Enables your
                        customers to choose from an extensive range of options, from colours and materials to
                        sizes and finishes, visualise products and make better purchase decisions.</p>
                </div>

            </div> 


             <div className='content_wrapper2' ref={containerhome2}>

                <div className='content_info'>
                    <h3>Dynamic Actions</h3>
                    <p>Our advanced rendering technology ensures realistic and dynamic representations that
                        leave a lasting impact. Helps customers to experiment with various customization
                        options and instantly visualise in real-time.</p>
                </div>

                <img src={img2} />

            </div>
            

 
            <div className='content_wrapper3' ref={containerhome3}>

                {/* <div className='content_img' ref={containerImage3}> */}
                <img src={bike} alt=''/>
                {/* </div> */}

                <div className='content_info' >
                    <h3>Get a Competitive Edge</h3>
                    <p>Stay ahead of the competition by providing a unique and engaging shopping
                        experience. From furniture and home decor to automotive accessories and fashion
                        apparel, our customizer spans across multiple industries, catering to diverse business
                        needs.</p>
                </div>

            </div>

            <div className='content_wrapper2' ref={containerhome4}>

                <div className='content_info' >
                    <h3>Wallet-friendly Solution</h3>
                    <p>Hassle-free & budget-friendly 3D visualiser for your eCommerce site. We offer
                        seamless integration, ensuring a smooth and uninterrupted customer journey. Elevate
                        customer satisfaction, drive engagement, and boost your sales.</p>
                </div>

                {/* <div className='content_img2' ref={containerImage4}> */}
                <img src={img5} />
                {/* </div> */}

            </div>

            <div className='content_wrapper3' ref={containerhome5}>

                {/* <div className='content_img' */}
                <img src={AR} />
                {/* </div> */}

                <div className='content_info'>
                    <h3>Powered with AR</h3>
                    <p>Augmented Reality (AR) integration with TRIARD allows customers to visualise and
                        customise products in real-world environments.</p>
                </div>

            </div>



            {/* Why Us  */}

            <div className='container'>

                <div className='whyus_info' >
                <h3 className='head_ing'>Why Us?</h3>

                    <p>TRIARD brings you a perfect juice of 3D visualisation, configuration & AR visualisation
                        under a single customisable platform. Let your product be anything, we bring your
                        vision to life.</p>

                        <div>
                        {/* <iframe className='iframe' src="https://phpstack-947027-3563759.cloudwaysapps.com/glove" title="Iframe Example"></iframe> */}
                </div>

                </div>
            </div>



            <div className='content_cra'>
                <div className='cra_text'>Integrate seamlessly with the top ecommerce platforms</div>
                <img src={brand}></img>
            </div>



         </div>
    );
}

export default Content;