import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Learn</h4>
            <ul>
              <li>
                <Link to="Learn ">Our Coffee</Link>
              </li>
              <li>
                <Link to="Learn">Our Story</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li>
                <Link to="/signIn">Sign In</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>customer</h4>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/contact">WholeSale</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow ANJU Coffee</h4>
            <div className="social-links">
              <a href="https://facebook.com">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
