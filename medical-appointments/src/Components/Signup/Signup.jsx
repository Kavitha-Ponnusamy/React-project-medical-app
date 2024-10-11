import React from "react"; // Importing the necessary modules from React library
import "./Sign_Up.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div class="container">
        {/* Main container with margin-top */}
        <div class="signup-grid">
          {/* Grid layout for sign-up form */}
          <div class="signup-text">
            {/* Title for the sign-up form */}
            <h1>Sign Up</h1>
          </div>
          <div class="signup-text1">
            {/* Text for existing members to log in */}
            Already a member? {"\u00A0"}
            <span>
              <Link to="/login" style={{ color: "#2190ff" }}>
                Login
              </Link>
            </span>
          </div>
          <div class="signup-form">
            {/* Form for user sign-up */}
            <form>
              {/* Start of the form */}

              <div class="form-group">
                {/* Form group for user's name */}
                <label for="name">Name</label>
                {/* Label for name input field */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  class="form-control"
                  placeholder="Enter your name"
                  aria-describedby="helpId"
                />
                {/* Text input field for name */}
              </div>

              <div class="form-group">
                {/* Form group for user's phone number */}
                <label for="phone">Phone</label>
                {/* Label for phone input field */}
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  class="form-control"
                  placeholder="Enter your phone number"
                  aria-describedby="helpId"
                />
                {/* Tel input field for phone number */}
              </div>

              <div class="form-group">
                {/* Form group for user's email */}
                <label for="email">Email</label>
                {/* Label for email input field */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
                {/* Email input field */}
              </div>

              <div class="form-group">
                {/* Form group for user's password */}
                <label for="password">Password</label>
                {/* Label for password input field */}
                <input
                  name="password"
                  id="password"
                  required
                  class="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                {/* Password input field */}
              </div>

              <div class="btn-group">
                {/* Button group for form submission and reset */}
                <button
                  type="submit"
                  className="btn btn-primary sm-1 mr-1 waves-effect waves-light"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="btn btn-danger sm-1 waves-effect waves-light"
                >
                  Reset
                </button>
              </div>
            </form>
            {/* End of the form */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
