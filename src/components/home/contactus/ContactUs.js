import React, { useRef, useEffect } from 'react';
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img8 from "../../../assets/img8.png";

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {

    const formRef = useRef();
    const contactUsInfoRef = useRef();
    const contactUsImgRef = useRef();

    useEffect(() => {
        gsap.fromTo(contactUsInfoRef.current, { translateY: '100%' }, {
            scrollTrigger: {
                trigger: '.contactUs_h2',
                immediateRender: false,
                scrub: true,
                start: 'top 80%'
            },
            translateY: '0%'
        });
    }, []);


    useEffect(() => {
        gsap.fromTo(contactUsImgRef.current, { translateX: '100%' }, {
            scrollTrigger: {
                trigger: '.contactUs_h2',
                immediateRender: false,
                scrub: true,
                start: 'top 80%'
            },
            translateX: '0%'
        });
    }, []);


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


    return (
        <div className='container' style={{ overflow: 'hidden' }}>
            <h2 className='contactUs_h2'>ContactUs</h2>

            <div id='contactus' className='contactUs_info'>

                <div className="formbold-main-wrapper" ref={contactUsInfoRef} >
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
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
                <style></style>

                <div className='contactUs' ref={contactUsImgRef}>
                    <img src={img8} ref={contactUsImgRef}/>
                </div>


            </div>



        </div>
    );
}

export default ContactUs;