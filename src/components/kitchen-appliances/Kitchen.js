import React from 'react';
import "./Kitchen.css";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import kitchenvideo from "../../assets/kitchen_appliance.mp4"
import kitchenbanner from "../../assets/kitchen-banner.png"
import kitchencard1 from "../../assets/kitchen_card1.png"
import kitchencard2 from "../../assets/kitchen_card2.png"
import kitchencard3 from "../../assets/kitchen_card3.png"
import kitchencard4 from "../../assets/kitchen_card4.png"
import kitchencard5 from "../../assets/kitchen_card5.png"

const Kitchen = () => {
    return (
        <div>
            <Navbar />

            <div>
                <div className='kitchen_section'>
                    <div className='kitchen_main_head'>
                        <h1>Revitalizing Kitchen Appliance Design with AR and 3D Advancements</h1>
                        <p>The fusion of Augmented Reality (AR) and 3D technology has become pivotal in the field of kitchen appliance selection. It not only offers unparalleled flexibility and creative possibilities but also proves invaluable for manufacturing teams and optimizing retail strategies. With Triard, our aim is to empower customers to discover the perfect kitchen appliances for their homes, harnessing the combined power of Augmented Reality and 3D. Our mission is to enhance their purchase confidence and expedite the sales process for businesses, resulting in a win-win scenario.</p>
                    </div>
                </div>

                <div className='kitchen_video'>
                    <video width={'84%'} height={'10%'} autoPlay playsInline muted loop ><source src={kitchenvideo} type='video/mp4'></source></video>
                    {/* <img src={kitchenimg}></img> */}
                </div>

                <div className='kitchen_info_section'>
                    <br></br>
                    <h4>AR and 3D: The Future of Kitchen Appliance Design</h4>

                    <div className='kitchen_banner'>
                        <img src={kitchenbanner} alt=''></img>
                    </div>


                    <div className='kitchen_sub_head'>
                        <h2>What Makes Triard the Ideal Choice for Designing Kitchen Appliances?</h2>
                        <p>In today's competitive market, staying ahead of the curve is essential. That's why Triard is the ultimate hub for 3D configuration and AR integration, offering kitchen appliance companies a range of benefits that set us apart</p>
                    </div>


                    <div className='kitchen_awaits_info_section'>
                        <div className='kitchen_info'>
                           <img src={kitchencard1} alt=''></img>
                           <h3>Innovative AR and 3D Integration</h3>
                           <p>Triard seamlessly integrates Augmented Reality (AR) and 3D technology into the kitchen appliance design process. This integration provides a dynamic, immersive experience, allowing you to visualize and customize appliances in your own kitchen.</p>
                        </div>

                        <div className='kitchen_info'>
                           <img src={kitchencard2} alt=''></img>
                           <h3>Enhanced Purchase Confidence</h3>
                           <p>Utilize Triard's AR and 3D capabilities to make well-informed decisions. By virtually placing appliances in your kitchen, you can be confident that your choices meet functional needs and design preferences, reducing costly.</p>
                        </div>

                        <div className='kitchen_info'>
                           <img src={kitchencard3} alt=''></img>
                           <h3>Streamlined Sales Process</h3>
                           <p> For businesses, Triard accelerates the sales cycle. It simplifies the decision-making process for customers, leading to quicker purchase decisions. This efficiency translates to shorter sales cycles and increased revenue.</p>
                        </div>

                        <div className='kitchen_info'>
                           <img src={kitchencard4} alt=''></img>
                           <h3>Collaboration Made Easy </h3>
                           <p> Triard facilitates collaboration among various stakeholders in the kitchen appliance design process. Designers, manufacturers, and retail teams can work together seamlessly within a unified 3D workflow.</p>
                        </div>
                        <div className='kitchen_info'>
                           <img src={kitchencard5} alt=''></img>
                           <h3>Future-Proof Your Kitchen </h3>
                           <p> By choosing Triard, you're embracing the future of kitchen appliance design. With evolving technologies like WebXR and digital twins, Triard ensures that your kitchen appliances are ready for the digital age.</p>
                        </div>
                        <br></br>

                    </div>


                </div>


            </div>


            <Footer />
        </div>
    );
};

export default Kitchen;
