import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import Button from "./Button";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />

      <ul>
        <NavLink activeClassName="activeRoute" to="/" exact>
          <li>HOME</li>
        </NavLink>
        <NavLink activeClassName="activeRoute" to="/data" exact>
          <li>DATA</li>
        </NavLink>
        <NavLink activeClassName="activeRoute" to="/contact" exact>
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <Button name="Buy Now" />
    </header>
  );
}
