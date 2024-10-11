import React from "react"; // Importing the necessary modules from React library
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        {/*  Navigation logo section */}
        <div class="nav__logo">
          {/* Link to the home page */}
          <Link to="/">StayHealthy</Link>

          {/* Insert an SVG icon of a doctor with a stethoscope */}
        </div>
        {/* Navigation icon section with an onClick event listener */}
        <div class="nav__icon" onClick="{handleClick}">
          {/*Font Awesome icon for bars (hamburger menu) */}
          <i class="fa fa-times fa fa-bars"></i>
        </div>

        {/*Unordered list for navigation links with 'active' class*/}
        <ul class="nav__links active">
          {/* List item for the 'Home' link */}
          <li class="link">
            <Link to="/">Home</Link>
          </li>
          {/* List item for the 'Appointments' link */}
          <li class="link">
            <Link to="/appointments">Appointments</Link>
          </li>
          {/*  List item for the 'Sign Up' link with a button */}
          <li class="link">
            <Link to="/signup">
              <button class="btn1">Sign Up</button>
            </Link>
          </li>
          {/* List item for the 'Login' link with a button */}
          <li class="link">
            <Link to="/login">
              {" "}
              <button class="btn1">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
