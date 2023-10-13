import React from 'react';
import "./Furniture.css";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import furniturevideo from "../../assets/furniture_video1.png";
import furnigrid1 from "../../assets/furni_grid1.png";
import furnigrid2 from "../../assets/furni_grid2.png";
import furnigrid3 from "../../assets/furni_grid3.png";
import furnigrid4 from "../../assets/furni_grid4.png";
import furnigrid5 from "../../assets/furni_grid5.png";
import furnitureimg from "../../assets/furniture_page_img.png";
import furnivideo from "../../assets/furniture-page-video.mp4";

function Furniture() {
  return (
    <>
      <Navbar />

      <div className='furniture_top_text'>
        <h2>From Concept to Creation: How 3D Configurators Simplify Furniture Design</h2>
        <p>Discover the transformative capabilities that empower you to effortlessly create and distribute realistic 3D content and immersive AR encounters. Elevate your e-commerce landscape, amplify your digital marketing strategies, and beyond, while delivering exceptional user engagement and achieving remarkable sales growth.</p>
      </div>

      <div className='furniture_sub_text'>
        <h2>The Evolution of Furniture Design</h2>
        <p>Traditional furniture design is a lengthy and often arduous process. Designers would create sketches and 2D drawings, which would then be translated into prototypes. This method required numerous revisions, leading to longer lead times and increased costs. However, with the introduction of 3D configurators, the game has changed.</p>
      </div>

      <div className='furniture_video'>
                <video width={'70%'} height={'10%'} autoPlay playsInline muted loop ><source src={furnivideo} type='video/mp4'></source></video>
      </div>

      <div className='furniture_industry'>
        <br></br><br></br><br></br>
        <div className='furniture_industry_text'>
          <h2>
            How 3D Configurator is Transforming the Furniture Industry?
          </h2>
        </div>

        <div className='furniture_grid_section'>
          <div className='furniture_grid_sec1'>
            <img src={furnigrid1}></img>
            <h4>Streamlining the Design Process</h4>
            <p> One of the key advantages of 3D configurators in furniture design is the simplification of the entire process. Designers can now start with a basic concept and use the configurator to create 3D models in real time...</p>
          </div>
          <div className='furniture_grid_sec1'>
            <img src={furnigrid2}></img>
            <h4>Customization at Your Fingertips</h4>
            <p>Furniture is a highly personal choice, and consumers often look for pieces that reflect their unique tastes and preferences. 3D configurators empower customers to customize their furniture down to the smallest detail...</p>
          </div>
          <div className='furniture_grid_sec1'>
            <img src={furnigrid3}></img>
            <h4>Enhanced Visualization</h4>
            <p>3D configurators offer an immersive visualization experience. Users can rotate, zoom in, and inspect their furniture designs from every angle...</p>
          </div>
          <div className='furniture_grid_sec1'>
            <img src={furnigrid4}></img>
            <h4>Efficient Manufacturing</h4>
            <p>Once a design is finalized using a 3D configurator, the transition to manufacturing is seamless. The software generates precise specifications that can be sent directly to production facilities, reducing...</p>
          </div>
          <div className='furniture_grid_sec1'>
            <img src={furnigrid5}></img>
            <h4>Sustainability in Furniture Design</h4>
            <p> In an era where sustainability is a top concern, 3D configurators play a role in reducing waste. Since designs are highly customizable, there is less need for mass production...</p>
          </div>
        </div>
      </div>



      <div className='furniture_bottom_section'>
      <div className='furniture_sub_text'>
        <h2>AR Viewer for Furniture</h2>
        <p>View furniture in  your space !</p>
      </div>

        <div className='furniture2_img'>
          <img src={furnitureimg}></img>
        </div>

        {/* <div className='furniture_absolute'>
          <p><span>Triard</span> enhances your brand's
            shopping experiences with the
            magic of <span>augmented reality</span>.</p>
        </div> */}

        <div className='furniture_bottom_content'>
          <p>Triard's AR Viewer for Furniture takes Furniture shopping to the next level by integrating augmented reality technology.</p>
        </div>

        <br></br>

      </div>


      <div className='fur_bottom_sec'>
        <h3>Triard's 3D Configurator, Redefining Personalization</h3>
        <p>At Triard, we're committed to reshaping the furniture industry through our innovative 3D Configurator. With this powerful tool, we put the design process in your hands, allowing you to personalize every aspect of your furniture. From materials and colors to visualizing your creations in your own living spaces using augmented reality (AR), Triard's 3D Configurator empowers you to craft furniture that is uniquely yours. If you're ready to begin your furniture customization journey or have any questions, contact us.  Let's transform your living spaces into a personalized haven of style and comfort with Triard's 3D Configurator.</p>
      </div>

      <Footer />
    </>
  );
}

export default Furniture;