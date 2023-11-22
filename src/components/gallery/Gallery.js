// import React, { useState } from 'react';
// import Navbar from '../navbar/Navbar';
// import Footer from '../footer/Footer';
// import team from "../../assets/triard_team.png";
// import arjun from "../../assets/arjun.png";
// import ahishek from "../../assets/abhishek.png";
// import gitex1 from "../../assets/gitex1.png";
// import gitex2 from "../../assets/gitex2.png";

// import "./Gallery.css";

// function Gallery() {
//     const [currentImage, setCurrentImage] = useState(team);

//     const images = [gitex1, gitex2]; // Add more images as needed

//     const displayImage = (index) => {
//         setCurrentImage(images[index]);
//     };

//     return (
//         <div>
//             <Navbar />

//             <div className='gallery_top_section'>
//                 <div className='gallery_top_info'>
//                     <h2>A Glimpse into Triard</h2>
//                     <p>Reimagine the way you think and experience with Triard. We prioritize creativity and innovation. With our cutting-edge solutions, we strive to become a leading player in our industry. Our passion for technology is endless, and our dedication to delivering the best for our customers is unmatched. Find out more about our product.</p>
//                 </div>
//                 <div className='gallery_top_btn'>
//                     <button>Explore now</button>
//                 </div>
//             </div>

//             <div className='gallery_team'>
//                 <img src={team} alt="Triard Team" />
//             </div>

//             <div className='gallery_para'>
//                 <p>Staying at the leading edge of innovation is our focus. What makes us unique is our ability to provide tailored AR solutions that can meet the unique requirements of our clients. Our AR solutions can work across various devices and platforms, making it more versatile and appealing. We ensure that the process of integrating Triard into an existing e-commerce platform is smooth and seamless. Our team of experts provides excellent and reliable customer support and also updates Triard with all the latest features and enhancements. Staying adaptable, staying ahead in terms of technology and user experience, and offering personalized solutions are our promises to our clients.</p>
//             </div>

//             <div className='gallery_founders'>
//                 <div className='gallery_founders_info'>
//                     <h5>Check out what our founders have to say about Triard</h5>
//                     <p>At Triad, our founders are passionate visionaries who are determined to revolutionize the way businesses engage with their customers through augmented reality. Let's hear what they have to say about Triard’s launch.</p>
//                 </div>
//             </div>

//             <div className='profile_sec'>
//                 <div className="arjun">
//                     <img src={arjun} alt="Arjun.GR" />
//                 </div>
//                 <div className='profile_p'>
//                     <p>Our team has worked tirelessly to create a product that will shape the future of customer experiences. This technology has the power to bridge the gap between physical and digital realms, allowing businesses to create immersive and interactive engagements like never before. I am excited to witness the impact and opportunities our product will bring to businesses across various industries.</p>
//                     <h4>Arjun.GR</h4>
//                     <h5>Founder & COO</h5>
//                 </div>
//             </div>

//             <div className='profile_sec_abhi'>
//                 <div className='profile_p'>
//                     <p>Our team has worked tirelessly to create a product that will shape the future of customer experiences. This technology has the power to bridge the gap between physical and digital realms, allowing businesses to create immersive and interactive engagements like never before. I am excited to witness the impact and opportunities our product will bring to businesses across various industries.</p>
//                     <h4>Abhishek Raveendran</h4>
//                     <h5>Founder & COO</h5>
//                 </div>

//                 <div className="abhishek">
//                     <img src={ahishek} alt="Abhishek Raveendran" />
//                 </div>
//             </div>

//             <div className='dev_thoughts'>
//                 <div className='dev_thought_info'>
//                     <h5>Thoughts of Developer</h5>
//                     <p>“We expect that our AR solution will empower businesses to establish stronger connections with their target audiences. By enabling customers to visualize products in real-time, try on virtual items, or place furniture pieces in their own spaces, we believe businesses will see increased customer engagement, higher conversion rates, and a significant boost in brand loyalty. We envision a future where AR becomes a staple in the marketing strategies of businesses of all sizes.”</p>
//                 </div>
//             </div>

//             <div className='gallery_events'>
//                 <h4>Events</h4>
//             </div>

//             <div className='gallery_image_carousal'>
//                 <div className='gallery_carousal'>
//                     <img src={currentImage} alt={`Image ${images.indexOf(currentImage) + 1}`} />
//                 </div>
//                 <div className='gallery_carousal_btn'>
//                     <button onClick={() => displayImage(0)}>Display Image 1</button>
//                     <button onClick={() => displayImage(1)}>Display Image 2</button>
//                     <button onClick={() => displayImage(2)}>Display Image 3</button>
//                     {/* Add more buttons for additional images */}
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default Gallery;



import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import team from "../../assets/triard_team.png";
import arjun from "../../assets/arjun.png";
import ahishek from "../../assets/abhishek.png";
import gitex1 from "../../assets/gitex1.png";
import gitex2 from "../../assets/gitex2.png";
import gitex3 from "../../assets/gitex3.png";
import imagebottom from "../../assets/gallery_bottom.png";
import { useState, useEffect, useRef } from 'react';

import "./Gallery.css";

function Gallery() {
    const [slideIndex, setSlideIndex] = useState(1);
    const slidesRef = useRef([]);
    const dotsRef = useRef([]);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function plusSlides(n) {
        setSlideIndex(slideIndex + n);
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlides(n) {
        let i;
        const slides = slidesRef.current;
        const dots = dotsRef.current;
        if (!slides || !dots) {
            return; // Ensure that the refs are defined
        }
        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <div>
            <Navbar />

            <div className='gallery_top_section'>
                <div className='gallery_top_info'>
                    <h2>A Glimpse into Triard</h2>
                    <p>Reimagine the way you think and experience with Triard. We prioritize creativity and innovation. With our cutting-edge solutions, we strive to become a leading player in our industry. Our passion for technology is endless, and our dedication to delivering the best for our customers is unmatched. Find out more about our product.</p>
                </div>
                <div className='gallery_top_btn'>
                    <a href='/usecases'><button>Explore now</button></a>
                </div>
            </div>

            <div className='gallery_team'>
                <img src={team} alt="Triard Team" />
            </div>

            <div className='gallery_para'>
                <p>Staying at the leading edge of innovation is our focus. What makes us unique is our ability to provide tailored AR solutions that can meet the unique requirements of our clients. Our AR solutions can work across various devices and platforms, making it more versatile and appealing. We ensure that the process of integrating Triard into an existing e-commerce platform is smooth and seamless. Our team of experts provides excellent and reliable customer support and also updates Triard with all the latest features and enhancements. Staying adaptable, staying ahead in terms of technology and user experience, and offering personalized solutions are our promises to our clients.</p>
            </div>

            <div className='gallery_founders'>
                <div className='gallery_founders_info'>
                    <h5>Check out what our founders have to say about Triard</h5>
                    <p>At Triad, our founders are passionate visionaries who are determined to revolutionize the way businesses engage with their customers through augmented reality. Let's hear what they have to say about Triard’s launch.</p>
                </div>
            </div>

            <div className='profile_sec'>
                <div className="arjun">
                    <img src={arjun} alt="Arjun.GR" />
                </div>
                <div className='profile_p'>
                    <p>Our team has worked tirelessly to create a product that will shape the future of customer experiences. This technology has the power to bridge the gap between physical and digital realms, allowing businesses to create immersive and interactive engagements like never before. I am excited to witness the impact and opportunities our product will bring to businesses across various industries.</p>
                    <h4>Arjun.GR</h4>
                    <h5>Founder & COO</h5>
                </div>
            </div>

            <div className='profile_sec_abhi'>
                <div className='profile_p'>
                    <p>Our team has worked tirelessly to create a product that will shape the future of customer experiences. This technology has the power to bridge the gap between physical and digital realms, allowing businesses to create immersive and interactive engagements like never before. I am excited to witness the impact and opportunities our product will bring to businesses across various industries.</p>
                    <h4>Abhishek Raveendran</h4>
                    <h5>Founder & COO</h5>
                </div>

                <div className="abhishek">
                    <img src={ahishek} alt="Abhishek Raveendran" />
                </div>
            </div>

            <div className='dev_thoughts'>
                <div className='dev_thought_info'>
                    <h5>Thoughts of Developer</h5>
                    <p>“We expect that our AR solution will empower businesses to establish stronger connections with their target audiences. By enabling customers to visualize products in real-time, try on virtual items, or place furniture pieces in their own spaces, we believe businesses will see increased customer engagement, higher conversion rates, and a significant boost in brand loyalty. We envision a future where AR becomes a staple in the marketing strategies of businesses of all sizes.”</p>
                </div>
            </div>

            <div className='gallery_events'>
                <h4>Events</h4>
            </div>

            <div className='gallery_image_carousal'>
                <div className="slideshow-container">
                    <div className="mySlides fade" ref={(el) => (slidesRef.current[0] = el)}>
                        <img className='gitex1' src={gitex1} alt=''></img>
                    </div>

                    <div className="mySlides fade" ref={(el) => (slidesRef.current[1] = el)}>
                        <img className='gitex2' src={gitex2} alt=''></img>
                    </div>

                    <div className="mySlides fade" ref={(el) => (slidesRef.current[2] = el)}>
                        <img className='gitex3' src={gitex3} alt=''></img>
                    </div>


                    <a className="prev" onClick={() => plusSlides(-1)}>
                        ❮
                    </a>
                    <a className="next" onClick={() => plusSlides(1)}>
                        ❯
                    </a>

                    <div className='gallery_dots' >
                        <span className="dot" onClick={() => currentSlide(1)} ref={(el) => (dotsRef.current[0] = el)}></span>
                        <span className="dot" onClick={() => currentSlide(2)} ref={(el) => (dotsRef.current[1] = el)}></span>
                        <span className="dot" onClick={() => currentSlide(2)} ref={(el) => (dotsRef.current[2] = el)}></span>
                    </div>

                    <div className='gitex_title'>
                        <h4>Participation in GITEX Global 2023 to Present Triard</h4>
                    </div>

                </div>



                <div className='faq_content_gallery'>
                    <h1>FAQs</h1>

                    <details>
                        <summary> Q: What is Triard?</summary><hr></hr>
                        <p>Triard is a technology company that provides innovative augmented reality solutions to businesses. Our solutions bridge the gap between the physical and digital worlds, enabling businesses to provide interactive and engaging customer experiences.</p>
                    </details>

                    <details>
                        <summary> Q: What types of businesses can benefit from Triard?</summary><hr></hr>
                        <p>Triard can be used by businesses in various industries, including retail, automotive, sports, fashion, education, and more. Any business that aims to improve customer engagement and enhance the customer experience can benefit from our AR solutions.</p>
                    </details>

                    <details>
                        <summary>Q: What are the benefits of using Triard?</summary><hr></hr>
                        <p>Our AR solutions offer numerous benefits, such as higher customer engagement, increased customer satisfaction and loyalty, improved brand awareness, and higher conversion rates. By providing a personalized and interactive experience to customers, our solutions improve the overall customer experience and create a lasting impression.</p>
                    </details>

                    <details>
                        <summary>Q: Can Triard integrate with my existing platform?</summary><hr></hr>
                        <p>Yes, our AR solutions can be integrated easily with your existing platforms and systems, including web applications, e-commerce websites, and mobile apps. This ensures that your customers enjoy a seamless and consistent experience across all platforms.</p>
                    </details>

                    <details>
                        <summary>Q: What are the costs associated with using Triard?</summary><hr></hr>
                        <p>The cost of using our solutions varies depending on your specific requirements. As a technology company, we offer cost-effective solutions that ensure a high return on investment. Our team will work with you to provide a customized solution that fits your budget.</p>
                    </details>

                </div>


                <div className='gallery_btm_sec'>
                    <div className='gallery_bottom'>
                        <img src={imagebottom} alt=''></img>
                    </div>
                    <div className='g_bottom_text'>
                        <h4>If you have any other questions or requests, please feel free to contact us. We are always happy to assist you in any way we can.</h4>
                        <br></br>
                        <a href='/contact-us'><button>Request for a Demo</button></a>
                    </div>

                </div>


            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
