import React, { useState } from "react"; // Importing the necessary modules from React library
import "./Sign_Up.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Signup = () => {
  // State variables using useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState(""); // State to show error messages
  const navigate = useNavigate(); // Navigation hook from react-router
  // Function to handle form submission
  const register = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // API Call to register user
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone,
      }),
    });
    const json = await response.json(); // Parse the response JSON
    if (json.authtoken) {
      // Store user data in session storage
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);
      // Redirect user to home page
      navigate("/");
      window.location.reload(); // Refresh the page
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          setShowerr(error.msg); // Show error messages
        }
      } else {
        setShowerr(json.error);
      }
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "5%" }}>
        {/* Main container with margin-top */}
        <div className="signup-grid">
          {/* Grid layout for sign-up form */}
          <div className="signup-text">
            {/* Title for the sign-up form */}
            <h1>Sign Up</h1>
          </div>
          <div className="signup-text1">
            {/* Text for existing members to log in */}
            Already a member? {"\u00A0"}
            <span>
              <Link to="/login" style={{ color: "#2190ff" }}>
                Login
              </Link>
            </span>
          </div>
          <div className="signup-form">
            {/* Form for user sign-up */}
            <form method="POST" onSubmit={register}>
              {/* Start of the form */}

              <div className="form-group">
                {/* Form group for user's name */}
                <label htmlFor="name">Name</label>
                {/* Label for name input field */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control"
                  placeholder="Enter your name"
                  aria-describedby="helpId"
                />
                {/* Text input field for name */}
              </div>

              <div className="form-group">
                {/* Form group for user's phone number */}
                <label htmlFor="phone">Phone</label>
                {/* Label for phone input field */}
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  required
                  className="form-control"
                  placeholder="Enter your phone number"
                  aria-describedby="helpId"
                />
                {/* Tel input field for phone number */}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
                {showerr && (
                  <div className="err" style={{ color: "red" }}>
                    {showerr}
                  </div>
                )}
              </div>

              <div className="form-group">
                {/* Form group for user's password */}
                <label htmlFor="password">Password</label>
                {/* Label for password input field */}
                <input
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                {/* Password input field */}
              </div>

              <div className="btn-group">
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
