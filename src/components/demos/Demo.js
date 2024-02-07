import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./Demo.css";
import ferrari from "../../assets/Ferrari.png";
import banner from "../../assets/demo_banner.png";
import gsap from 'gsap';
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";
import demo3 from "../../assets/demo3.png";
import demo4 from "../../assets/demo4.png";
import demo5 from "../../assets/demo5.png";
import demo6 from "../../assets/demo6.png";
import poster from "../../assets/loader.gif";
import { Helmet } from "react-helmet";

import { useParams } from 'react-router';


function Demo() {


    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        });
    }, [slug]);




    const viewerRef = useRef(null);
    const viewerRef2 = useRef(null);
    const viewerRef3 = useRef(null);
    // const viewerRef4 = useRef(null);
    const viewerRef5 = useRef(null);
    const viewerRef6 = useRef(null);
    const viewerRef7 = useRef(null);

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
        viewerRef.current.src = '/model/sofa.glb';
        viewerRef2.current.src = '/model/ring.glb';
        viewerRef3.current.src = '/model/blender.glb';
        // viewerRef4.current.src = '/model/table.glb';
        viewerRef5.current.src = '/model/Car.glb';
        viewerRef6.current.src = '/model/iphone.glb';
        viewerRef7.current.src = '/model/glove.glb';
    }


    return (
        <div>


            <Helmet>
                <meta charSet="utf-8" />
                <title>Demos | Triard</title>
                <meta name="description" content="Explore Triard's demos, showcasing 3D visualization & AR integration. Discover how Triard can enhance shopping experience with cutting-edge technology."></meta>
            </Helmet>


            <Navbar />

            <img className='banner_demo' src={banner} alt='demo banner'></img>

            <div className='demo_section'>
                <h1>Demos</h1>
                <p>Experience a new dimension of wonder.</p>
            </div>
            {/* <div className='demo container'>
                <div className='demo_wrapper' ref={containerDemo1}>
                    <div className='demo_info'>
                        <div className='demo_img'>
                            <img src='https://phpstack-947027-3563759.cloudwaysapps.com/assets/glove_img1-00777ff9.png'></img>
                        </div>
                        <div className='demo_btn'>
                            <h3><a href='https://phpstack-947027-3563759.cloudwaysapps.com/glove'  target="_blank">See it in demo</a></h3>
                        </div>
                    </div>
                </div>
                <div className='demo_wrapper' ref={containerDemo2}>
                    <div className='demo_info'>
                        <div className='demo_img2'>
                            <img src={ferrari}></img>
                        </div>
                        <div className='demo_btn'>
                            <h3><a href='http://phpstack-947027-3794422.cloudwaysapps.com/'  target='blank'>See it in demo</a></h3>
                        </div>
                    </div>
                </div>

            </div> */}


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
                        poster={poster}
                        min-camera-orbit="auto 32deg auto"
                        max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"

                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>

                    </model-viewer>

                    <div className="controls">
                        <button className='btn_r' onClick={() => applyColor(viewerRef, 'Body', '#ffc300')}></button>
                        <button className='btn_g' onClick={() => applyColor(viewerRef, 'Body', 'rgb(191, 181, 255)')}></button>
                        <button className='btn_b' onClick={() => applyColor(viewerRef, 'Body', 'rgb(184, 241, 190)')}></button>
                    </div>

                </div>


                <div className='threed_content'>
                    <h3>The Best AR & 3D  Solutions for Furniture Companies</h3>
                    <p>The integration of AR and 3D technology within furniture design has become an integral component of the creative and presentation processes, offering both unparalleled versatility and freedom of expression.</p>
                    <div className='demo_readmore1'>
                        {/* <button><a  href="/furniture">Read more</a></button> */}
                    </div>
                </div>
            </div>

            <div className='threeD'>
                <div className='threed_content2'>
                    <h3>Transforming Jewelry Shopping: Elevate Your Experience with 3D and AR</h3>
                    <p>Discover the transformative capabilities that empower you to effortlessly create and distribute realistic 3D content and immersive AR encounters. </p>
                    <div className='demo_readmore'>
                        {/* <button><a  href="/jewellery">Read more</a></button> */}
                    </div>
                </div>
                <div className='threedring'>
                    <model-viewer
                        ref={viewerRef2}
                        disable-zoom
                        id="viewer2"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        poster={poster}
                        min-camera-orbit="auto 32deg auto"
                        max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"

                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>


                    </model-viewer>

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
                        poster={poster}
                        min-camera-orbit="auto 32deg auto"
                        max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"

                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>

                    </model-viewer>

                    <div className="controls_chair">
                        <button className='btn_chair1' onClick={() => applyColor(viewerRef3, 'black paint', '#996515')}></button>
                        <button className='btn_chair2' onClick={() => applyColor(viewerRef3, 'black paint', '#c0c0c0')}></button>
                        <button className='btn_chair3' onClick={() => applyColor(viewerRef3, 'black paint', '#cfb53b')}></button>
                    </div>


                </div>
                <div className='threed_content2'>
                    <h3>Create in 3D and Explore with Augmented Reality</h3>
                    <p>Fuel Your Creativity: Craft Masterpieces in 3D, Bring Them to Life with Augmented Reality. Our 3D Blender empowers artists, designers, and creators to push the boundaries of imagination.</p>
                    <div className='demo_readmore'>
                        {/* <button>Read more</button> */}
                    </div>
                </div>
            </div>


            <div className='threeD'>
                <div className='threed_content'>
                    <h3>Your iPhone: A Gateway to 3D Configuration and AR Magic</h3>
                    <p>Empowering Your World in 3D and Augmented Reality: Customize, Interact, and Redefine What's Possible. Our latest iPhone isn't just a phone; it's a portal to a new dimension. Personalize every facet of your device in immersive 3D, from colors to accessories.</p>
                    <div className='demo_readmore4'>
                        {/* <button>Read more</button> */}
                    </div>
                </div>

                <div>
                    <model-viewer
                        ref={viewerRef6}
                        disable-zoom
                        id="viewer6"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        class="custom-camera-controls"
                        poster={poster}
                        min-camera-orbit="auto 32deg auto"
                        max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"

                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>
                    </model-viewer>

                    <div className="controls">
                        <button className='btn_iphone1' onClick={() => applyColor(viewerRef6, 'Body.001', '#FFDD43')}></button>
                        <button className='btn_iphone2' onClick={() => applyColor(viewerRef6, 'Body.001', '#c0c0c0')}></button>
                        <button className='btn_iphone3' onClick={() => applyColor(viewerRef6, 'Body.001', '#CC9999')}></button>
                    </div>
                </div>
            </div>






            <div className='threeD'>

                <div>
                    <model-viewer
                        ref={viewerRef5}
                        disable-zoom
                        id="viewer5"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        class="custom-camera-controls"
                        poster={poster}
                        min-camera-orbit="auto 32deg auto"
                        max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"

                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>

                    </model-viewer>

                    <div className="controls">
                        <button className='btn_car1' onClick={() => applyColor(viewerRef5, 'Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa', 'red')}></button>
                        <button className='btn_car2' onClick={() => applyColor(viewerRef5, 'Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa', '#023e8a')}></button>
                        <button className='btn_car3' onClick={() => applyColor(viewerRef5, 'Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa', 'black')}></button>
                    </div>
                </div>
                <div className='threed_content'>
                    <h3>Revolutionize Car Shopping with 3D Configuration and AR</h3>
                    <p>Elevate Your Car Buying Experience: Unleash the Power of 3D Configuration and Augmented Reality. At our platform, we redefine the way you shop for cars.Now, you can customize every aspect of your future vehicle in three dimensions.</p>
                    <div className='demo_readmore3'>
                        {/* <button>Read more</button> */}
                    </div>
                </div>

            </div>



            <div className='threeD'>

                <div className='threed_content7'>
                    <h3>Precision in 3D Configuration and Augmented Reality</h3>
                    <p>Master Your Game in 3D: Precision Fit Meets Augmented Reality Training. Elevate your performance with our 3D-configurable Baseball Glove. It's not just about the perfect fit; it's about perfecting your game.</p>
                    <div className='demo_readmore4'>
                        {/* <button>Read more</button> */}
                    </div>
                </div>


                <div>
                    <model-viewer
                        ref={viewerRef7}
                        disable-zoom
                        id="viewer7"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        class="custom-camera-controls"
                        poster={poster}
                    >
                        <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                        </div>
                    </model-viewer>

                    <div className="controls">
                        <button className='btn_glove1' onClick={() => applyColor(viewerRef7, 'Material', '#6f1d1b')}></button>
                        <button className='btn_glove2' onClick={() => applyColor(viewerRef7, 'Material', '#023047')}></button>
                        <button className='btn_glove3' onClick={() => applyColor(viewerRef7, 'Material', '#99582a')}></button>
                    </div>
                </div>


            </div>









            {/* <div className='threeD'>
            <div className='threed_content'>
                    <h3>The Best AR & 3D  Solutions for Furniture Companies</h3>
                    <p>The integration of AR and 3D technology within furniture design has become an integral component of the creative and presentation processes, offering both unparalleled versatility and freedom of expression.</p>
                    <div className='demo_readmore2'>
                    </div>
                </div>

                <div>
                    <model-viewer
                        ref={viewerRef4}
                        disable-zoom
                        id="viewer4"
                        auto-rotate
                        camera-controls
                        shadow-intensity="1"
                        class="custom-camera-controls"
                    ></model-viewer>

                    <div className="controls">
                        <button className='btn_table1' onClick={() => applyColor(viewerRef4, 'new wood', 'white')}></button>
                        <button className='btn_table2' onClick={() => applyColor(viewerRef4, 'new wood', 'black')}></button>
                        <button className='btn_table3' onClick={() => applyColor(viewerRef4, 'new wood', 'brown')}></button>
                    </div>
            </div>
            </div> */}












            <Footer />
        </div>
    );
}

export default Demo;