import React from 'react';
import './Stories.css';

const stories = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Google',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'ACNI Metra gave me the foundation and confidence to follow my dreams. The faculty and support system were incredible.',
  },
  {
    name: 'Rahul Iyer',
    role: 'Founder of TechNova AI',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'The exposure I got at ACNI Metra helped me shape my entrepreneurial journey. I’m proud to be an alumnus.',
  },
  {
    name: 'Divya Kapoor',
    role: 'Data Scientist at Amazon',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'From coding competitions to hands-on projects, my experience at ACNI Metra was transformative.',
  },
];

const Stories = () => {
  return (
    <div className="stories-page">
      <h1>Alumni Stories</h1>
      <p className="intro">
        Our alumni continue to inspire and achieve excellence in various fields.
        Here are a few of their remarkable journeys.
      </p>

      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.name} />
            <h3>{story.name}</h3>
            <p className="role">{story.role}</p>
            <blockquote>"{story.quote}"</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
