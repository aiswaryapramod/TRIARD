import React, { useEffect } from 'react';
import "./Bloginner4.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import inner1banner from "../../assets/gitex.png";
import inner1 from "../../assets/blog4_1.png";
import inner2 from "../../assets/blog4_2.png";
import inner3 from "../../assets/blog4_3.png";
import inner4 from "../../assets/blog4_4.png";
import inner5 from "../../assets/blog4_5.png";
import inner6 from "../../assets/gitex3.png";
import inner7 from "../../assets/blog_3_8.png";
import inner8 from "../../assets/blog_3_9.png";
import inner9 from "../../assets/inner1sub9.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import blog8 from "../../assets/blog8_main.webp";
import blog2 from "../../assets/blog2.png";
import calender from "../../assets/calender-icon.png";
import { useParams } from 'react-router';
import fbsocial from "../../assets/fb-social.png";
import twittersocial from "../../assets/twitter-social.png";
import linkdinsocial from "../../assets/linkdin-social.png";
import watsappsocial from "../../assets/watsap-social.png";
import share from "../../assets/share-icon-blog.png";


import { Helmet } from "react-helmet";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';


function Bloginner4() {




    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        });
    }, [slug]);

    const shareUrl = 'https://triard.io/blog/triards-debut-at-gitex-2023-a-technological-Innovation-by-digitalbuddha'; // Replace with your actual blog URL
    const title = 'Triards Debut at GITEX 2023 A Technological Innovation by Digitalbuddha'; // Replace with your blog title


    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Triard's Debut at GITEX 2023</title>
                <meta name="description" content="Discover the highlights of GITEX Global 2023, the world's largest tech startup event. Debut of Triard at the event."></meta>
            </Helmet>


            <Navbar />
            <div className='bloginner4'>

                <div className='inner4_main_head'>
                    <h1>Triard's Debut at GITEX 2023: A Technological Innovation by Digitalbuddha</h1>
                </div>
                <div className='inner4_banner'>
                    <img src={inner1banner} alt='Inspiring'></img>
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


                <div className='inner4_first_info'>
                    <h1>Inspiring Journey into a Bright Technological Future</h1>
                    <p>In 2023, the world experienced a significant global tech event, the Gulf Information Technology Exhibition (GITEX GLOBAL 2023), held at the Dubai World Trade Centre from October 16th to 20th, which emerged as an epicenter of innovation and a testament to the transformative power of technology. It wasn't just a conference; it was an immersive experience that left a profound impact on all those in attendance. <br>
                    </br><br></br>    GITEX GLOBAL 2023 gathered individuals from diverse backgrounds, all with a shared passion for technology. From budding entrepreneurs to seasoned tech pioneers, students to industry leaders, it was a melting pot of ideas and creativity. This international platform served as a dashboard for sharing knowledge, showcasing groundbreaking innovations, and fostering connections that have the potential to shape the digital landscape.
                    </p>
                </div>

                <div className='key-highlights'>
                    <h1>Key highlights of GITEX GLOBAL 2023 </h1>
                </div>

                <div className='inner4_sub_contents'>
                    <div className='inner4_sub_wrapper'>
                        <img src={inner1} alt='Keynotes'></img>
                        <h3>Thought-Provoking Keynotes</h3>
                        <p>Industry experts took the stage to deliver thought-provoking keynote speeches and engage in enlightening panel discussions. Topics ranged from artificial intelligence and its implications to the future of work in a rapidly evolving technological landscape.</p>
                    </div>

                    <div className='inner4_sub_wrapper'>
                        <img src={inner2} alt='Startup'></img>
                        <h3>Startup Enclaves</h3>
                        <p>GITEX GLOBAL 2023 featured dedicated zones where innovative startups from all corners of the globe had the opportunity to pitch their groundbreaking ideas. These startups connected with potential investors, gained exposure, and competed for essential funding, underscoring the importance of innovation and entrepreneurship.</p>
                    </div>
                    <div className='inner4_sub_wrapper'>
                        <img src={inner3} alt='Discoveries'></img>
                        <h3>Cutting-Edge Discoveries</h3>
                        <p>The event's exhibition zones were a treasure trove of cutting-edge products and innovations. Attendees had the chance to explore the latest in Fintech, Virtual Reality & the Metaverse, Healthtech, AI & Robotics, Future Tech, Smart Cities, 5G, and more. The diversity of offerings showcased the expansive potential of technology.</p>
                    </div>


                    <div className='inner4_sub_wrapper'>
                        <img src={inner4} alt='Sessions'></img>
                        <h3>Insightful Sessions</h3>
                        <p>Experts from various industries presented insights into the latest trends and technologies in their respective fields. These sessions were not only informative but also inspiring, offering attendees valuable takeaways.</p>
                    </div>
                    <div className='inner4_sub_wrapper'>
                        <img src={inner5} alt='Opportunities'></img>
                        <h3>Networking Opportunities</h3>
                        <p>The event provided a platform for invaluable networking. Attendees had the opportunity to connect with leading experts, industry leaders, and key decision-makers. These connections have the potential to lead to future collaborations and ventures.</p>
                    </div>






                    <div className='inner4_sub_wrapper'>
                        <img src={inner6} alt='Participation'></img>
                        <h3>Triard’s Participation in GITEX 2023</h3>
                        <p>For Digitalbuddha, this event was a monumental chapter in our journey toward a brighter technological future. We seized this opportunity to introduce our latest creation, Triard, to the world. Triard is not just a product; it's a game-changer in the e-commerce sector. By seamlessly integrating 3D visualization, configuration, and augmented reality technology into a single, immersive platform, Triard is poised to revolutionize the way consumers experience and interact with products online. The response we received was nothing short of astounding. This event was a great opportunity for us as we were able to get exposure to the outside world and also had the chance to meet and converse with many companies. Participating in this event provided us with valuable exposure and opportunities to engage with numerous companies. This was just a stepping stone for us, paving the way for our growth and for doing something bigger and better.</p>
                    </div>


                    <div className='conclusion'>
                        <h4>Conclusion</h4>
                        <p>What set GITEX GLOBAL 2023 apart was not just the innovative products and solutions on display; it was the collaborative spirit and the wealth of knowledge that permeated the event. It provided a stage for entrepreneurs to present their ideas and innovations and receive valuable feedback from a diverse and knowledgeable audience. It was a platform where the tech community came together to discuss the challenges and opportunities of the digital economy, leaving everyone with fresh insights and a renewed sense of purpose.
                            <br></br><br></br>
                            GITEX GLOBAL 2023 wasn't just an exhibition but an inspiring journey into a bright technological future. It served as a testament to the transformative power of technology, innovation, and the human spirit. It demonstrated that when individuals come together to share their passion, creativity, and knowledge, remarkable things happen. As we look toward the horizon of what technology can achieve, events like GITEX GLOBAL 2023 are epicenters of inspiration, reminding us that the future is bright and it's ours to shape.</p>
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
                            <img src={blog6} alt='recent'></img>
                            <div className='calender-section'>
                                <div className='calender-icon'>
                                    <img src={calender} alt='calender'></img>
                                </div>

                                <div className='calender-text'>
                                    <h4>Post published December 20, 2023</h4>
                                </div>
                            </div>

                            <h2>Triard's Introduction: Digitalbuddha's Revolutionary Showcase at Huddle Global 2023</h2>
                            <button><a href="/blog/triards-introduction-digitalbuddhas-revolutionary-showcase-at-huddle-global-2023">Read More</a></button>
                        </div>

                        <div className='recent-view'>
                            <img src={blog8} alt='recent'></img>
                            <div className='calender-section'>
                                <div className='calender-icon'>
                                    <img src={calender} alt='calender'></img>
                                </div>

                                <div className='calender-text'>
                                    <h4>Post published January 5, 2024</h4>
                                </div>
                            </div>

                            <h2>The Impact of AR on Industries: Current Trends and Future Prospects</h2>
                            <button><a href="/blog/the-impact-of-ar-on-industries-current-trends-and-future-prospects">Read More</a></button>
                        </div>
                    </div>
                </div>







            </div>
            <Footer />
        </div>
    );
}

export default Bloginner4;