import React from "react";
import "./App.css";
import Faq from "./components/faq/Faq";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./components/home/Home";
import ContactUs from "./components/contactUs/ContactUs";
import Usecase from "./components/usecase/Usecase";
import Demo from "./components/demos/Demo";
import Missing from "./components/missing/Missing";

import AboutUs from "./components/aboutUs/AboutUs";
// import Slider from "./components/slider/Slider"
import Blog from "./components/blog/Blog";
import Jewellery from "./components/jewellery/Jewellery";
import Bloginner1 from "./components/bloginner1/Bloginner1";
import Bloginner2 from "./components/bloginner2/Bloginner2";
import NonEcommerce from "./components/nonEcommerce/NonEcommerce";
import Advertising from "./components/advertising/Advertising";
import Furniture from "./components/furniture/Furniture";
import Blenderpilot from "./components/blender-pilot/Blenderpilot";
import Terms from "./components/terms-and-services/Terms";
import Privacy from "./components/privacy-policy/Privacy";
import Car from "./components/car-page/Car";
import Baseball from "./components/baseball/Baseball";
import Kitchen from "./components/kitchen-appliances/Kitchen";
import Bloginner3 from "./components/bloginner3/Bloginner3";
// import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/slider" element={<Slider />} /> */}
          <Route path="/usecases" element={<Usecase />} />

          <Route path="/demo" element={<Demo />} />


          <Route path='/faq' element={<Faq />} />
          {/* <Route path="/faq" element={<Faq />} /> */}

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/bloginner1" element={<Bloginner1 />} />

          <Route path="/bloginner2" element={<Bloginner2 />} />

          <Route path="/jewellery" element={<Jewellery />} />

          <Route path="/non-ecommerce" element={<NonEcommerce />} />

          <Route path="/advertising" element={<Advertising />} />

          <Route path="/furniture" element={<Furniture />} />

          <Route path="/car-page" element={<Car />} />

          <Route path="/sports" element={<Baseball />} />

          <Route path="/bloginner3" element={<Bloginner3 />} />

          <Route path="/kitchen-appliances" element={<Kitchen />} />
          
          {/* <Route path="/gallery" element={<Gallery />} /> */}

          <Route path="/terms-and-services" element={<Terms />} />

          <Route path="/privacy-policy" element={<Privacy />} />

          <Route path="/pilot" element={<Blenderpilot />} />

          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
