import React from 'react';
import logo from "../../assets/logo2.png"
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* <div classNameName='navbar'>
      <img src={logo}></img>
      </div> */}


      <header class="header">
        <a href='/'><img src={logo}></img></a>
        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu"><span class="hamb-line"></span> <span class="hamb-line"></span><span class="hamb-line"></span></label>
        {/* <label class="hamb" for="side-menu"><span class="hamb-line"></span> <span class="hamb-line"></span><span class="hamb-line"></span></label> */}

        <nav class="nav">
          <ul class="menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/aboutUs">ABOUT US</Link></li>
            <li><Link to="/usecases">USE CASES</Link></li>
            <li><Link to="/demo">DEMOS</Link> </li>
            <li><Link to="/blog">BLOG</Link> </li>
            <li><Link to="/contactUs">CONTACT US</Link></li>

          </ul>
        </nav>
      </header>

    </div>
  );
}

export default Navbar;