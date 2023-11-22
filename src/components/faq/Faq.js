import React, { useEffect } from 'react';
import "./Faq.css";
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router';

function Faq() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    });
}, [ slug ]);

  return (
    <>
      <Navbar />
      <div className='main_faq'>

        <div className='faq_heading'>FAQ</div>

        <div className='faq_content'>

          <details>
            <summary> What makes Triard stand out from other 3D configurators?</summary><hr></hr>
            <p>
              Triard sets itself apart with its advanced real-time customization capabilities and seamless AR integration. Our dynamic visualizations and user-friendly interface create immersive shopping experiences that leave a lasting impact on customers.
            </p>
          </details>

          <details>
            <summary>  Can Triard handle large product catalogs? </summary><hr></hr>
            <p>
              Absolutely! Triard is designed to handle extensive product catalogs, accommodating a wide range of customizable items without compromising on performance or user experience.
            </p>
          </details>

          <details>
            <summary>How can Triard benefit my business as a startup?</summary><hr></hr>
            <p>
              For startups, Triard offers a competitive edge by providing an affordable and easy-to-integrate 3D configurator solution. With Triard, startups can offer personalized product experiences, driving customer engagement and brand loyalty from the start.
            </p>
          </details>

          <details>
            <summary> What kind of analytics does Triard offer?</summary><hr></hr>
            <p>
              Triard's comprehensive analytics dashboard provides valuable insights into customer preferences, popular customizations, user behavior, and more. These data-driven insights help you make informed decisions to optimize your product offerings and marketing strategies.
            </p>
          </details>

          <details>
            <summary>Is Triard customizable to match my brand's look and feel?</summary><hr></hr>
            <p>
              Absolutely! Triard is fully customizable, allowing you to tailor the platform's appearance and features to align with your brand identity. Create a seamless and branded shopping experience for your customers.
            </p>
          </details>

          <details>
            <summary>Can Triard be used by businesses of all sizes? </summary><hr></hr>
            <p>
              Yes, Triard caters to businesses of all sizes, from startups to large enterprises. Our solution is scalable and adaptable to meet the specific needs and growth trajectories of diverse businesses.
            </p>
          </details>

          <details>
            <summary> Does Triard offer multilingual support for international customers?</summary><hr></hr>
            <p>
              Yes, Triard supports multilingual capabilities, enabling you to engage with a global customer base. Offer a personalized experience to customers worldwide in their preferred language.            </p>
          </details>

          <details>
            <summary> Is Triard secure and reliable for handling customer data?</summary><hr></hr>
            <p>
              Absolutely! At Triard, data security is a top priority. We implement industry-leading security measures to safeguard customer data and ensure a reliable and secure platform.
            </p>
          </details>

          <details>
            <summary>How can I get started with Triard? </summary><hr></hr>
            <p>
              Getting started with Triard is easy! Simply reach out to our team through the "Contact Us" section, and we'll be happy to schedule a free demo for you. Experience the power of Triard and see how it can revolutionize your e-commerce platform.
            </p>
          </details>


          <div className='faq_cta'>
           <h1>CONTACT US</h1>
           <h4> If you have any other questions or need further assistance, don't hesitate to contact us. Our team is here to help you unlock the full potential of Triard for your business.</h4>
           <div className='faq_btn'>
           <a href='/contact-us'><button > Contact Now</button></a>
           </div>
          </div>

        </div>


      </div>
      <Footer />
    </>
  );
}

export default Faq;