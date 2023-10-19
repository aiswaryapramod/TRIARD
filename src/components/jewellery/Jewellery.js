import React, { useEffect } from 'react';
import "./Jewellery.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ringvideo from "../../assets/ring_video2.mp4";
import jwell1 from "../../assets/jwell1.png";
import jwell2 from "../../assets/jwell2.png";
import jwell3 from "../../assets/jwell3.png";
import jwell4 from "../../assets/jwell4.png";
import jwell5 from "../../assets/jwell5.png";
import ar1 from "../../assets/ar1.png"
import ar2 from "../../assets/ar_2.png"
import ar3 from "../../assets/ar3.png"
import ar4 from "../../assets/ar4.png"
import ar5 from "../../assets/ar5.png"
import jwelllogo from "../../assets/jwell_logo.png"
import jwellimagebig from "../../assets/jwellarbig.png"

import { useParams } from 'react-router';

function Jewellery() {

    const { slug } = useParams();

    useEffect(() => {
      window.scrollTo({
          behavior: 'smooth',
          top: 0,
          left: 0
      });
  }, [ slug ]);
  

    return (
        <div>
            <Navbar />
            <div className='jwell_max-section'>
                <div className='jwell_top'>
                    <h3>Revolutionizing Ecommerce</h3>
                    <h4>One pixel at a time Experience the Future of Jewellery Shopping!</h4>
                    <p>Discover the transformative capabilities that empower you to effortlessly create and distribute realistic 3D content and immersive AR encounters. Elevate your e-commerce landscape, amplify your digital marketing strategies, and beyond, while delivering exceptional user engagement and achieving remarkable sales growth.</p>
                </div>

                <div className='jwell_subtop'>
                    <h2>3D Viewer for Jewellery</h2>
                    <h3>Like Never Before!</h3>
                </div>

                <div className='jwell_video'>
                <video width={'70%'} height={'10%'} autoPlay playsInline muted loop ><source src={ringvideo} type='video/mp4'></source></video>

                    {/* <video width="700" height="450" controls>
                        <source src={ringvideo} type="video/mp4" />
                    </video> */}
                </div>

                <div className='jwell_content1'>
                    <br></br><br></br>
                    <p>Our 3D Viewer for Jewellery is your gateway to a whole new level of engagement with exquisite jewellery pieces.</p>
                    <h4>With this cutting-edge technology, you can:</h4>

                    <div className='content1_img_section'>
                        <div className='content1_grid'>
                            <img src={jwell1}></img>
                            <h5>Zoom In with Precision</h5>
                            <h6> Explore every intricate detail of jewellery items with zoom capabilities that provide a crystal-clear view.</h6>
                        </div>

                        <div className='content1_grid'>
                            <img src={jwell2}></img>
                            <h5>360° Rotation</h5>
                            <h6>Admire jewellery from all angles, allowing you to appreciate its craftsmanship and beauty from every perspective.</h6>
                        </div>

                        <div className='content1_grid'>
                            <img src={jwell3}></img>
                            <h5>True-to-Life Rendering</h5>
                            <h6>Witness the true colors and textures of jewellery, ensuring you make informed and confident choices.</h6>
                        </div>

                        <div className='content1_grid'>
                            <img src={jwell4}></img>
                            <h5>Virtual Try-On</h5>
                            <h6>Visualize how your chosen jewellery piece complements your style through our virtual try-on feature.</h6>
                        </div>

                        <div className='content1_grid'>
                            <img src={jwell5}></img>
                            <h5>Interactive Shopping</h5>
                            <h6>Seamlessly add items to your cart and proceed to checkout without leaving the 3D environment.</h6>
                        </div>

                    </div>

                </div>


                <div className="jwell_ar">
                        <h3>AR Viewer for Jewellery</h3>
                        <h4>Bring Jewellery into Your World!</h4>
                        <div className='jwell_video_ar'>
                            <img src={jwellimagebig}></img>
                        </div>
                </div>


                <div className='jwell_content2'>
                    <br></br><br></br>
                    <p>Triard's AR Viewer for Jewellery takes jewellery shopping to the next level by integrating augmented reality technology.</p>
                    <h4>Here's what you can expect:</h4>

                    <div className='content2_img_section'>
                        <div className='content1_grid'>
                            <img src={ar1}></img>
                            <h5>Virtual Jewellery Try-On</h5>
                            <h6>See how that sparkling diamond necklace or elegant bracelet looks on you before making a purchase, all from the comfort of your home.</h6>
                        </div>

                        <div className='content2_grid'>
                            <img src={ar2}></img>
                            <h5>Real-World Sizing</h5>
                            <h6> Get an accurate sense of the size and fit of your chosen jewellery when superimposed onto your environment.</h6>
                        </div>

                        <div className='content2_grid'>
                            <img src={ar3}></img>
                            <h5>Interactive Showcases</h5>
                            <h6>Virtually place jewellery pieces in your surroundings to create personalized showcases for special occasions or daily wear.</h6>
                        </div>

                        <div className='content2_grid'>
                            <img src={ar4}></img>
                            <h5>Share with Confidence</h5>
                            <h6>Share your AR experiences with friends and family to get their opinions before you buy.</h6>
                        </div>

                        <div className='content2_grid'>
                            <img src={ar5}></img>
                            <h5>Effortless Shopping</h5>
                            <h6>Easily add AR-visualized jewellery to your cart, and seamlessly transition to the checkout process.</h6>
                        </div>
                        <br></br>

                    </div>

                </div>


                <div className='jwell_bottom_section'>
                    <div className='jwell_bottom_content'>
                        <h3>Discover the incredible capabilities of Triard</h3>
                        <p>Our aim is to provide you with a comprehensive understanding of how Triard can revolutionize your 3D work processes. . With our hands-on demonstration, you'll gain insights into the intuitive features that set Triard apart. From streamlined project management to powerful editing tools, Triard offers everything you need for your 3D projects. Prepare to experience a significant boost in productivity and creativity with Triard as your trusted companion.</p>
                        <ul>
                            <li>Explore the capabilities of Triard through our guided demonstration.</li>
                            <li>Triard is your all-in-one solution for 3D projects.</li>
                            <li>Boost productivity and unleash your creativity with Triard by your side.</li>
                        </ul>
                    </div>

                    <div className='jwell_bottom_img'>
                        <img src={jwelllogo}></img>
                    </div>
                </div>


            </div>


            <Footer />

        </div>
    );
}

export default Jewellery;