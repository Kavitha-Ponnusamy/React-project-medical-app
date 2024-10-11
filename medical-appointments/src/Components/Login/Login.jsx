import React, { useState, useEffect } from "react"; // Importing the necessary modules from React library
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Login = () => {
  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // Get navigation function from react-router-dom
  const navigate = useNavigate();
  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);
  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);
      // Redirect to home page and reload the window
      navigate("/");
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <>
      {/* Main container div for the page content */}
      <div className="container">
        {/* Div for login grid layout */}
        <div class="login-grid">
          {/*  Div for login text */}
          <div className="login-text">
            <h2>Login</h2>
          </div>
          {/* Additional login text with a link to Sign Up page */}
          <div className="login-text">
            Are you a new member? {"\u00A0"}
            <span>
              <Link to="/signup" style={{ color: "#2190ff" }}>
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          {/*  Div for login form */}
          <div className="login-form">
            <form onSubmit={login}>
              {/* Form group for email input */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                  required
                />
              </div>
              {/*  Form group for password input */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                  required
                />
              </div>
              {/*  Button group for login and reset buttons */}
              <div className="btn-group">
                <button
                  type="submit"
                  className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >
                  Login
                </button>
                <button
                  type="reset"
                  className="btn btn-danger mb-2 waves-effect waves-light"
                >
                  Reset
                </button>
              </div>
              <br />
              {/*Additional login text for 'Forgot Password' option */}
              <div className="login-text">Forgot Password?</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
