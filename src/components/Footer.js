import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Aurevia Technologies</h4>
          <p>Next-generation AI software company transforming businesses into intelligent digital enterprises.</p>
          <div className="social-links">
            <a href="#!" className="social-link">Facebook</a>
            <a href="#!" className="social-link">Twitter</a>
            <a href="#!" className="social-link">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#!">AI Business Co-Pilots</a></li>
            <li><a href="#!">Business Automation</a></li>
            <li><a href="#!">Predictive Intelligence</a></li>
            <li><a href="#!">Digital Twin Systems</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Lahore, Pakistan</p>
          <p>📧 <a href="mailto:info@aurevia.com">info@aurevia.com</a></p>
          <p>📞 <a href="tel:+929876543210">+92 98765 43210</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Aurevia Technologies. All rights reserved.</p>
        <div className="footer-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}