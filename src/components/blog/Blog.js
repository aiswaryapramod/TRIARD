import React, { useEffect } from 'react';
import "./Blog.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import blogbanner from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
// import blog3 from "../../assets/blog3.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog_3.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import blog7 from "../../assets/blog7_mainpage.webp";
import blog8 from "../../assets/blog8_main.webp";

import { useParams } from 'react-router';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import BlogButton from './BlogButton';

function Blog() {

    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        });
    }, [slug]);


    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog | Triard</title>
                <meta name="description" content="Stay ahead in 3D and AR technology with Team Triard. Explore our blog for the latest trends, news, and valuable insights."></meta>
            </Helmet>

            <Navbar />

            <div className='blog_banner'>
                <img src={blogbanner} alt='blogbanner'></img>
            </div>
            <div className='blog_heading'>
                <h2>Blog</h2>
                <h3>Stay updated on 3D and AR Technology with Team Triard. Discover the latest trends, news, valuable resources, and much more.</h3>
            </div>



            <div className='blog_content'>
                <div className='left_section'>
                    <div className='left_section_1'>
                        <div>
                            <img src={blog2} alt='Augmented Reality'></img>
                            <h4>Post published September 17, 2023</h4>
                            <h2><a href='/blog/augmented-reality-9-transformative-use-cases-that-redefine-reality'>Augmented Reality: 9 Transformative Use Cases That Redefine Reality</a></h2>
                            <h3> In an era where technology continually pushes the boundaries of human experience, Augmented Reality (AR) stands out as a beacon of innovation. What was once the stuff of science fiction is now a tangible force reshaping industries, enhancing experiences, and challenging the very definition of reality.....</h3>
                            <BlogButton url='/blog/augmented-reality-9-transformative-use-cases-that-redefine-reality' />
                        </div>
                        <div>
                            <img src={blog3} alt='The Power of 3D'></img>
                            <h4>Post published September 20, 2023</h4>
                            <h2><a href='/blog/the-power-of-3d-rendering-in-business'>The Power of 3D Rendering in Business</a></h2>
                            <h3> In today’s hyper-competitive business world, success hinges on a company's ability to innovate continually. The capacity to adapt to emerging technologies and leverage them for growth is often the defining factor that separates industry leaders from followers..... </h3>
                            <BlogButton url='/blog/the-power-of-3d-rendering-in-business' />
                        </div>


                    </div>



                    <div className='left_section_2'>
                        <div>
                            <img src={blog4} alt='Product Customization'></img>
                            <h4>Post published October 21, 2023</h4>
                            <h2 className='blog_3'><a href='/blog/the-benefits-of-product-customization-for-ecommerce-businesses'>The Benefits of Product Customization for eCommerce Businesses</a></h2>
                            <h3>In eCommerce, standing out from the crowd is a constant challenge. With thousands of online stores offering similar products, how can a business differentiate itself and create a lasting impression on customers? The answer lies in the art of product customization...... </h3>
                            <BlogButton url='/blog/the-benefits-of-product-customization-for-ecommerce-businesses' />
                        </div>
                        <div>
                            <img src={blog5} alt='GITEX'></img>
                            <h4>Post published June 23, 2023</h4>
                            <h3 className='gitex-h3'><a href='/blog/triards-debut-at-gitex-2023-a-technological-Innovation-by-digitalbuddha'>Triard's Debut at GITEX 2023: A Technological Innovation by Digitalbuddha</a></h3>
                            <h3>In 2023, the world experienced a significant global tech event, the Gulf Information Technology Exhibition (GITEX GLOBAL 2023), held at the Dubai World Trade Centre from October 16th to 20th, which emerged as an epicenter of innovation and a testament to the transformative power of technology.....</h3>
                            <BlogButton url='/blog/triards-debut-at-gitex-2023-a-technological-Innovation-by-digitalbuddha' />
                        </div>

                    </div>


                    <div className='left_section_3'>
                        <div>
                            <img src={blog6} alt='Huddle'></img>
                            <h4>Post published December 20, 2023</h4>
                            <h2 className='blog_3'><a href='/blog/triards-introduction-digitalbuddhas-revolutionary-showcase-at-huddle-global-2023'>Triard's Introduction: Digitalbuddha's Revolutionary Showcase at Huddle Global 2023</a></h2>
                            <h3>In the vibrant coastal city of Trivandrum, Kerala, innovation enthusiasts, tech visionaries, and entrepreneurial minds gathered for India's largest beach startup festival – Huddle Global 2023....</h3>
                            <BlogButton url='/blog/triards-introduction-digitalbuddhas-revolutionary-showcase-at-huddle-global-2023' />
                        </div>
                        <div>
                            <img src={blog7} alt='blog7'></img>
                            <h4>Post published January 5, 2024</h4>
                            <h3 className='blog7-h3'><a href='/blog/how-3d-configurators-simplify-furniture-design'>From Concept to Creation: How 3D Configurators Simplify Furniture Design</a></h3>
                            <h3>Amongst the rapid changes of today's world, our approach to furniture shopping and the processes of it’s design and manufacturing have undergone significant shifts.Thanks to advancements in technology, particularly 3D configurators....</h3>
                            <BlogButton url='/blog/how-3d-configurators-simplify-furniture-design' />
                        </div>

                    </div>

                    <div className='left_section_3'>
                        <div>
                            <img src={blog8} alt='impact of AR'></img>
                            <h4>Post published january 10, 2023</h4>
                            <h2 className='blog_3'><Link to='/blog/the-impact-of-ar-on-industries-current-trends-and-future-prospects'>The Impact of AR on Industries: Current Trends and Future Prospects</Link></h2>
                            <h3>In recent years, Augmented Reality (AR) has gained significant attention and adoption in various industries. With the development of advanced technologies and the growing demand for immersive experiences, AR has become a game-changer for businesses.</h3>
                            <BlogButton url='/blog/the-impact-of-ar-on-industries-current-trends-and-future-prospects' />
                        </div>
                        {/* <div>
                            <img src={blog7} alt='blog7'></img>
                            <h4>Post published January 5, 2024</h4>
                            <h3 className='blog7-h3'><a href='/how-3d-configurators-simplify- furniture-design'>From Concept to Creation: How 3D Configurators Simplify Furniture Design</a></h3>
                            <h3>Amongst the rapid changes of today's world, our approach to furniture shopping and the processes of it’s design and manufacturing have undergone significant shifts.Thanks to advancements in technology, particularly 3D configurators....</h3>
                            <button className='blog_3_btn'><a href='/how-3d-configurators-simplify- furniture-design'>Read More</a></button>
                        </div> */}

                    </div>



                </div>

                <div className='right_section'>
                    <h1>Categories</h1>
                    <ul>
                        <li>AR Technology</li>
                        <li>ARZ Token</li>
                        <li>Blog post</li>
                        <li>MR (Mixed Reality)</li>
                        <li>NFT Marketplace</li>
                        <li>Other immersive technologies</li>
                        <li>Partnerships</li>
                        <li>Uncategorized</li>
                        <li>VR (Virtual Reality)</li>
                        <li>Weekly update</li>
                        <li>XR (Extended Reality)</li>
                    </ul>
                </div>

            </div>

            <Footer />

        </div>
    );
}

export default Blog;