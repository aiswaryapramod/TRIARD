import React ,{useEffect} from 'react'
import Banner from './banner/Banner';
import Content from './content/Content';
import ContactUs from './contactus/ContactUs';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useParams } from 'react-router';
import {Helmet} from "react-helmet";
import "./Home.css"

function Home() {

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
      <Helmet>
                <meta charSet="utf-8" />
                <title>3D Product Configurator & AR for Ecommerce | Triard</title>
                <meta name="description" content="Triard's 3D product configurator & AR enables customers to visualize and configure your products in real time. Explore now."></meta>
            </Helmet>
            {/* <div class="snow-container">
  <div class="snow foreground"></div>
  <div class="snow foreground layered"></div>
  <div class="snow middleground"></div>
  <div class="snow middleground layered"></div>
  <div class="snow background"></div>
  <div class="snow background layered"></div>
</div> */}

{/* <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">❄</div>
  <div class="snowflake"> ❄</div>  
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div>
  <div class="snowflake"> ❄</div> */}

        <Navbar/>
        <Banner/>
        <Content/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home