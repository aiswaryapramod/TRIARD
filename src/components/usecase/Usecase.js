import React, { useEffect, useRef } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import "./Usecase.css";
import banner from "../../assets/usecase1.png";
import decor from "../../assets/usecase2.png";
import automotive from "../../assets/usecase3.png";
import fashion from "../../assets/usecase4.png";
import jewelry from "../../assets/usecase5.png";
import Electronics from "../../assets/usecase6.png";
import Sports from "../../assets/usecase7.png";
import Gifts from "../../assets/usecase8.png";
import Renovation from "../../assets/usecase9.png";
import revolution from "../../assets/usecase10.png";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useParams } from 'react-router';


gsap.registerPlugin(ScrollTrigger);


function Usecase() {

  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    });
}, [ slug ]);

  

  const containerUsecase = useRef(null);
  const containerUsecase1 = useRef(null);
  const containerUsecase2 = useRef(null);
  const containerUsecase3 = useRef(null);
  const containerUsecase4 = useRef(null);
  const containerUsecase5 = useRef(null);
  const containerUsecase6 = useRef(null);
  const containerUsecase7 = useRef(null);
  const revolutionsec = useRef(null);
  const headingPara1 = useRef(null);


  useEffect(() => {

    const cases = gsap.utils.toArray(".case");

    cases.forEach(cas => {
      gsap.fromTo(cas, { scale: 0.5 }, {
        scrollTrigger: {
          trigger: cas,
          immediateRender: false,
          scrub: true,
          start:80,
          smooth: 2,
          start: 'top 80%'
        },
        scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
      });
    });

    // gsap.fromTo(containerUsecase.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase.current,
    //     immediateRender: false,
    //     scrub: true,
    //     start:80,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase1.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase1.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase2.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase2.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase3.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase3.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase4.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase4.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase5.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase5.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase6.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase6.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });

    // gsap.fromTo(containerUsecase7.current, { scale: 0.5 }, {
    //   scrollTrigger: {
    //     trigger: containerUsecase7.current,
    //     immediateRender: false,
    //     scrub: true,
    //     smooth: 2,
    //     start: 'top 80%'
    //   },
    //   scale: 1 // The scale value you want to animate to (e.g., 1 for normal size)
    // });



  }, []);


useEffect(() => {
  gsap.fromTo(revolutionsec.current, { x: '-100%' }, {
      scrollTrigger: {
          trigger: revolutionsec.current,
          immediateRender: false,
          scrub: true,
          start: 'top 70%',
          end: '+=300',
      },
      x: '0%'
  });
}, []);

useEffect(() => {
  const letters1 = headingPara1.current.textContent.split("");

  headingPara1.current.innerHTML = letters1
    .map(
      (letter) =>
        `<span style="display: inline-block">${letter === " " ? "&nbsp;" : letter}</span>`
    )
    .join("");


  const letterSpans1 = headingPara1.current.querySelectorAll("span");


  gsap.from(letterSpans1, {
    opacity: 0,
    y: 30,
    duration: 0.2,
    stagger: 5, 
    ease: "bounce.out", 
    scrollTrigger: {
      trigger: headingPara1.current,
      start: "top 80%", 
      end: "+=300",
      scrub: true, 
    },
  });



}, []);






  return (
    <div>
      <Navbar />
      <div>

        <div className='usecase_banner'>
          <img loading='lazy' src={banner} alt=''></img>
        </div>

        <div className='usecase_heading'>
          <h2>Use cases or industries</h2>
          <p ref={headingPara1}>Discover How Triard Elevates Different Industries and Realizes Unique Use Cases</p>
        </div>

        <div className='usecase_content'>
          <div className='case1 case' ref={containerUsecase}>
            <div className='case1_info'>
              <h2>Furniture and Home Decor</h2>
              <p>Triard transforms the furniture and home decor industry by offering customers a personalized design experience. From customizing colors, materials, and finishes to visualizing furniture in their living spaces through AR, Triard empowers customers to create their dream interiors. The immersive experience boosts customer engagement and drives conversions for furniture retailers and interior designers.</p>
            </div>

            <div className='case1_img'>
              <img src={decor}></img>
            </div>

          </div>

          <div className='case2 case' ref={containerUsecase1}>
            <div className='case2_img'>
              <img src={automotive}></img>
            </div>

            <div className='case2_info'>
              <h2>Automotive Accessories</h2>
              <p>In the automotive industry, Triard redefines the way customers shop for accessories. Car enthusiasts can visualize and customize car accessories in real time, selecting from a wide range of options to reflect their unique style. Whether it's alloy wheels, seat covers, or exterior accents, Triard enhances the shopping journey and increases accessory sales for automotive businesses.</p>
            </div>

          </div>

          <div className='case1 case' ref={containerUsecase2}>
            <div className='case1_info'>
              <h2>Fashion Apparel and Accessories</h2>
              <p>A Game-Changing Solution: Our flagship product, Triard, is the culmination of relentless innovation and unwavering commitment to customer-centricity. Triard's real-time customization empowers customers to explore a vast range of options, visualize products, and make informed purchase decisions.</p>
            </div>

            <div className='case1_img'>
              <img src={fashion}></img>
            </div>

          </div>

          <div className='case2 case' ref={containerUsecase3}>
            <div className='case2_img'>
              <img src={jewelry}></img>
            </div>

            <div className='case2_info'>
              <h2>Jewelry and Accessories</h2>
              <p>For jewelry and accessories businesses, Triard offers a unique opportunity to provide customers with bespoke pieces. Customers can personalize jewelry by choosing metals, gemstones, and intricate designs, visualizing their creations in real time. This level of customization elevates the luxury shopping experience and enhances the value of each piece</p>
            </div>

          </div>

          <div className='case1 case' ref={containerUsecase4}>
            <div className='case1_info'>
              <h2>Electronics and Gadgets</h2>
              <p>Triard revolutionizes the electronics industry by allowing customers to configure and visualize gadgets to their exact specifications. From smartphones and laptops to smartwatches and tech accessories, customers can create devices that cater to their specific needs and preferences. The enhanced product experience leads to higher customer satisfaction and increased sales.</p>
            </div>

            <div className='case1_img'>
              <img src={Electronics}></img>
            </div>

          </div>

          <div className='case2 case' ref={containerUsecase5}>
            <div className='case2_img'>
              <img src={Sports}></img>
            </div>

            <div className='case2_info'>
              <h2>Sporting Goods and Equipment</h2>
              <p>Sports enthusiasts can now customize their gear with Triard's 3D configurator. From personalized sports apparel to equipment with specific features, customers can tailor products to enhance their performance and style. Sporting goods retailers witness increased customer engagement and a surge in sales, fueled by the excitement of creating custom gear.</p>
            </div>

          </div>

          <div className='case1 case' ref={containerUsecase6}>
            <div className='case1_info' >
              <h2>Personalized Gifts and Memorabilia</h2>
              <p>Triard opens up new possibilities for the gifting industry. Customers can personalize gifts and memorabilia, adding a heartfelt touch to special occasions. From custom-engraved items to personalized photo merchandise, Triard enables businesses to offer meaningful and unforgettable gifts, leading to delighted customers and word-of-mouth referrals.</p>
            </div>

            <div className='case1_img'>
              <img src={Gifts}></img>
            </div>

          </div>

          <div className='case2 case' ref={containerUsecase7}>
            <div className='case2_img'>
              <img src={Renovation}></img>
            </div>

            <div className='case2_info'>
              <h2>Interior Design and Renovation Services</h2>
              <p>Triard is a game-changer for interior designers and renovation services. Professionals can present clients with lifelike visualizations of their design proposals, allowing them to make informed decisions before implementation. Triard streamlines the design process, reducing revisions and ensuring client satisfaction.</p>
            </div>

          </div>

        </div>

        <div className='usecase_experience' >
          <h2>Revolutionizing Every Business Department</h2>
          <p>Welcome to Triard, where we harness the transformative power of 3D and AR technologies to enhance the workflows of various departments. Explore how our innovative solutions redefine Engineering and Development, Product and Industrial Design, Marketing, Web, and Advertising, as well as Customer Support and Maintenance.</p>
         <button><a href='/non-ecommerce'>Explore more</a></button>
         </div>

        <div className='usecase_revolution' ref={revolutionsec}>
          <div className='revolution_info'>
            <p>Ready to revolutionize your industry with Triard's <b>3D configurator and AR integration?</b> <br></br><br></br>
              Contact us to explore how Triard can make a significant impact on your business.
              <a href='/contactUs'><button>Contact Us</button></a>
            </p>
          </div>
          <div className='revolution_img'>
            <img src={revolution}></img>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Usecase;