import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./Demo.css";
import ferrari from "../../assets/Ferrari.png";
import banner from "../../assets/demo_banner.png";
import gsap from 'gsap';

function Demo() {

    const containerDemo1 = useRef(null);
    const containerDemo2 = useRef(null);
    // const headingDemo1 = useRef(null);
    // const headingDemo2 = useRef(null);


    useEffect(() => {
        gsap.fromTo(containerDemo1.current, { scale: 0.77 }, {
            scrollTrigger: {
                trigger: containerDemo1.current,
                immediateRender: false,
                scrub: true,
                start: 80,
                smooth: 2,
                start: 'top 80%'
            },
            scale: 1
        });

        gsap.fromTo(containerDemo2.current, { scale: 0.77 }, {
            scrollTrigger: {
                trigger: containerDemo2.current,
                immediateRender: false,
                scrub: true,
                start: 80,
                smooth: 2,
                start: 'top 80%'
            },
            scale: 1
        });



    }, []);


    // useEffect(() => {
    //     gsap.fromTo(headingDemo1.current, { scale: 0.5 }, {
    //         scrollTrigger: {
    //             trigger: headingDemo1.current,
    //             immediateRender: false,
    //             scrub: true,
    //             start: 80,
    //             smooth: 2,
    //             start: 'top 80%'
    //         },
    //         scale: 1
    //     });
    // }, []);





    // useEffect(() => {
    //     const letters2 = headingDemo2.current.textContent.split("");

    //     headingDemo2.current.innerHTML = letters2
    //         .map(
    //             (letter) =>
    //                 `<span style="display: inline-block">${letter === " " ? "&nbsp;" : letter}</span>`
    //         )
    //         .join("");


    //     const letterSpans2 = headingDemo2.current.querySelectorAll("span");


    //     gsap.from(letterSpans2, {
    //         opacity: 0,
    //         y: 30,
    //         duration: 0.2,
    //         stagger: 5,
    //         ease: "bounce.out",
    //         scrollTrigger: {
    //             trigger: headingDemo2.current,
    //             start: "top 80%",
    //             end: "+=300",
    //             scrub: true,
    //         },
    //     });



    // }, []);




    return (
        <div>
            <Navbar />

            <img className='banner_demo' src={banner}></img>

            <div className='demo_section'>
                <h2>Demos</h2>
                <p>Experience a new dimension of wonder.</p>
            </div>
            <div className='demo container'>
                <div className='demo_wrapper' ref={containerDemo1}>
                    <div className='demo_info'>
                        <div className='demo_img'>
                            <img src='https://phpstack-947027-3563759.cloudwaysapps.com/assets/glove_img1-00777ff9.png'></img>
                        </div>
                        <div className='demo_btn'>
                            <h3><a href='https://phpstack-947027-3563759.cloudwaysapps.com/glove'>see it in demo</a></h3>
                        </div>
                        {/* <button>see it in demo</button> */}
                    </div>
                </div>
                <div className='demo_wrapper' ref={containerDemo2}>
                    <div className='demo_info'>
                        <div className='demo_img2'>
                            <img src={ferrari}></img>
                        </div>
                        <div className='demo_btn'>
                            <h3><a href=''>see it in demo</a></h3>
                        </div>
                        {/* <button>see it in demo</button> */}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Demo;