import React, { useRef, useEffect } from 'react';
import './ContactUs.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import gsap from 'gsap';
import contactimg from "../../assets/contact1.png";
import { useParams } from 'react-router';



function ContactUs() {

  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    });
}, [ slug ]);




  const formRef = useRef();
  // const containerContact = useRef(null);
  // const contactDetail = useRef(null);
  // const contactForm = useRef(null);


  const notify = (e) => {
    e.preventDefault();
    if (formRef.current) {
      toast.promise(
        emailjs
          .sendForm(
            "service_fffs5xo",
            "template_g9nkvno",
            formRef.current,
            "WtWnzI12f9avbq-rK"
          )
        , {
          pending: "Processing",
          success: "Send Successfully",
          error: "Error"
        }).then(() => formRef.current && formRef.current.reset());
    }

  };


  // useEffect(() => {
  //   gsap.fromTo(contactDetail.current, { translateX: '100%' }, {
  //     scrollTrigger: {
  //       trigger: contactDetail.current,
  //       immediateRender: false,
  //       scrub: true,
  //       start: 'top 70%',
  //       end: '+=300',
  //     },
  //     translateX: '0%'
  //   });

  //   gsap.fromTo(contactForm.current, { translateX: '-100%' }, {
  //     scrollTrigger: {
  //       trigger: contactForm.current,
  //       immediateRender: false,
  //       scrub: true,
  //       start: 'top 70%',
  //       end: '+=300',
  //     },
  //     translateX: '0%'
  //   });


  // }, []);




  return (
    <>
      <Navbar />
      <div className='contact_main'>
      <img src={contactimg}></img>

        <div className='contact_section'>

          <h2 className="contact_heading">Contact Us</h2>
          <p >
            We're happy to hear from you! Whether you have a question, want to learn more about Triard, or are ready to explore the endless possibilities of 3D configurator and AR integration for your business, we're here to help. Connect with us through any of the following channels:
          </p>



          <div className='gridForm_section'>

            {/* <div className="footer-center" >

              <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Talap, Kannur, Kerala 670002</span> 3rd floor, Downtown complex</p>
              </div>

              <div className='fa-phone'>
                <i className="fa fa-phone"></i>
                <p>+91 8594 00 10 10</p>
              </div>

              <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:Email: info@digitalbuddha.net">Email: info@digitalbuddha.net</a></p>
              </div>

            </div> 
 */}


            {/* <div className='gridContent_section'>
              Contact Information:<br></br><br></br>
              <div>
              Address:  Kannur, Kerala, India  <br></br><br></br>
              </div>
              <div>
              Phone: +91 8594 00 10 10  <br></br><br></br>
              </div>
              <div>
              Email: info@triard.io  <br></br><br></br>
              </div>


            </div> */}


            <div className="formbold-main-wrapper" >
              <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST" ref={formRef} onSubmit={(e) => notify(e)} >
                  <div className="formbold-mb-5">
                    <label for="name" className="formbold-form-label"> Full Name </label>
                    <input
                      type="text"
                      name="user_fname"
                      id="name"
                      placeholder="Full Name"
                      className="formbold-form-input"
                      required
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label for="email" className="formbold-form-label"> Email Address </label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Enter your email"
                      className="formbold-form-input"
                      required
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label for="subject" className="formbold-form-label"> Subject </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      className="formbold-form-input"
                      required
                    />
                  </div>

                  <div className="formbold-mb-5">
                    <label for="message" className="formbold-form-label"> Message </label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="formbold-form-input"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button className="formbold-btn">Submit</button>
                    <ToastContainer  bodyStyle={{backgroundColor: "#fff"}} />
                  </div>
                </form>
              </div>
            </div>

            {/* <div className='gridContent_section'>
              Contact Information:<br></br><br></br>
              Address:  Kannur, Kerala, India  <br></br><br></br>
              Phone: +91 8594 00 10 10  <br></br><br></br>
              Email: info@triard.io  <br></br><br></br>


            </div> */}



            <div className='contact_detail'  >
              <div className='contact_div1'>
                <div className='enquiry_detail'>
                  <h1>
                    Contact Information
                  </h1>

                </div>
              </div>

              <div className='contact_div2'>
                {/* <CallIcon stroke='#4EA39D' /> */}
                <div className='call_detail'>
                  {/* <h1>
              Call Us
              </h1> */}


                  <p>
                    Phone: &nbsp;<a  href='tel:+91 8594 00 10 10'>+91 8594 00 10 10</a>
                  </p>

                  <p>
                    Address: &nbsp; Kannur, Kerala, India  <br></br><br></br>
                  </p>

                  <p className='contact-email'>
                    Email: &nbsp; <a href='mailto:info@triard.io'>info@triard.io</a>
                  </p>

                </div>
              </div>

              <div className='contact_div3'>
                <div className='description_detail'>
                  <p>
                    <b>Customer Support:</b><br></br><br></br>
                    For any technical assistance or support-related inquiries, reach out to our dedicated customer support team at <a href='mailto:support@triard.io'>support@triard.io</a>. We're committed to ensuring your experience with Triard is seamless and successful.
                  </p>
                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;