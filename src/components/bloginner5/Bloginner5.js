import React, { useEffect } from 'react';
import "./Bloginner5.css";
import huddle1 from "../../assets/huddle1.png";
import huddle2 from "../../assets/huddle2.png";
import huddle3 from "../../assets/huddle3.png";
import huddle4 from "../../assets/huddle4.png";
import huddle5 from "../../assets/huddle5.png";
import huddle6 from "../../assets/huddle6.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog_3.png";
import calender from "../../assets/calender-icon.png";
import { useParams } from 'react-router';
import fbsocial from "../../assets/fb-social.png";
import twittersocial from "../../assets/twitter-social.png";
import linkdinsocial from "../../assets/linkdin-social.png";
import watsappsocial from "../../assets/watsap-social.png";
import share from "../../assets/share-icon-blog.png";

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Helmet } from "react-helmet";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';



function Bloginner5() {


    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        });
    }, [slug]);

    const shareUrl = 'https://triard.io/blog/triards-introduction-digitalbuddhas-revolutionary-showcase-at-huddle-global-2023'; // Replace with your actual blog URL
    const title = 'Triards Introduction: Digitalbuddhas Revolutionary Showcase at Huddle Global 2023'; // Replace with your blog title



    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Digitalbuddha's Revolutionary Showcase at Huddle Global 2023</title>
                <meta name="description" content="Discover Triard's product showcase at Huddle Global 2023, India's largest beach startup festival. This event served as an opportunity for Triard's debut."></meta>
            </Helmet>



            <Navbar />
            <div className='bloginner5'>

                <div className='inner5_main_head'>
                    <h1>Triard's Introduction: Digitalbuddha's Revolutionary Showcase at Huddle Global 2023</h1>
                </div>
                <div className='inner5_banner'>
                    <img src={huddle1} alt='huddle 2023'></img>
                </div>


                <div class="share">
                    <span><img className='share-blog-img' src={share}></img></span>
                    <nav>
                        <TwitterShareButton url={shareUrl} title={title} style={{ transition: 'transform 0.1s', }}>
                            <img className='social-icon-blog' src={twittersocial} alt="Twitter"></img>
                        </TwitterShareButton>
                        <FacebookShareButton url={shareUrl} quote={title}>
                            <img className='social-icon-blog' src={fbsocial} alt="Facebook"></img>
                        </FacebookShareButton>
                        <WhatsappShareButton url={shareUrl} title={title}>
                            <img className='social-icon-blog' src={watsappsocial} alt="WhatsApp"></img>
                        </WhatsappShareButton>
                        <LinkedinShareButton url={shareUrl} title={title}>
                            <img className='social-icon-blog' src={linkdinsocial} alt="LinkedIn"></img>
                        </LinkedinShareButton>
                    </nav>
                </div>


                <div className='inner5_first_info'>
                    <p>
                        In the vibrant coastal city of Trivandrum, Kerala, innovation enthusiasts, tech visionaries, and entrepreneurial minds gathered for India's largest beach startup festival – Huddle Global 2023. Nestled against the scenic backdrop of Adimalathura beach from November 16th to 18th, Huddle Global marked the fifth edition of this much-anticipated event, transforming the picturesque coastline into a dynamic hub of technological breakthroughs.The expo served as a platform for around 150 startups representing various Indian states to directly interact with influential figures in the technical and industrial sectors. Additionally, it presented investors with the chance to identify and back promising startups.
                        <br></br><br></br>
                        The expo aimed to provide a casual yet impactful setting for startups to showcase their products, engage in meaningful interactions, and seek guidance from esteemed technology and industry leaders. The essence of Huddle Global lay in its ability to foster deep connections and facilitate informal conversations that could shape the trajectory of startups in the ever-expanding tech world.
                    </p>
                </div>

                <div className='inner5_sub_contents'>
                    <div className='inner5_sub_wrapper'>
                        <img src={huddle2} alt='Triard at Huddle Global 2023'></img>
                        <h3>Triard at Huddle Global 2023</h3>
                        <p>Digitalbuddha's pivotal role at Huddle Global 2023 was highlighted by the unveiling of Triard – a technological breakthrough poised to redefine the paradigm of online consumer experiences. This event marked a significant milestone in our commitment to pushing the boundaries of innovation within the tech startup ecosystem.</p>
                    </div>

                    <div className='inner5_sub_wrapper'>
                        <img src={huddle3} alt='Evolution in E-Commerce'></img>
                        <h3>Triard: An Evolution in E-Commerce</h3>
                        <p>Triard represents more than a product; it embodies a transformative shift in the e-commerce sector. The platform seamlessly integrates 3D visualization, real-time configuration, and augmented reality technologies, providing users with an unparalleled online shopping journey.</p>
                    </div>
                    <div className='inner5_sub_wrapper'>
                        <img src={huddle4} alt='Immersive 3D Visuals'></img>
                        <h3>Immersive 3D Visuals</h3>
                        <p>Triard transcends conventional online shopping with its immersive 3D visualizations, enabling users to explore products in unprecedented detail, fostering a heightened sense of engagement.</p>
                    </div>


                    <div className='inner5_sub_wrapper'>
                        <img src={huddle5} alt='Real-Time'></img>
                        <h3>Real-Time Configuration</h3>
                        <p>Experts from various industries presented insights into the latest trends and technologies in their respective fields. These sessions were not only informative but also inspiring, offering attendees valuable takeaways.</p>
                    </div>

                    <div className='inner5_sub_wrapper'>
                        <img src={huddle6} alt='Augmented Reality Integration'></img>
                        <h3>Augmented Reality Integration</h3>
                        <p>Triard pioneers the fusion of online and offline shopping through augmented reality, allowing users to virtually place products in their physical space before making a purchase, thereby bridging the gap between digital and tangible experiences.</p>
                    </div>


                    <div className='charting'>
                        <h1>Charting the Future</h1>
                        <p>As we reflect on our participation in Huddle Global 2023, Digitalbuddha remains steadfast in its pursuit of excellence. Triard, as our flagship innovation, represents a commitment to shaping the future of e-commerce through cutting-edge technology. Attending this event proved to be a significant avenue for us, offering the opportunity to interact with various companies. Our participation not only granted us exposure but also opened doors to meaningful conversations with numerous businesses. This experience served as a foundational milestone, charting the course for our expansion and setting the stage for more substantial achievements in the future.</p>
                    </div>



                    <div className='conclusion'>
                        <h4>Conclusion</h4>
                        <p>Huddle Global 2023 provided the ideal backdrop for Digitalbuddha to introduce Triard, a groundbreaking innovation set to redefine the landscape of e-commerce. The event not only celebrated the spirit of innovation but also served as a catalyst for forging meaningful connections within the tech startup ecosystem. Our participation in Huddle Global 2023 was not merely an opportunity for exposure; it was a pivotal moment in our journey, marking a commitment to excellence and a dedication to shaping the future of online retail. As we chart the course ahead, Digitalbuddha remains steadfast in its pursuit of innovation, with Triard leading the way towards a new era of personalized and immersive online shopping experiences
                            <br></br><br></br>
                            This event served as the perfect stage for Triard's debut, and the connections forged during the event will undoubtedly play a crucial role in propelling Digitalbuddha towards even greater achievements. As we navigate the evolving tech landscape, the spirit of collaboration and innovation fostered at Huddle Global will continue to guide Digitalbuddha on its journey to redefine the possibilities of e-commerce.</p>
                    </div>

                </div>





                {/* recent topic */}


                <div className='recently-blogs'>
                    <h1>Recent Topics</h1>

                    <div className='recent-section'>
                        <div className='recent-view1'>
                            <img src={blog2} alt='recent'></img>
                            <div className='calender-section'>
                                <div className='calender-icon'>
                                    <img className='calender-icon1' src={calender} alt='calender'></img>
                                </div>

                                <div className='calender-text'>
                                    <h4>Post published September 17, 2023</h4>
                                </div>
                            </div>

                            <h2>Augmented Reality: 9 Transformative Use Cases That Redefine Reality</h2>
                            <div className='read-more-recent'>
                                <button className='button1-view'><a href="/blog/augmented-reality-9-transformative-use-cases-that-redefine-reality">Read More</a></button>
                            </div>
                        </div>

                        <div className='recent-view'>
                            <img src={blog3} alt='recent'></img>
                            <div className='calender-section'>
                                <div className='calender-icon'>
                                    <img src={calender} alt='calender'></img>
                                </div>

                                <div className='calender-text'>
                                    <h4>Post published September 20, 2023</h4>
                                </div>
                            </div>

                            <h2>The Power of 3D Rendering in Business</h2>
                            <button><a href="/blog/the-power-of-3d-rendering-in-business">Read More</a></button>
                        </div>

                        <div className='recent-view'>
                            <img src={blog4} alt='recent'></img>
                            <div className='calender-section'>
                                <div className='calender-icon'>
                                    <img src={calender} alt='calender'></img>
                                </div>

                                <div className='calender-text'>
                                    <h4>Post published October 21, 2023</h4>
                                </div>
                            </div>

                            <h2>The Benefits of Product Customization for eCommerce Businesses</h2>
                            <button><a href="/blog/the-benefits-of-product-customization-for-ecommerce-businesses">Read More</a></button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>


    );
}

export default Bloginner5;