import React from 'react';
import './Contact.css';
import bannerImage from '../assets/bann.jpg';

const Contact = () => (
  <div className="contact-page">
    {/* Banner Section */}
    <div className="contact-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-text">
        <h1>Contact Us</h1>
        <p>We're here to assist you. Reach out to us anytime!</p>
      </div>
    </div>

    {/* Grid Layout Section */}
    <div className="contact-grid">
      {/* Left: Contact Info */}
      <div className="contact-left">
        <h2>College Details</h2>
        <p><strong>Address:</strong> 12, Sardar Patel Rd, Anna University, Guindy, Chennai, Tamil Nadu 600025</p>
        <p><strong>Phone:</strong> 04422358314</p>
        <p><strong>Email:</strong> contact@university.com</p>
        <p><strong>Visit:</strong>  <a href='https://www.annauniv.edu/index.php'>visit annauniv.edu</a></p>
      </div>

      {/* Right: Map */}
      <div className="contact-right">
        <h2>Find Us</h2>
        <iframe
          title="University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.385925563639!2d80.23373687454716!3d13.011078314012536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679fd80e657f%3A0x9727dde0ba49c84e!2sAnna%20University!5e0!3m2!1sen!2sin!4v1744955190295!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@university.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Contact;
