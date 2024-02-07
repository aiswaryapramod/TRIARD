import React from 'react';
import "./Car.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import carvideo from "../../assets/car_video.mp4";
import carpage1 from "../../assets/car-page1.png";
import carpage2 from "../../assets/car-page2.png";
import carpage3 from "../../assets/car-page3.png";
import { Helmet } from "react-helmet";

function Car() {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>3D Configuration and AR for Automotive Industry | Triard</title>
                <meta name="description" content="Explore the 3D configuration and AR solutions for automotive industry at Triard. Boost your sales with our innovative technology. Visit now!"></meta>
            </Helmet>


            <Navbar />
            <div className='car_max-section'>

                <div className='car_top'>
                    <h3>Revolutionize Car Shopping with 3D Configuration and AR</h3>
                    <p>Are you an e-commerce business operating in the automotive industry? It's time to take your online vehicle sales to the next level. Imagine you could design your car just the way you like it before even going to the car lot. Where You can pick the color, add fancy seats, and choose some of the features you want.Triard is changing the way you shop for cars. With our 3D and AR tech, you're in control of your car-buying journey. No more guessing, Triard's real-time 3D configurator brings this dream to life. We offer tailor-made solutions that can transform your website into a dynamic and engaging platform for potential car buyers. Say goodbye to static images and limited options. With our configurator, you have the freedom to customize your car to your heart's content. </p>
                </div>


                <div className='car_video'>
                    <video width={'70%'} height={'10%'} autoPlay playsInline muted loop ><source src={carvideo} type='video/mp4'></source></video>
                </div>

                <div className='car_subtop'>
                    <h3>Design Your Dream Car in 3D, A Game-Changer in Car Shopping</h3>
                    <p>Picture crafting your dream car in immersive 3D – all before stepping into a showroom. Triard's 3D configurator turns this fantasy into reality. No more static images or limited options; you have the freedom to tailor your vehicle to perfection.Whether you fancy a fiery red exterior with luxurious leather seats, cutting-edge tech features, or a sunroof, the possibilities are boundless, and the choices are yours to make. What sets our 3D tool apart is its real-time interactivity, allowing you to witness instant results as you fine-tune every aspect of your dream car. Our real-time 3D configurator allows your customers to interactively customize their dream cars on your website. This level of personalization and engagement marks a revolution in the world of car shopping. Thereby Increasing  conversions as customers create and visualize their perfect vehicle right on your site.</p>
                </div>


                <div className='car_magic_awaits_wrapper'>
                    <br></br>
                    <div className='car_wrapper_head'>
                        <h2>Augmented Reality Magic Awaits</h2>
                    </div>
                    <div className='car_awaits_info_section'>
                        <div className='car_info'>
                            <img src={carpage1} alt='Magic Awaits'></img>
                            <h3>Augmented Reality Magic Awaits</h3>
                            <p>Triard doesn't stop at 3D configuration. We take the next step by harnessing the magic of Augmented Reality. Our AR technology allows you to bring your customized car into the real world, virtually. Using your smartphone you can project your dream car into your driveway, garage, or anywhere else you desire.</p>
                        </div>

                        <div className='car_info'>
                            <img src={carpage2} alt='Comprehensive'></img>
                            <h3>Comprehensive Vehicle Catalog</h3>
                            <p>Triard understands that car shoppers have diverse tastes and needs. That's why we offer an extensive catalog of car makes and models, all conveniently accessible in one place. Whether you're a fan of compact cars, SUVs, or luxury sedans, we've got you covered.</p>
                        </div>

                        <div className='car_info'>
                            <img src={carpage3} alt='Satisfaction'></img>
                            <h3>Boost Sales and Customer Satisfaction</h3>
                            <p>Stand out in the competitive e-commerce automotive market with Triard's innovative technology. Offer customers a unique and interactive shopping experience that encourages them to stay longer on your website.</p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className='car_bottom_sec'>
                    <h1>Why Choose Triard?</h1>
                </div>


                <div className='car_bottom_li'>
                    <ul>
                        <li>
                            Our solutions are designed to enhance the online car-buying journey, making it more engaging and informative.
                        </li>
                        <li>
                            By partnering with Triard, you'll differentiate your e-commerce automotive business and gain a competitive edge.
                        </li>
                        <li>
                            The automotive industry is continually evolving. Triard keeps you ahead of the curve by offering the latest in 3D configuration and AR technology.
                        </li>
                        <li>
                            Triard doesn't offer one-size-fits-all solutions. We understand that every e-commerce automotive business is unique. Our services are customizable to align perfectly with your specific needs and goals.
                        </li>
                        <li>
                            By offering Triard's innovative technology, you'll set your e-commerce automotive business apart from the competition. Stand out in a crowded market and be seen as a forward-thinking industry leader.
                        </li>
                        <li>
                            Triard doesn't just provide a product and walk away. We offer ongoing support and guidance to ensure you're making the most of our technology. Our team is available to answer questions and address any concerns.
                        </li>
                    </ul>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default Car;