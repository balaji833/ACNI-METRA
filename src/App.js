import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Events from './Pages/Event';
import Blog from './Pages/Blog';
import Careers from './Pages/career';
import Contact from './Pages/Contact';
import Alumni from './Pages/Alumi';

import Stories from './Pages/Stories';
import Achievements from './Pages/Achievements';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
      
        <Route path="/alumni/stories" element={<Stories />} />
        <Route path="/alumni/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
