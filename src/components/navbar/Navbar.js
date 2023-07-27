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
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
          <ul class="menu">
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Products</a> </li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">UseCase</a></li>

          </ul>
        </nav>
      </header>

    </div>
  );
}

export default Navbar;