import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import caseimg from "../../assets/case-study-banner.png";
import case2img from "../../assets/case2img.png"
import "./Casestudy.css";

function Inviscasestudy() {
    return (
        <div>

            <Navbar />

            <div>

                <div className='case-study-wrapper'>
                    <h3>Case Study</h3>
                </div>

                <div className='case-main-img'>
                    <img src={caseimg} alt='case study'></img>
                </div>

                <div className='case-study--info'>
                    <div className='case-content'>
                        <h2>Company Overview</h2>
                        <p>Invis Furniture is a Singapore-based company that specializes in providing space-efficient furniture products. The company was founded by a mechanical engineer who was inspired by the concept of space-saving furniture. Drawing from his engineering background, he created a motto of "quality over quantity" and built a small team to provide sincere and quality customer service. The company emphasizes the importance of understanding and addressing customer needs, which has contributed to its growth and success.</p>
                    </div>

                    <div className='case-content'>
                        <h2>Case Summary</h2>
                        <p>The e-commerce furniture industry faces unique challenges, particularly in the area of competition, customer experience and visibility. Online furniture shopping can lack the personal touch of physical showrooms, so e-commerce furniture websites need to create engaging and interactive customer experiences to simulate the in-store shopping experience. Invis Furniture encountered an issue with their e-commerce website characterized by a simplistic design and  to differentiate itself in a competitive market. The company aimed to enhance both the design and functionality of the website to attract a larger customer base and increase sales.  The solution involved reworking the website from scratch, incorporating trending features, and ensuring a seamless user experience.</p>
                    </div>
                </div>

                <div className='case2img'>
                    <img src={case2img} alt='case study img'></img>
                </div>

                <div className='case-study-info2'>
                   <div className='case-content'>
                        <h2>Challenges</h2>
                        <p>Invis Furniture sought a website that could stand out in a competitive landscape, offering a distinct edge over competitors. The challenge at hand involved optimizing the loading speed, especially given the incorporation of resource-intensive 3D and AR features that had the potential to slow down the website. Ensuring a flawless user experience was paramount, demanding a visually appealing design coupled with easy navigation. <br></br><br></br>
                        Adding to the complexity, our team faced the unique task of crafting a furniture website without prior experience in the niche. This meant extensive research and dedicated efforts from our developers to guarantee a website that not only met but exceeded industry standards. Beyond technicalities, our focus extended to showcasing Invis's unique selling proposition. This highlighted their commitment to space-saving furniture and personalised interior design services. Our goal was to translate this distinctive aspect into a captivating online presence that would resonate with the target audience.
                        </p>
                    </div>
                    
                    <div className='case-content'>
                        <h2>Our Approach</h2>
                        <p>Invis Furniture is a company that specializes in innovative furniture design. They are committed to creating furniture that is not only functional but also aesthetically pleasing. Invis Furniture has been the subject of several studies, including one that evaluated the quality of their innovative furniture joints compared to the most popular ones.<br></br><br></br>
                        In our quest for digital transformation, we skillfully navigate the online landscape to craft an exceptional user experience for our client, Invis Furniture. Initially, their website operated on Shopify.However, recognizing the need for a more dynamic approach, we recommended the transition to Medusa, encouraging a wholehearted embrace of its dynamic potential. This involved seamlessly integrating front-end and back-end excellence, surpassing the limitations of conventional platforms like Shopify.<br></br><br></br>
                        To inject an interactive element, we implemented a "wow factor" in their website – a click and drag function that elevated user engagement. Setting them apart from competitors, we integrated our product, Triard, a tool facilitating 3D and AR visualization on the website. This turned out to be a significant advantage, allowing users to experience furniture shopping as if they were furnishing their own homes. The fusion of AR and 3D transformed the shopping experience, enabling customers to visualize how the furniture fits into their spaces.<br></br><br></br>
                        In addition to these innovations, we provided various add-ons and seamlessly integrated Zoho CRM into their website. Understanding the importance of reaching a broader audience, especially for a furniture-centric platform, we introduced email marketing using the Sent Grid platform. This strategic move significantly contributed to achieving their targeted sales.<br></br><br></br>
                        Focusing on three core products – Bento Console Dining Table V3, Bento Bench, and X3 Coffee Dining Table – we created separate Animation Pages for each. These pages were designed with real-life scenarios, featuring interactive and animated elements while providing informative content. Acting as compelling "selling" pages, these animations allow customers to understand the benefits of the products and visualize them in their homes as they scroll through. This strategic approach has not only enhanced user experience but also streamlined the sales process.
                        </p>
                    </div>

                    <div className='case-content'>
                        <h2>Outcome</h2>
                        <p>
                            <ul>
                                <li>Developed a website with superior interactive design and features, setting it apart from its competitors.</li>
                                <li>Successfully optimized the website's loading speed, ensuring a seamless user experience despite incorporating resource-intensive 3D and AR features.</li>
                                <li>Implemented a  chosen platform for email marketing, enhancing customer engagement and contributing to successful marketing campaigns.</li>
                                <li>Achieved successful integration of CRM software, streamlining customer relationship management and improving overall efficiency. </li>
                                <li> Replaced traditional platforms like Shopify with Medusa, embracing its dynamic potential and overcoming the constraints of conventional e-commerce solutions.</li>

                            </ul>
                        </p>
                        <br></br><br></br>
                        <p>The culmination of these efforts resulted in a website that not only outshone its competitors in design and functionality but also achieved improved loading times, efficient customer relationship management, successful email marketing, and a strategic shift to a more dynamic platform. Our approach led to a well-rounded success story for our client.</p>
                    </div>

                    <div className='case-content'>
                        <h2>Result</h2>
                        <p>The fruits of our labour were evident as our client reported better sales through their new website compared to the previous one. Meeting and surpassing all of our client's requirements, their satisfaction is the ultimate testament to our success. Happy clients, happy us!</p>
                    </div>




                </div>


                <div className='casestudy-bottom-section'>
                <div className='case-bottom--result'>
                    <div className='case--result'>
                        <h1>Client</h1>
                        <h4>Invis Furniture</h4>
                    </div>

                    <div className='case--result'>
                        <h1>URL</h1>
                        <h4><a href='https://www.invis.com.sg/' target="_blank">https://www.invis.com.sg/</a></h4>
                    </div>

                    <div className='case--result'>
                        <h1>Website Focus</h1>
                        <h4>Sales</h4>
                    </div>

                    <div className='case--result'>
                        <h1>Service Provided</h1>
                        <h4>Website Development</h4>
                    </div>

                    <div className='case--result'>
                        <h1>Business Type</h1>
                        <h4>Business to Consumer</h4>
                    </div>

                    <div className='case--result'>
                        <h1>Client Industry</h1>
                        <h4>Furniture Industry</h4>
                    </div>

                </div>
                </div>


            </div>




            <Footer />

        </div>
    );
}

export default Inviscasestudy;