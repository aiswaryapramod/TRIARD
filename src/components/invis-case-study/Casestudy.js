import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import invistopimg from "../../assets/invis1.png";
import invisintroduction from "../../assets/invis2.png";
import invislogo from "../../assets/invis-logo.png";
import invis3 from "../../assets/invis3.png";
import "./Casestudy.css";

function Inviscasestudy() {
    return (
        <div>

            <Navbar />

            <div className='invis-case-study'>
                <div className='invis-digital-revolution'>
                    <div className='invis-digitl-content'>
                        <h2>The Digital Revolution:
                            Invis Furniture's Success Story
                            in Modern E-commerce with
                            3D and AR Integration</h2>
                        <p>This case study is a testament to the transformative power of digital innovation, specifically through the seamless integration of 3D visualization and AR technologies. Invis Furniture, a leading force in space-efficient furniture solutions, embarked on a digital transformation journey with Triard, redefining the online furniture shopping experience.</p><br></br>
                        <p>Triard is delighted to be a key contributor to Invis Furniture's evolution, demonstrating the limitless possibilities of immersive technologies in reshaping the e-commerce landscape. Our collaboration has not only enhanced the visual appeal of Invis Furniture's online platform but has also elevated the entire customer shopping experience.</p>
                    </div>
                    <div className='invis-dogital-img'>
                        <img src={invistopimg} alt='invis1'></img>
                    </div>
                </div>


                <div className='invis-introduction'>
                    <h2>Introduction</h2>

                    <img src={invisintroduction} alt='invis2'></img>
                    <p>Explore the story of Invis Furniture's digital evolution, a leader in space-efficient solutions, as they partnered with Triard to revolutionize their online presence. The mission was straightforward: employ the prowess of 3D Visualization and Augmented Reality (AR) to shape a dynamic digital shopping experience. This collaboration, aimed at tech-savvy consumers, unfolds the story of how Invis Furniture and Triard collaborated to redefine the online furniture retail landscape.The objective was clear-cut: elevate the design and functionality of the website to draw in a broader customer base and boost sales by leveraging the capabilities of 3D Visualization and Augmented Reality (AR) for an enriched digital shopping experience.</p>
                </div>

                <div className='about-invis-section'>
                    <div className='invis-logo'>
                        <img src={invislogo} alt='invis3'></img>
                        <h1>About the Company</h1>
                        <h2>Furniture Manufacturing</h2>
                    </div>
                    <div className='invis-content'>
                        <div className='invis-content-left'>
                            <h2>Website Focus</h2>
                            <h3>Sales</h3>
                            <h4>Business Type</h4>
                            <h5>Business to Consumer</h5>
                        </div>
                        <div className='invis-content-right'>
                            <h2>Industry</h2>
                            <h3>Furniture Industry</h3>
                            <h4>URL</h4>
                            <h5><a href='https://invisfurniture.com/' target='_blank'>https://invisfurniture.com/</a></h5>
                        </div>

                    </div>
                </div>

                <div className='invis-challenge'>
                    <h1>The Challenge</h1>
                    <h2>Establishing Distinctiveness:</h2>
                    <p>Invis Furniture aimed to create a website that would set it apart in a fiercely competitive market, providing a unique advantage over rivals. The challenge involved optimizing loading speed, particularly with the integration of resource-intensive 3D and AR features that had the potential to impede website performance. Prioritizing a flawless user experience became imperative, requiring a visually appealing design and seamless navigation.</p><br></br>
                    <h3>No Prior Niche Experience:</h3>
                    <p>Complicating matters, our team was tasked with developing a furniture website without prior niche experience. This necessitated extensive research and dedicated efforts from our developers to ensure the creation of a website that not only met but exceeded industry standards.</p><br></br>
                    <h4>Showcasing Unique Value: </h4>
                    <p>Beyond technical considerations, our focus extended to spotlighting Invis's unique selling proposition, emphasizing their dedication to space-saving furniture and personalized interior design services. The challenge was to translate this distinctive aspect into a compelling online presence that resonated with the target audience.</p>
                </div>


                <div className='invis-our-approach'>
                    <h1>Our Approach</h1>
                    <p>Invis Furniture, a leader in innovative design, sought a digital transformation to enhance user experience. Transitioning from Shopify to Medusa, we seamlessly integrated 3D and AR features for dynamic engagement, surpassing conventional limitations. Our "wow factor" click-and-drag function and 3D and AR integration transformed the shopping experience, allowing users to visualize furniture in their spaces.</p><br></br>

                    <p>Additionally, we introduced Zoho CRM and Sent Grid for efficient customer management and strategic email marketing, contributing to targeted sales. Focusing on core products - Bento Console Dining Table V3, Bento Bench, and X3 Coffee Dining Table - we created Animation Pages with 3D and AR elements, enhancing user understanding and streamlining the sales process.</p>

                    <img src={invis3} alt='invis4'></img>
                </div>


                <div className='invis-Advancements'>
                    <h1>Invis Furniture's Signature Digital Advancements</h1>
                    <h2>Immersive 3D Furniture:</h2>
                    <p>Lifelike 3D models offer a realistic digital exploration of Invis Furniture's innovative and space-efficient designs.</p><br></br>
                    <h3>AR Compatibility:</h3>
                    <p>Enjoy a personalized furniture shopping journey with Augmented Reality (AR) on mobile devices, allowing customers to virtually place and interact with furniture in their actual living spaces.</p><br></br>
                    <h4>Optimal Performance:</h4>
                    <p>Despite the visually rich experience, our platform ensures a swift and seamless browsing encounter, prioritizing efficiency for users exploring Invis Furniture's offerings.</p><br></br>
                    <h4>Integrated 3D & AR:</h4>
                    <p>Immerse yourself in the world of Invis Furniture through seamlessly embedded 3D and AR features, enhancing product presentation and elevating the entire digital shopping experience.</p>

                </div>


                <div className='invis-outcome'>
                    <h1>Outcome</h1>
                    <ul>
                        <li>Developed a website with superior interactive design and features, setting it apart from its competitors.</li><br></br>
                        <li>Successfully optimized the website's loading speed, ensuring a seamless user experience despite incorporating resource-intensive 3D and AR features.</li><br></br>
                        <li>Implemented a  chosen platform for email marketing, enhancing customer engagement and contributing to successful marketing campaigns.</li><br></br>
                        <li>Achieved successful integration of CRM software, streamlining customer relationship management and improving overall efficiency.</li><br></br>
                        <li>Replaced traditional platforms like Shopify with Medusa, embracing its dynamic potential and overcoming the constraints of conventional e-commerce solutions.</li>
                    </ul>
                </div>


                <div className='invis-result'>
                    <h1>Result</h1>
                    <p>The outcomes of our hard work became evident as our client reported increased sales through their redesigned website, notably enhanced with 3D and AR features compared to the previous version. Surpassing all client expectations, their satisfaction stands as the ultimate confirmation of our success.</p>
                </div>

            </div>

            <Footer />

        </div >
    );
}

export default Inviscasestudy;