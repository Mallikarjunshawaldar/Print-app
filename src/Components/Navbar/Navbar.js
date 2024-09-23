import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={assets.thumb} alt="Project Logo" className="logo-icon" />
        <span className="project-name">Print</span>
      </div>

      <ul className="nav-links">
        {/* Standard Links */}
        <li>
          <a href="#">Catalog</a>
        </li>
        {/* Dropdown for "How it works" */}
        <li className="dropdown">
          <a href="#">How it works</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">How Printify Works</a>
            </li>
            <li>
              <a href="#">Print On Demand</a>
            </li>
            <li>
              <a href="#">Printify Quality Promise</a>
            </li>
            <li>
              <a href="#">What to Sell?</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>

        {/* Dropdown for "Services" */}
        <li className="dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Printify Studio</a>
            </li>
            <li>
              <a href="#">Printify Express Delivery</a>
            </li>
            <li>
              <a href="#">Transfer Products</a>
            </li>
            <li>
              <a href="#">Order In Bulk</a>
            </li>
            <li>
              <a href="#">Experts Program</a>
            </li>
          </ul>
        </li>

        {/* Dropdown for "Use cases" */}
        <li className="dropdown">
          <a href="#">Use cases</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Merch for Fans</a>
            </li>
            <li>
              <a href="#">Merch for eCommerce</a>
            </li>
            <li>
              <a href="#">Merch for Enterprises</a>
            </li>
            <li>
              <a href="#">Grow Your Store</a>
            </li>
          </ul>
        </li>

        {/* Dropdown for "Need help?" */}
        <li className="dropdown">
          <a href="#">Need help?</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Help CenterHelp Center</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a href="#">My Requests</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="login">
        <button className="log-in-btn">Log in</button>
        <button className="sign-up-btn">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
