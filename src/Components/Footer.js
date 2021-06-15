import React from "react";
import logo from "../assests/logo.png";
import facebook from "../assests/facebook.png";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <div className="sec company">
        <img src={logo} alt="logo" />
        <h5>A Better way to build.</h5>
        <div className="social">
          <img src={facebook} alt="icon" />
          <img src={instagram} alt="icon" />
          <img src={linkedin} alt="icon" />
        </div>
      </div>
      {/* <div className="links"> */}
      <div className="sec">
        <p className="header">PRODUCTS</p>
        <ul>
          <li>Page Builder</li>
          <li>UI Kit</li>
          <li>Styleguide</li>
          <li>Documentation</li>
          <li>Changelog</li>
        </ul>
      </div>
      <div className="sec">
        <p className="header">SERVICES</p>
        <ul>
          <li>Documentation</li>
          <li>Changelog</li>
          <li>Page Builder</li>
          <li>UI Kit</li>
        </ul>
      </div>
      <div className="sec">
        <p className="header">CONNECT</p>
        <ul>
          <li>Page Builder</li>
          <li>UI Kit</li>
          <li>Styleguide</li>
          <li>Documentation</li>
          <li>Changelog</li>
          <li>Page Builder</li>
          <li>UI Kit</li>
          <li>Styleguide</li>
        </ul>
      </div>
      <div className="sec">
        <p className="header">LEGAL</p>
        <ul>
          <li>Page Builder</li>
          <li>UI Kit</li>
          <li>Styleguide</li>
        </ul>
        {/* </div> */}
      </div>
    </footer>
  );
}
