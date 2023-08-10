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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/usecases" element={<Usecase />} />

          <Route path="/demo" element={<Demo />} />

          <Route path="/faq" element={<Faq />} />

          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
