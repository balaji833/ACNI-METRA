import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span>ACNI Metra</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>

          <li className="dropdown">
            <span>Alumni</span>
            <ul className="dropdown-content">
              <li><NavLink to="/alumni/stories">Stories</NavLink></li>
              <li><NavLink to="/alumni/achievements">Achievements</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
