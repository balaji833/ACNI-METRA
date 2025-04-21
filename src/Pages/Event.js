import React from 'react';
import './Events.css'; 
import bannerImage from '../assets/ban.jpg'; 
import techTalkImg from '../assets/tech.jpg';
import culturalFestImg from '../assets/cultral.jpg';
import hackathonImg from '../assets/ack.jpg';
import seminarImg from '../assets/ai.jpg';
import workshopImg from '../assets/web.jpg';
import sportsImg from '../assets/sports.jpg';
import alumniImg from '../assets/alumni.jpg';
import startupImg from '../assets/startup.jpg';
import musicImg from '../assets/music.jpg';
import newEventImg from '../assets/newEvent.jpg'; // Image for the new event

const events = [
  {
    title: 'Tech Talk 2025',
    date: 'May 10, 2025',
    location: 'Auditorium Hall A',
    description: 'Join us for an inspiring session with top tech leaders.',
    image: techTalkImg
  },
  {
    title: 'Cultural Fest',
    date: 'June 15, 2025',
    location: 'Open Grounds',
    description: 'A full-day fest with dance, music, and food stalls.',
    image: culturalFestImg
  },
  {
    title: 'Hackathon 5.0',
    date: 'July 20, 2025',
    location: 'Lab Block 3',
    description: '24-hour coding marathon with prizes and food!',
    image: hackathonImg
  },
  {
    title: 'AI Seminar',
    date: 'August 5, 2025',
    location: 'Seminar Hall B',
    description: 'An in-depth seminar on AI trends and future applications.',
    image: seminarImg
  },
  {
    title: 'Web Dev Workshop',
    date: 'September 10, 2025',
    location: 'Computer Lab 2',
    description: 'Hands-on workshop building websites using modern tech.',
    image: workshopImg
  },
  {
    title: 'Annual Sports Day',
    date: 'October 1, 2025',
    location: 'Main Stadium',
    description: 'Show your spirit! Participate or cheer your favorite teams.',
    image: sportsImg
  },
  {
    title: 'Alumni Meet 2025',
    date: 'October 25, 2025',
    location: 'Auditorium Hall B',
    description: 'Reconnect and relive memories with past graduates.',
    image: alumniImg
  },
  {
    title: 'Startup Expo',
    date: 'November 12, 2025',
    location: 'Innovation Centre',
    description: 'Discover exciting student startups and business ideas.',
    image: startupImg
  },
  {
    title: 'Battle of Bands',
    date: 'December 5, 2025',
    location: 'Cultural Stage',
    description: 'Live performances from campus music bands and guests.',
    image: musicImg
  },
  {
    title: 'Coding Bootcamp 2025', // New event
    date: 'January 10, 2026',
    location: 'Tech Lab 4',
    description: 'An intense 5-day bootcamp on full-stack web development.',
    image: newEventImg
  }
];

const Events = () => (
  <div className="events-page">
    <div
      className="events-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner-text">
        <h1>Events</h1>
        <p>Explore all upcoming and past events here.</p>
      </div>
    </div>

    <div className="events-content">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={event.image} alt={event.title} className="event-image-top" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
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
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@universityevents.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 University Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Events;
