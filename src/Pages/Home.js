import React from 'react';
import './Home.css';
import bannerImage from '../assets/bannerr.webp';
import eventImage from '../assets/hostel.jpg';
import campusImage from '../assets/c.jpg'; // Add more images if needed
import Image from '../assets/canteen.jpg'; 
import classI from '../assets/class.JPG'; 
const Home = () => (
  <div className="home-page">

    {/* Banner */}
    <div className="banner">
      <img src={bannerImage} alt="Anna University Banner" className="banner-img" />
      <div className="banner-text">
        <h1>Anna University - ACNI Metra</h1>
        <p>Empowering Innovation, Excellence, and Leadership</p>
      </div>
    </div>

  {/* About & Vision Sections */}
<div className="about-vision-container">
  {/* About Section */}
  <div className="about-section">
    <h2>About Anna University</h2>
    <p>Anna University, located in Chennai, Tamil Nadu, is one of India’s top technical universities. Established in 1978, it is globally known for its excellence in engineering, technology, architecture, and applied sciences education.</p>
    <p>It includes institutions like College of Engineering Guindy (CEG), Madras Institute of Technology (MIT), Alagappa College of Technology (ACT), and School of Architecture and Planning (SAP).</p>
  </div>

  {/* Vision & Mission Section */}
  <div className="vision-section">
    <h2>Vision & Mission</h2>
    <p>Our vision is to be a global center of academic excellence. Our mission is to provide transformative education that fosters innovation and leadership for societal development.</p>
    <p>We strive to empower students through research, collaboration, and industry-driven skill building.</p>
  </div>
</div>


 {/* Campus Overview */}
<div className="anna-info">
  <h2>Campus Overview</h2>
  <div className="campus-gallery">
    <img src={campusImage} alt="Anna University Campus" className="campus-img" />
    <img src={eventImage} alt="Campus Event" className="campus-img" />
    <img src={Image} alt="Campus Building" className="campus-img" />
    <img src={classI} alt="Campus Building" className="campus-img" />
    
    {/* Add more images as needed */}
  </div>
  <p>The university campus houses cutting-edge laboratories, digital classrooms, libraries, innovation centers, and vibrant student communities.</p>
</div>

  {/* Departments Section */}
<div className="department-section">
  <h2>Departments</h2>
  <div className="department-cards">
    <div className="department-card">Computer Science & Engineering</div>
    <div className="department-card">Mechanical Engineering</div>
    <div className="department-card">Electrical & Electronics Engineering</div>
    <div className="department-card">Civil Engineering</div>
    <div className="department-card">Information Technology</div>
    <div className="department-card">Biotechnology</div>
  </div>
</div>

{/* Quick Links */}
<div className="quick-links">
  <h2>Quick Links</h2>
  <div className="quick-links-list">
    <div className="quick-link-item"><a href="https://cfa.annauniv.edu/cfa/">Admissions 2025</a></div>
    <div className="quick-link-item"><a href="https://cfr.annauniv.edu/research/academics/index.php">Research & Innovation</a></div>
    <div className="quick-link-item"><a href="">Alumni Network</a></div>
    <div className="quick-link-item"><a href="https://cuic.annauniv.edu/">Placement Cell</a></div>
    <div className="quick-link-item"><a href="https://cfd.annauniv.edu/webcontent.html">Online Learning</a></div>
  </div>
</div>


    {/* Footer */}
    <footer className="footer">
      <ul>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/departments">Departments</a></li>
        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/terms">Terms</a></li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Anna University - ACNI Metra. All rights reserved.</p>
    </footer>

  </div>
);

export default Home;
