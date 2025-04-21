import React from 'react';
import './career.css'; // Import your CSS file for styling
const Careers = () => {
  return (
    <div className="careers-page">
      <h1>Careers at Anna University</h1>
      <p>Join a dynamic academic and research-driven environment dedicated to shaping future leaders and innovators.</p>

      {/* Open Positions */}
      <section className="careers-section">
        <h2>Current Openings</h2>
        <div className="job-listing">
          <h3>Assistant Professor – Computer Science & Engineering</h3>
          <p><strong>Location:</strong> CEG Campus, Chennai</p>
          <p><strong>Qualifications:</strong> Ph.D. in Computer Science or related field, proven research record.</p>
          <p><strong>Experience:</strong> Minimum 2 years teaching/research.</p>
          <p><a href="#">View Details & Apply</a></p>
        </div>

        <div className="job-listing">
          <h3>Research Associate – Biotechnology</h3>
          <p><strong>Location:</strong> ACT Campus</p>
          <p><strong>Qualifications:</strong> M.Tech/M.Sc in Biotechnology, publications preferred.</p>
          <p><strong>Experience:</strong> 1-2 years lab experience or project work.</p>
          <p><a href="#">View Details & Apply</a></p>
        </div>

        <div className="job-listing">
          <h3>Technical Assistant – Data Analytics Lab</h3>
          <p><strong>Location:</strong> MIT Campus</p>
          <p><strong>Qualifications:</strong> B.E/B.Tech in IT/CSE, knowledge of Python/ML tools.</p>
          <p><a href="#">View Details & Apply</a></p>
        </div>
      </section>

      {/* Benefits */}
      <section className="careers-section">
        <h2>Why Work With Us?</h2>
        <ul>
          <li>Opportunity to work in a prestigious academic institution</li>
          <li>Collaborate on innovative research and international projects</li>
          <li>Competitive pay and government-approved benefits</li>
          <li>Access to advanced laboratories and computing facilities</li>
          <li>Supportive environment for learning and growth</li>
        </ul>
      </section>

      {/* Application Info */}
      <section className="careers-section">
        <h2>How to Apply</h2>
        <p>Interested candidates are requested to submit their updated CV, cover letter, and relevant documents to <a href="mailto:careers@annauniv.edu">careers@annauniv.edu</a>. Please mention the position applied for in the subject line.</p>
        <p>Application deadline: <strong>May 15, 2025</strong></p>
      </section>

      {/* CTA */}
      <div className="careers-footer">
        <p>Looking for a meaningful career in education and innovation? Join Anna University and help us shape the future.</p>
        <button className="apply-btn">Explore All Jobs</button>
      </div>
    </div>
  );
};

export default Careers;
