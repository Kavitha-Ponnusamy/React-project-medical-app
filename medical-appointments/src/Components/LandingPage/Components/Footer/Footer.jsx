import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>
            StayHealthy{" "}
            <i style={{ color: "#2190FF" }} className="fa fa-user-md"></i>
            <span>.</span>
          </h3>
          <br />
          <div className="social__icon">
            <i
              style={{ color: "#2190FF" }}
              className="fa fa-facebook-official"
            ></i>
            <i style={{ color: "#2190FF" }} className="fa fa-instagram"></i>
            <i style={{ color: "#2190FF" }} className="fa fa-youtube-play"></i>
            <i style={{ color: "#2190FF" }} className="fa  fa-twitter"></i>
          </div>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div class="footer__bar">Copyright © 2024. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
