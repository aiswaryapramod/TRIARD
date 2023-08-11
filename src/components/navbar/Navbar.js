import React from 'react';
import logo from "../../assets/logo2.png"
import "./Navbar.css";

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

        <nav class="nav">
          <ul class="menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/aboutUs">ABOUT US</a></li>
            <li><a href="/usecases">USE CASES</a></li>
            <li><a href="/demo">DEMOS</a> </li>
            <li><a href="/contactUs">CONTACT US</a></li>

          </ul>
        </nav>
      </header>

    </div>
  );
}

export default Navbar;