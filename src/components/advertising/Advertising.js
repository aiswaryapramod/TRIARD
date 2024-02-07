import React from 'react';
import "./Advertising.css";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import advsec1img from "../../assets/adv_sec1.png";
import advsec2img1 from "../../assets/advsec2img1.png";
import advsec2img2 from "../../assets/advsec2img2.png";
import advsec2img3 from "../../assets/advsec2img3.png";
import advsec2img4 from "../../assets/advsec2img4.png";
import { Helmet } from "react-helmet";

function Advertising() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>3D Digital Advertising | Triard</title>
                <meta name="description" content="Provide new experience for your shoppers with our 3D digital advertising. Create custom 3D configuration and augmented reality product visuals."></meta>
            </Helmet>

            <Navbar />

            <div className='advertising_top_head'>
                <h1>Engage, Convert & Succeed with 3D Digital Advertising</h1>
                <p>The battle for consumer attention is fierce in today’s digital age. Traditional advertising methods are losing ground to more interactive and engaging formats. This is where 3D digital advertising comes into play, and Triard stands at the forefront of this revolution.</p>
            </div>

            <div className="advertising_section1">
                <div className='advertising_wrapper_info'>
                    <div className='advertising_sec1_info'>
                        <h3>3d Digital Advertising: What and Why’s ?</h3>
                        <p>It's no secret, the digital advertising industry is facing a crisis. While some might label it as a "transition," the outcome remains clear: what used to work doesn't quite cut it anymore. But why? At a broad level, the challenge lies in satisfying the ever-evolving appetite of modern consumers for novel experiences. Shoppers today are discerning, making thoughtful choices, and in a saturated market, competition is fierce. Advertisers find themselves in a constant race to elevate their advertising game. These mounting concerns are prompting online advertisers to seek alternative means of engaging with consumers. This is where 3D digital advertising emerge as a potential game-changer.</p>
                    </div>
                    <br></br><br></br>
                    <div className='advertising_sec1_info'>
                        <h3>So, what exactly is 3d Digital Advertising?</h3>
                        <p>3D advertising introduces depth beyond the confines of traditional two-dimensional ads, offering a significantly more engaging experience. Users can interact with images or products in real-time, virtually manipulating items by touching, spinning, and moving them. Some cases even allow users to customize products, elevating engagement to a whole new level.</p>
                    </div>
                </div>

                <div className='advertising_wrapper_img'>
                    <div className='advertising_sec1_img'>
                        <img src={advsec1img} alt='advertising section'></img>
                    </div>
                </div>
            </div>

            <div className='advertising_sub_head'>
                <h2>Reinvent your Brand with 3d Digital Advertising</h2>
                <p>The old-fashioned ads just don't cut it anymore. This is where 3D digital advertising leads the way and  becomes a  topic of excitement. Here's why 3D digital advertising is a big deal</p>
            </div>


            <div className='advertising_section2'>
                <div className='advertising_info'>
                    <div className='advertising_info_img'>
                        <img src={advsec2img1} alt='Enhanced Engagement'></img>
                    </div>
                    <div className='advertising_info_text'>
                        <h3>Enhanced Engagement</h3>
                        <p>3D digital advertising can generate up to three times more engagement than standard display or rich media ads. Imagine your audience interacting with your product—spinning it, zooming in, exploring it—all before they even click on your ad.</p>
                    </div>
                </div>

                <div className='advertising_info2'>
                    <div className='advertising_info_text'>
                        <h3>Elevated Brand Impact </h3>
                        <p>3D digital advertising boosts purchase intent by a factor of 6.9x and brand favorability by 4.7x. In an era where companies are constantly seeking ways to enhance their e-commerce experiences, 3D advertising is the key to setting your brand apart and providing a cohesive customer journey.</p>
                    </div>
                    <div className='advertising_info_img'>
                        <img src={advsec2img2} alt='Elevated Brand Impact'></img>
                    </div>
                </div>

                <div className='advertising_info'>
                    <div className='advertising_info_img'>
                        <img src={advsec2img3} alt='Optimized Customer Experience'></img>
                    </div>
                    <div className='advertising_info_text'>
                        <h3>Optimized Customer Experience</h3>
                        <p>With Triard, elevate your product visuals on your website, enable product customization, and start your journey with high-quality 3D product visuals in your digital advertising assets. This unified customer experience across your e-commerce funnel not only converts more clicks but also maximizes your return on investment (ROI).</p>
                    </div>
                </div>

                <div className='advertising_info4'>
                    <div className='advertising_info_text'>
                        <h3>Scalable Production</h3>
                        <p>To leverage audience targeting and data-driven advertising, you need a wealth of assets to test. However, traditional product visuals come with escalating costs, limiting ROI. Enter Triard's scalable 3D platform, which allows you to generate all the photorealistic 3D imagery you need to optimize your campaigns.</p>
                    </div>
                    <div className='advertising_info_img'>
                        <img src={advsec2img4} alt='Scalable Production'></img>
                    </div>
                </div>
            </div>


            <div className='advertising_bottom_info'>
                <h3><span>Triard</span>,Your Partner in 3D Digital Advertising</h3>
                <p>Triard isn't just a platform; we're your partner in bringing 3D digital advertising to life. Whether you're a sophisticated marketing team, an agency, or an e-commerce visionary, Triard's platform seamlessly integrates into your existing processes. Our collaboration with agencies and marketers is as dynamic as the advertising landscape itself. Triard makes it easy to enable 3D digital advertising for Google, aligning your brand with the future of e-commerce. Together, we'll elevate your advertising game, invite interaction, earn engagement, and convert clicks like never before.
                    <br></br><br></br>
                    Don't be left behind in the static world of traditional advertising. Embrace the future with Triard and watch your brand leap off the screen into the immersive realm of 3D digital advertising. Your customers are ready—are you?</p>
            </div>


            <div className='advertising_cta'>
                <div className='advertising_cta_info'>
                    <br></br>
                    <h2>Get Started with <span>Triard</span> Today and Discover the <span>Future of Shopping !</span></h2>
                    <div className='advertising_cta_btn'>
                        <button><a href='/contact-us'>Contact us</a></button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Advertising;