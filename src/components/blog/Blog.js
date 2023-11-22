import React,{useEffect} from 'react';
import "./Blog.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import blogbanner from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
// import blog3 from "../../assets/blog3.png";
import blog3 from "../../assets/blog3.png"
import blog4 from "../../assets/blog_3.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import blog7 from "../../assets/blog6.png";
import { useParams } from 'react-router';

function Blog() {

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

            <div className='blog_banner'>
                <img src={blogbanner} alt=''></img>
            </div>
            <div className='blog_heading'>
                <h2>Blog</h2>
                <h3>Stay updated on 3D and AR Technology with Team Triard. Discover the latest trends, news, valuable resources, and much more.</h3>
            </div>

            

            <div className='blog_content'>
                <div className='left_section'>
                    <div className='left_section_1'>
                        <div>
                            <img src={blog2} alt=''></img>
                            <h4>Post published September 17, 2023</h4>
                            <h2>Augmented Reality: 9 Transformative Use Cases That Redefine Reality</h2>
                            <h3> In an era where technology continually pushes the boundaries of human experience, Augmented Reality (AR) stands out as a beacon of innovation. What was once the stuff of science fiction is now a tangible force reshaping industries, enhancing experiences, and challenging the very definition of reality.....</h3>
                            <button><a href='/bloginner1'>Read More</a></button>
                        </div>
                        <div>
                            <img src={blog3} alt=''></img>
                            <h4>Post published September 20, 2023</h4>
                            <h2>The Power of 3D Rendering in Business</h2>
                            <h3> In today’s hyper-competitive business world, success hinges on a company's ability to innovate continually. The capacity to adapt to emerging technologies and leverage them for growth is often the defining factor that separates industry leaders from followers..... </h3>
                            <button><a href='/bloginner2'>Read More</a></button>
                        </div>


                    </div>
                     <div className='left_section_2'>
                     <div>
                            <img src={blog4} alt=''></img>
                            <h4>Post published October 21, 2023</h4>
                            <h2 className='blog_3'>The Benefits of Product Customization for eCommerce Businesses</h2>
                            <h3>In eCommerce, standing out from the crowd is a constant challenge. With thousands of online stores offering similar products, how can a business differentiate itself and create a lasting impression on customers? The answer lies in the art of product customization...... </h3>
                            <button className='blog_3_btn'><a href='/bloginner3'>Read More</a></button>
                        </div>
                        {/* <div>
                            <img src={blog5}></img>
                            <h4>Post published June 23, 2023</h4>
                            <h2>Meaning of Lorem Ipsum</h2>
                            <h3> Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder....</h3>
                            <button>Read More</button>
                        </div>
 */}
                    </div> 
                    {/* <div className='left_section_3'>
                        <div>
                            <img src={blog6}></img>
                            <h4>Post published June 23, 2023</h4>
                            <h2>Meaning of Lorem Ipsum</h2>
                            <h3> Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder....</h3>
                            <button>Read More</button>
                        </div>
                        <div>
                            <img src={blog7}></img>
                            <h4>Post published June 23, 2023</h4>
                            <h2>Meaning of Lorem Ipsum</h2>
                            <h3> Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder....</h3>
                            <button>Read More</button>
                        </div>

                    </div> */}
                </div>

                <div className='right_section'>
                    {/* <h2>Recent Posts</h2>
                    <h4>Meaning of Lorem Ipsum</h4>
                   <p>Lorem ipsum was purposefully </p>
                   <p>designed to have no meaning,</p>
                   <p>but appear like real text, making</p>
                   <p>it the perfect placeholder</p> */}
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