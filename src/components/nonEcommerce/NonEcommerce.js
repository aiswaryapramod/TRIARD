import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import nonecommerce1 from "../../assets/non-ecommerce1.webp";
import nonecommerce2 from "../../assets/non-ecommerce2.png";
import nonecommerce3 from "../../assets/non-ecommerce3.png";
import nonecommerce4 from "../../assets/non-ecommerce4.png";
import ecommercecard1 from "../../assets/nonecommerce_card1.png";
import ecommercecard2 from "../../assets/nonecommerce_card2.png";
import ecommercecard3 from "../../assets/nonecommerce_card3.png";
import nonecommerceedu from "../../assets/non-eccom-eductn.png";
import nonecommerceicon1 from "../../assets/nonecommerce_icon1.png";
import nonecommerceicon2 from "../../assets/nonecommerce_icon2.png";
import nonecommerceicon3 from "../../assets/nonecommerce_icon3.png";
import nonecommerceicon4 from "../../assets/nonecommerce_icon4.png";
import nonecommercebottom from "../../assets/nonecommerce_bottom.png";
import "./NonEcommerce.css";

function NonEcommerce() {
  return (
    <>
      <Navbar />
      <div className='non-ecommerce-head'>
        <h1>Triard's 3D and AR Workflow</h1>
        <h3>Revolutionizing Every Business Department</h3>
        <p>Welcome to Triard, where we harness the transformative power of 3D and AR technologies to enhance the workflows of various departments. Explore how our innovative solutions redefine Engineering and Development, Product and Industrial Design, Marketing, Web, and Advertising, as well as Customer Support and Maintenance.</p>
      </div>

      <div className='eng_develop'>
        <h2>Engineering and Development</h2>
      </div>

      <div className='adv-feat'>
        <div className='adv-feat-content'>
          <div className='adv'>
            <h4>ADVANTAGES</h4>
            <ul>
              <li>Enhanced CAD Visualization: Elevate CAD visualization with real-time 3D rendering, offering a comprehensive understanding of complex designs.</li>
              <li>Interactive Functionality: Communicate functionality effectively using interactions, animations, and hotspots, simplifying complex ideas for team members.</li>
              <li>Efficient Feedback Loops: Share extensive designs as a link, expediting the feedback and approval process during the concept stage.</li>
              <li>Unified Design Repository: Gather designs from various software onto a centralized platform, ensuring a single source of truth for all team members</li>
            </ul>
          </div>
          <div className='feat'>
            <h4>FEATURES</h4>
            <ul>
              <li>Material and Lighting Presets: Access presets for PBR materials and lighting, streamlining the design process.</li>
              <li>Rapid 360° Rendering: Achieve instant rendering times for 360° views regardless of CPU capabilities, ensuring efficient project evaluation.</li>
              <li>Streamlined Collaboration: Share the complete project effortlessly with a single link, facilitating instant synchronization of changes across the team.</li>
              <li>Interactivity and Animation: Incorporate interactive and animated components into your designs, enhancing comprehension and engagement.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className='non-ecommerce-img1'>
        <img src={nonecommerce1} alt=''></img>
      </div>

      <div className='eng_develop'>
        <h2>Product and Industrial Design</h2>
      </div>


      <div className='adv-feat'>
        <div className='adv-feat-content'>
          <div className='adv'>
            <h4>ADVANTAGES</h4>
            <ul>
              <li>Seamless Workflow: Transition effortlessly from prototyping to final design and online publishing, consolidating the entire process into a cohesive workflow.</li>
              <li>AR-Powered Visualization: Achieve final visualizations without the need for physical samples, thanks to Augmented Reality (AR), saving time and resources.</li>
              <li>Enhanced Concept Development: Improve decision-making during the concept development stage by gaining a clearer understanding of design concepts.</li>
              <li>Material Customization: Easily incorporate custom materials or swiftly prototype various material options, fostering innovation.</li>
            </ul>
          </div>
          <div className='feat'>
            <h4>FEATURES</h4>
            <ul>
              <li>Interactive User Interfaces: Access additional information and explore design variations through interactive user interfaces, enhancing engagement.</li>
              <li>Versatile File Compatibility: Import over 60 file formats, ensuring compatibility with a wide range of design resources.</li>
              <li>Augmented Reality Prototyping: Preview prototypes in Augmented Reality, allowing for immersive and insightful evaluations.</li>
              <li>Custom Materials Repository: Create a tailored materials library and design system, streamlining the design process.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className='non-ecommerce-img1'>
        <img src={nonecommerce2} alt=''></img>
      </div>

      <div className='eng_develop'>
        <h2>Marketing, Web, and Advertising</h2>
      </div>


      <div className='adv-feat'>
        <div className='adv-feat-content'>
          <div className='adv'>
            <h4>ADVANTAGES</h4>
            <ul>
              <li>Rapid Market Launch: Accelerate your market entry without relying on external resources or physical samples, reducing time-to-market.</li>
              <li>Versatile Content Creation: Harness the power of 3D and AR for content creation across campaigns, presentations, retail planning, and Augmented Reality (AR) experiences, amplifying engagement. </li>
              <li>Efficient Asset Management: Streamline asset hand-offs between vendors or departments, ensuring smooth collaboration and project continuity.</li>
              <li> Photorealistic Rendering: Generate high-resolution product renders with photorealistic precision, elevating visual quality.</li>
            </ul>
          </div>
          <div className='feat'>
            <h4>FEATURES</h4>
            <ul>
              <li>2D Image Integration: Seamlessly import 2D images directly onto 3D models to incorporate branding and product information creatively.</li>
              <li>Resourceful Library: Access a comprehensive library of models, materials, and scenes to fuel your creative endeavors.</li>
              <li>Effortless Sharing: Share your projects effortlessly with one-click links, manage access rights, and facilitate private sharing for streamlined collaboration.</li>
              <li>Seamless Integration: Embed your creations online into any web builder or presentation tool, such as Miro, and synchronize changes instantly.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className='non-ecommerce-img1'>
        <img src={nonecommerce3} alt=''></img>
      </div>

      <div className='eng_develop'>
        <h2>Customer Support, Repair & Maintenance</h2>
      </div>


      <div className='adv-feat'>
        <div className='adv-feat-content'>
          <div className='adv'>
            <h4>ADVANTAGES</h4>
            <ul>
              <li>Efficient Onboarding: Streamline the onboarding process for internal teams, ensuring a smooth transition and accelerated productivity.</li>
              <li>Enhanced Customer Communication: Elevate customer communication with interactive, step-by-step instructions in a single scene, fostering clarity and satisfaction.</li>
              <li>Manuals and Videos Redefined: Replace cumbersome manuals, videos, or 2D drawings with a single link, simplifying access to critical information.</li>
              <li>Customization at Speed: Quickly customize information for specific components or clients, tailoring your support for individual needs.</li>
            </ul>
          </div>
          <div className='feat'>
            <h4>FEATURES</h4>
            <ul>
              <li>Flexible Floating UIs: Utilize floating User Interfaces (UIs) to display a range of information types, adapting to diverse support scenarios. </li>
              <li>Precise Camera Control: Take control of the camera switch function to spotlight specific parts, enhancing visual guidance.</li>
              <li>Effortless Sharing: Share valuable support resources with ease through one-click links, suitable for email, chat, or online presentations.</li>
              <li>AR Empowerment: Equip customers with Augmented Reality (AR) capabilities to try disputed items before actual product distribution, resolving disputes swiftly and satisfactorily.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='non-ecommerce-img1'>
        <img src={nonecommerce4} alt=''></img>
      </div>

      <div className='non-ecommerce-secnd-sub'>
        <h2>3D and Augmented Reality's Impact on Manufacturing Sector</h2>
        <p>In the manufacturing sector, AR and 3D technologies are pivotal, reshaping processes from training to maintenance, design, and sales. Let's explore how various manufacturing sectors are leveraging the advantages of Augmented Reality</p>
      </div>


      <div className='non-ecommerce-cards-section'>
        <div className='non-ecommerce-crd'>
          <img src={ecommercecard1} alt=''></img>
          <h3>Automotive Manufacturing</h3>
          <p>3D modeling and AR revolutionize auto manufacturing, optimizing design, training, quality control, and more, resulting in cost savings and better products for all.</p>
        </div>
        <div className='non-ecommerce-crd'>
          <img src={ecommercecard2} alt=''></img>
          <h3>Aerospace & Defense Manufacturing</h3>
          <p>In aerospace and defense manufacturing, AR and 3D technologies enhance precision, safety, and overall efficiency. They lead to cost savings, superior quality, and increased capabilities, making them invaluable to the industry.</p>
        </div>
        <div className='non-ecommerce-crd'>
          <img src={ecommercecard3} alt=''></img>
          <h3>Electronics Manufacturing</h3>
          <p>3D modeling and AR transform electronics manufacturing, enhancing design, quality, training, and efficiency. The result: cost savings, better products, and adaptability to evolving demands.</p>
        </div>
      </div>


      <div className='ecommerce-impact'>
        <h2>The Impact of 3D and Augmented Reality in Education</h2>
        <p>3D and Augmented Reality in education revolutionize the learning experience by immersing students in realistic and interactive environments, making the process highly engaging and effective. These applications not only explain and demonstrate concepts through multimedia, computer-based simulations, animations, and statistical software but also enhance the educational journey. Augmented reality and 3D technologies effectively complement traditional teaching methods by fostering critical thinking and significantly elevating student engagement and perception levels.</p>
      </div>

      <div className='non-ecom-eductn'>
        <img src={nonecommerceedu} alt=''></img>
      </div>

      <div className='ecommerce-impact'>
        <h2>Why Triard for Advanced Education?</h2>
        <p>Triard is revolutionizing education through the seamless integration of 3D and augmented reality (AR) technologies. Our commitment to innovation benefits both students and educators. By harmoniously blending 3D and AR into the educational landscape, we craft immersive learning experiences that ignite students creativity and enhance comprehension. Our solutions equip educators with valuable tools to create engaging and interactive teaching methods.</p>
      </div>

      <div className='non-ecommerce-icon-section'>
        <div className='non-ecommerce-icon'>
          <div className='ecomm-icon-img'>
            <img src={nonecommerceicon1} alt=''></img>
          </div>
          <p>Immersive Learning <br></br> Experiences</p>
        </div>

        <div className='non-ecommerce-icon'>
          <div className='ecomm-icon-img'>
            <img src={nonecommerceicon2} alt=''></img>
          </div>
          <p>Visualizing Complex <br></br> Concepts</p>
        </div>

        <div className='non-ecommerce-icon'>
          <div className='ecomm-icon-img'>
            <img src={nonecommerceicon3} alt=''></img>
          </div>
          <p>Interactive <br></br> Geometry</p>
        </div>

        <div className='non-ecommerce-icon4 '>
          <div className='ecomm-icon-img'>
            <img src={nonecommerceicon4} alt=''></img>
          </div>
          <p>Enhanced <br></br> Presentations</p>
        </div>
      </div>


      <div className='ecommerce-impact'>
        <h2>Elevate, Innovate, Transcend with Triard's 3D and AR Revolution</h2>
        <p>Triard's 3D and AR solutions are not just tools; they are the catalysts for transformation across every department of your organization. From Engineering and Development to Product and Industrial Design, Marketing, Web, and Advertising, to Customer Support, Repair & Maintenance, our innovative offerings have redefined what's possible. In a world where speed, creativity, and efficiency matter more than ever, Triard empowers you to stay ahead. We've brought the future to your fingertips, enhancing collaboration, simplifying complex processes, and elevating your engagement with customers and teams alike.</p>
      </div>

      <div className='non-ecommerce-bottom'>
        <img src={nonecommercebottom} alt=''></img>
        <div className='ecommerce-bottom-text'>
          <h4>Contact us today to start your own transformation and experience the Triard difference.</h4>
          <h2>Together, we'll continue redefining what's possible in your industry and beyond.</h2>
          <button><a href='/contact-us'>Contact us</a></button>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default NonEcommerce;