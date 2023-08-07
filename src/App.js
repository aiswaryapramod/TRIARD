import React from "react";
import "./App.css";
import Faq from "./components/faq/Faq";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import ContactUs from './components/contactUs/ContactUs';
import Usecase from './components/usecase/Usecase';
import Demo from './components/demos/Demo';
import Home from "./components/home/Home";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/usecases' element={<Usecase />} />
        </Routes>

        <Routes>
          <Route path='/demo' element={<Demo />} />
        </Routes>


        <Routes>
          <Route path='/faq' element={<Faq />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

        <Routes>
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
