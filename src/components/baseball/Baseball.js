import React from 'react';
import "./Baseball.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import sportsvideo from "../../assets/sports_gear.mp4";
import spcard1 from "../../assets/sports_card1.png";
import spcard2 from "../../assets/sports_card2.png";
import spcard3 from "../../assets/sports_card3.png";
import {Helmet} from "react-helmet";

function Baseball() {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>3D Configuration and AR for Sports Industry | Triard</title>
                <meta name="description" content="Triard for sports industry with 3D configuration and AR technology. Provide your shoppers with best visual experience.Visit now to know more!"></meta>
            </Helmet>


            <Navbar />
            <div className='sports_and_gear'>
                <div className='sports_section'>
                    <div className='sports_main_head'>
                        <h2>Triard's 3D Configuration and AR Services for Baseball Glove</h2>
                        <p>Are you ready to take your baseball game to the next level? Triard presents an exciting innovation in sports gear with our
                            3D-Configurable Baseball Glove. Triard is here to revolutionize your e-commerce experience with our cutting-edge 3D Configuration and Augmented Reality (AR) services. We offer a seamless solution that can transform your website into a dynamic and interactive platform, driving more sales and customer engagement.</p>
                    </div>
                </div>

                <div className='sports_video'>
                    <video width={'84%'} height={'10%'} autoPlay playsInline muted loop ><source src={sportsvideo} type='video/mp4'></source></video>
                    {/* <img src={sprtsimg}></img> */}
                </div>


                <div className='sports_all_content'>
                    <div className='sports_content_sec'>
                        <br></br>
                        {/* <div className='sports_head'>
                        <h2>How 3D Configurator is Transforming the Furniture Industry?</h2>
                    </div> */}
                        <div className='sports_card_sec'>
                            <div className='sports_card'>
                                <img src={spcard1} alt='Enrich Your Product Offerings'></img>
                                <h3>Enrich Your Product Offerings</h3>
                                <p>Expanding your product catalog is a key strategy for e-commerce success, and Triard's 3D-configurable Baseball Glove is the perfect addition. This customizable glove empowers your customers to personalize their gloves according to their unique preferences.</p>
                            </div>

                            <div className='sports_card'>
                                <img src={spcard2} alt='Enhanced Customer Engagement'></img>
                                <h3>Enhanced Customer Engagement</h3>
                                <p>Triard's technology isn't just about selling gloves; it's about creating an immersive shopping experience. Our 3D configurator allows customers to interact with their customized gloves in real-time, keeping them engaged on your website for longer periods.</p>
                            </div>

                            <div className='sports_card'>
                                <img src={spcard3} alt='Reduced Returns and Increased Customer Satisfaction'></img>
                                <h3>Reduced Returns and Increased Customer Satisfaction</h3>
                                <p>The interactivity of our technology helps customers make more informed purchase decisions. As a result, the likelihood of returns is reduced. Happy and satisfied customers are not only more likely to become repeat buyers but also advocates for your brand.</p>
                            </div>
                        </div>
                        <br></br>
                    </div>


                    <div className='sports_gain'>
                        <h2>Gain a Competitive Edge</h2>
                        <p>In today's e-commerce landscape, staying ahead of the competition is essential. By offering Triard's innovative technology on your website, you position yourself as a forward-thinking industry leader. This differentiation draws more customers to your e-commerce platform, boosting your visibility and sales.</p>
                    </div>


                    <div className='sports_gain_blocks'>
                        <div className='gain_blk'>
                            <h3>Seamless Integration</h3>
                        </div>

                        <div className='gain_blk'>
                            <h3>Scalable Solutions</h3>
                        </div>

                        <div className='gain_blk'>
                            <h3>Expert Guidance</h3>
                        </div>

                        <div className='gain_blk'>
                            <h3>Data Driven Insights</h3>
                        </div>
                    </div>




                    <div className='game_changer_section'>
                        <div className='game_changer'>
                            <h1>Why 3D Rendering Is a Game-Changer for Your Glove Business?</h1>
                            <p>To excel in the online retail space, especially in the baseball glove industry, using 3D rendering can be a real game-changer. Here's why it's so useful for your business in simple terms:</p>
                        </div>



                        <div className='game_changer_content'>
                            <div className='game_changer_info'>
                                <h4>See Your Customizations Right Away</h4>
                                <ul>
                                    <li>3D rendering lets customers instantly see how their custom glove will look.</li>
                                    <li> You can pick colors, materials, and more, and watch your glove change on the screen.</li>
                                    <li>This makes it easy to create the perfect glove and makes customers happy.</li>
                                </ul>
                            </div>

                            <div className='game_changer_info'>
                                <h4>No More Guesswork</h4>
                                <ul>
                                    <li>Sometimes, you're not sure if a glove will fit or look right. </li>
                                    <li>3D rendering takes away the guesswork by showing you exactly what your glove will be like.</li>
                                    <li> You can choose what suits you best and feel confident about your choice.</li>
                                </ul>
                            </div>


                            <div className='game_changer_info'>
                                <h4>Better Shopping Experience:</h4>
                                <ul>
                                    <li>Using 3D rendering makes shopping on your website more fun.</li>
                                    <li>People stay longer because they can try out different glove options.</li>
                                    <li>This means more people buying gloves from you.</li>
                                </ul>
                            </div>


                            <div className='game_changer_info'>
                                <h4>Personal Touch and Branding</h4>
                                <ul>
                                    <li>3D rendering lets you make your glove special.</li>
                                    <li>You can add your name or team logo, making it unique.</li>
                                    <li>This makes people feel a strong connection to your brand and keeps them coming back.</li>
                                </ul>
                            </div>

                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                <div className='faq_content_sports'>
                    <h4>FAQs</h4>

                    <details>
                        <summary> Q: How does the 3D configuration process work for the baseball glove?</summary><hr></hr>
                        <p> Our 3D configurator allows you to personalize your baseball glove in real-time. You can choose the glove's color, materials, web style, and personalization options. As you make these selections, you can see your glove transform on your screen, giving you a clear preview of the final product.</p>
                    </details>

                    <details>
                        <summary> Q: How can I get assistance with the 3D configuration process or any questions I may have?</summary><hr></hr>
                        <p> Our dedicated customer support team is here to help. If you have any questions or need assistance with the 3D configuration process, please don't hesitate to reach out to us. You can contact us through our website, and we'll be happy to assist you.</p>
                    </details>

                    <details>
                        <summary>Q: Can I view my customized baseball glove in Augmented Reality (AR) before making a purchase?</summary><hr></hr>
                        <p>While our 3D configurator provides a detailed visual representation of your customized glove, we currently do not offer AR visualization. However, our customization options ensure that you get a glove that matches your preferences perfectly.</p>
                    </details>

                </div>



            </div>

            <Footer />


        </div>
    );
}

export default Baseball;