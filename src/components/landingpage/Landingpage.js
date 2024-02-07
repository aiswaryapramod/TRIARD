import React, { useRef, useState } from 'react';
import formimg from "../../assets/form-img.png";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import lpimg1 from "../../assets/landingimg1.png";
import lpimg2 from "../../assets/landingimg2.png";
import lpimg3 from "../../assets/landingimg3.png";
import lpimg4 from "../../assets/landingimg4.png";
import lpimg5 from "../../assets/landingimg5.png";
import lpimg6 from "../../assets/landingimg6.png";
import lpimg7 from "../../assets/landingimg7.png";
import lpimg8 from "../../assets/landingimg8.png";
import lpimg9 from "../../assets/landingimg9.png";
import lpimg10 from "../../assets/landingimg10.png";
import lpimg11 from "../../assets/landingimg11.png";
import lpimg12 from "../../assets/landingimg12.png";
import { useEffect } from 'react';
import gsap from 'gsap';
import { Helmet } from "react-helmet";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import poster from "../../assets/poster.gif";
import poster from "../../assets/loader.gif";



import "./Landingpage.css";

gsap.registerPlugin(ScrollTrigger);

function Landingpage() {

  const formRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const containerhome1 = useRef(null);


  // const containerlp = useRef(null);


  const notify = (e) => {
    e.preventDefault();

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formRef.current.email.value)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Phone number validation using regex
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number
    if (!phoneRegex.test(formRef.current.number.value)) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    // If both email and phone are valid, proceed with sending the form
    toast.promise(
      emailjs.sendForm(
        "service_fffs5xo",
        "template_icy73ot",
        formRef.current,
        "WtWnzI12f9avbq-rK"
      ), {
      pending: "Processing",
      success: "Send Successfully",
      error: "Error"
    }).then(() => formRef.current && formRef.current.reset());
  };


  // gsap //

  // useEffect(() => {
  //   gsap.fromTo(containerlp.current, { scale: 0.5 }, {
  //     scrollTrigger: {
  //       trigger: containerlp.current,
  //       immediateRender: false,
  //       scrub: true,
  //       start: 80,
  //       smooth: 2,
  //       start: 'top 110%'
  //     },
  //     scale: 1
  //   });
  // }, []);




  const viewerRefhome = useRef(null);

  useEffect(() => {
    showCarModel();
  }, []);

  function applyColor(viewer, materialName, color) {
    const model = viewer.current.model;
    console.log(model);
    const material = model.materials.find(mat => mat.name === materialName);

    if (material) {
      material.pbrMetallicRoughness.setBaseColorFactor(color);
    }
  }



  function showCarModel() {
    viewerRefhome.current.src = '/model/sofa_new.glb';
  }





  return (
    <div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Triard | 3D Product Configurator & AR for E-commerce</title>
        <meta name="description" content="Get a competitive edge with Triard's cutting-edge 3D product configurator and AR solutions. Boost sales and conversions effortlessly."></meta>
      </Helmet>



      <Navbar />

      <div className='landing-page-maxwidth'>
        <div className='landing-page-section'>
          <div className='landing-page-info'>
            <div className='lp-info'>
              <h1>Revolutionize Your Business with
                3D Configurator & AR
              </h1>
              <p>Elevate Customer Experience, Reduce Returns, and Boost Sales</p>
            </div>
            <div className='lp-img'>
              {/* <img src={formimg}></img> */}



              <div className='content_wrapper1-lp' ref={containerhome1}>


                <div>
                  <model-viewer
                    ref={viewerRefhome}
                    disable-zoom
                    id="viewerlandingpage"
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    class="custom-camera-controls"
                    disable-tap
                    poster={poster}
                    min-camera-orbit="auto 32deg auto"
                    max-camera-orbit="auto 91deg auto" // camera-orbit="0deg 90deg 10deg"


                  >
                    <div slot="poster" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={poster} alt="Poster" style={{ width: '50px', height: '50px' }} />
                    </div>

                  </model-viewer>

                  <div className="controls_landingpage">
                    <button className='btn_r_landingpage' onClick={() => applyColor(viewerRefhome, 'Material.001', '#1b4d3e')}></button>
                    <button className='btn_g_landingpage' onClick={() => applyColor(viewerRefhome, 'Material.001', '#780000')}></button>
                    <button className='btn_b_landingpage' onClick={() => applyColor(viewerRefhome, 'Material.001', '#a5be00')}></button>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* CONTACT FORM */}

          <div className='landing-page-form'>
            <div className='lp-form-wrapper'>
              <form className="landingpage-form" method="POST" ref={formRef} onSubmit={(e) => notify(e)}>

                <div className="landingpage-input-container ic1">
                  <input id="name" name="name" className="landingpage-input" type="text" placeholder="Name" required />
                  <div className="landingpage-cut"></div>
                  <label for="firstname" className="placeholder">Name</label>
                </div>

                <div className="landingpage-input-container ic2">
                  {emailError && <p className="error-message" style={{ color: 'red' }}>Please enter a valid email address</p>}
                  <input id="email" name="email" className="landingpage-input" type="text" placeholder="Email" required />
                  <div className="landingpage-cut cut-short"></div>
                  <label for="email" className="placeholder">Email</label>
                </div>

                <div className="landingpage-input-container ic2">
                  {phoneError && <p className="error-message" style={{ color: 'red' }}>Please enter a valid phone number</p>}
                  <input id="phone" type="text" pattern="[0-9]*" name='number' className="landingpage-input" placeholder="Phone" required />
                  <div className="landingpage-cut cut-short"></div>
                  <label for="number" className="placeholder">Phone</label>
                </div>

                <button type="text" className="lp-submit">Request a demo</button>
                <ToastContainer bodyStyle={{ backgroundColor: "#fff" }} />

              </form>
            </div>
          </div>

          {/* FORM END */}


        </div>






        <div className='landingpage-advantage'>
          <div className='lp-advantage-head'>
            <h1>Advantages of Incorporating 3D & AR</h1>
          </div>

          <div className='lp-advantage-content'>
            <div className='lp-advantage-info'>
              <h4>3D Configurator</h4>
              <hr className='lp-hr'></hr>
              <ul >
                <li>Complete Customization</li>
                <li>Immersive Realism</li>
                <li>Boost Conversion and Reduce Returns</li>
              </ul>
            </div>

            <div className='lp-advantage-info'>
              <h4>3D Visualizer</h4>
              <hr className='lp-hr'></hr>
              <ul>
                <li>Online Viewing</li>
                <li>Engage and Showcase</li>
                <li>Swift Loading</li>
              </ul>
            </div>


            <div className='lp-advantage-info'>
              <h4>Augmented Reality</h4>
              <hr className='lp-hr'></hr>
              <ul>
                <li>Web-Centric Convenience</li>
                <li>Engaging lnteractivity</li>
                <li>Personalized AR Adventure</li>
              </ul>
            </div>

          </div>
        </div>


        <div className='landingpage-content'>
          <div className='lp-content-head'>
            <h1>Why Triard?</h1>
          </div>

          <div className='lp-industries'>
            <div className='lp-whyus-img'>
              <img className='image' src={lpimg7} alt='Personalization'></img>
              <div class="middle">
                <div class="lp-text">Visualize & Customize every aspect of products in real-time with TRIARD. Enables your customers to choose from an extensive range of options, from colours and materials to sizes and finishes, visualize products and make better purchase decisions.</div>
              </div>
              <p>Real-time Personalization</p>
            </div>

            <div className='lp-whyus-img'>
              <img className='image' src={lpimg8} alt='Dynamic'></img>
              <div class="middle">
                <div class="lp-text">Our advanced rendering technology ensures realistic and dynamic representations that leave a lasting impact. Helps customers to experiment with various customization options and instantly visualize in real-time.</div>
              </div>
              <p>Dynamic Visualizations</p>
            </div>


            <div className='lp-whyus-img'>
              <img className='image' src={lpimg9} alt='Budget-Friendly'></img>
              <div class="middle">
                <div class="lp-text">Hassle-free & budget-friendly 3D visualizer for your eCommerce site. We offer seamless integration, ensuring a smooth and uninterrupted customer journey. Elevate customer satisfaction, drive engagement, and boost your sales.</div>
              </div>
              <p>Budget-Friendly</p>
            </div>


            <div className='lp-whyus-img'>
              <img className='image' src={lpimg10} alt='AR Magic'></img>
              <div class="middle">
                <div class="lp-text">Augmented Reality (AR) integration with TRIARD allows customers to visualize and customize products in real-world environments.</div>
              </div>
              <p>AR Magic</p>
            </div>


            <div className='lp-whyus-img'>
              <img className='image' src={lpimg11} alt='Boosted Sales'></img>
              <div class="middle">
                <div class="lp-text">Stay ahead of the competition by providing a unique and engaging shopping experience. From furniture and home decor to automotive accessories and fashion apparel, our customizer spans across multiple industries, catering to diverse business needs.</div>
              </div>
              <p>Boosted Sales</p>
            </div>


            <div className='lp-whyus-img'>
              <img className='image' src={lpimg12} alt='Seamless Integration'></img>
              <div class="middle">
                <div class="lp-text">Experience a smooth online selling journey with Triard's  user-friendly interface and robust features, seamlessly integrated with WooCommerce, Shopify, and Medusa.</div>
              </div>
              <p>Seamless Integration</p>
            </div>

          </div>
        </div>



        <div className='landingpage-content'>
          <div className='lp-content-head'>
            <h1>Triard Across Industries</h1>
          </div>

          <div className='lp-industries'>
            <div className='lp-industry-img'>
              <img className='image' src={lpimg1} alt='Furniture & Home Decor'></img>
              <div class="middle">
                <div class="lp-text">Triard transforms the furniture and home decor industry by offering customers a personalized design experience. From customizing colors, materials, and finishes to visualizing furniture in their living spaces through AR, Triard empowers customers to create their dream interiors.</div>
              </div>
              <p>Furniture & Home Decor</p>
            </div>

            <div className='lp-industry-img'>
              <img className='image' src={lpimg2} alt='Fashion & Apparel'></img>
              <div class="middle">
                <div class="lp-text">A Game-Changing Solution: Our flagship product, Triard, is the culmination of relentless innovation and unwavering commitment to customer-centricity. </div>
              </div>
              <p>Fashion & Apparel</p>
            </div>


            <div className='lp-industry-img'>
              <img className='image' src={lpimg3} alt='Automotive Accessories'></img>
              <div class="middle">
                <div class="lp-text">In the automotive industry, Triard redefines the way customers shop for accessories. Car enthusiasts can visualize and customize car accessories in real time, selecting from a wide range of options to reflect their unique style.</div>
              </div>
              <p>Automotive Accessories</p>
            </div>


            <div className='lp-industry-img'>
              <img className='image' src={lpimg4} alt='Consumer Electronics'></img>
              <div class="middle">
                <div class="lp-text">Triard transforms the electronics industry, empowering customers to personalize and visualize gadgets, including smartphones, laptops, smartwatches, and tech accessories, tailored to their specific preferences.</div>
              </div>
              <p>Consumer Electronics</p>
            </div>


            <div className='lp-industry-img'>
              <img className='image' src={lpimg5} alt='Fashion & Jewelry'></img>
              <div class="middle">
                <div class="lp-text">For jewelry and accessories businesses, Triard offers a unique opportunity to provide customers with bespoke pieces. Customers can personalize jewelry by choosing metals, gemstones, and intricate designs, visualizing their creations in real time. </div>
              </div>
              <p>Fashion & Jewelry</p>
            </div>


            <div className='lp-industry-img'>
              <img className='image' src={lpimg6} alt='Sports Gear & Equipment'></img>
              <div class="middle">
                <div class="lp-text">Sports enthusiasts can now customize their gear with Triard's 3D configurator. From personalized sports apparel to equipment with specific features, customers can tailor products to enhance their performance and style. </div>
              </div>
              <p>Sports Gear & Equipment</p>
            </div>

          </div>

          <div className='lp-explore-more-btn'>
            <button><a href='/usecases'>Explore more</a></button>
          </div>
        </div>






      </div>

      <Footer />

    </div>
  );
}

export default Landingpage;

