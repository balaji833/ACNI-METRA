import React from 'react';  
import './Blog.css'; // Import your CSS file for styling                  
const Blog = () => (
  <div className="blog-page">
    <h1>Anna University Blog</h1>
    <p>Welcome to the Anna University blog! Stay updated with the latest news, events, research, and insights from our community.</p>

    {/* Blog Post Section */}
    <div className="blog-posts">
      <div className="blog-post">
        <h2>Innovations in Engineering: Shaping the Future</h2>
        <p><em>Published on April 15, 2025 by Dr. Rajesh Kumar</em></p>
        <p>At Anna University, we are constantly exploring new horizons in engineering. Our recent breakthroughs in sustainable technologies are changing the landscape of modern engineering...</p>
        <a href="#">Read More &raquo;</a>
      </div>

      <div className="blog-post">
        <h2>Student Achievements in National Competitions</h2>
        <p><em>Published on April 10, 2025 by Prof. Priya Nair</em></p>
        <p>Anna University students have recently excelled in several national-level competitions. From robotics to software engineering, our students continue to make us proud...</p>
        <a href="#">Read More &raquo;</a>
      </div>

      <div className="blog-post">
        <h2>Exploring the Future of Artificial Intelligence</h2>
        <p><em>Published on April 5, 2025 by Dr. Manoj Sharma</em></p>
        <p>Artificial Intelligence is one of the most exciting fields of study at Anna University. Join us as we delve into the future of AI and its potential to revolutionize industries...</p>
        <a href="#">Read More &raquo;</a>
      </div>
    </div>

    {/* Categories Section */}
    <div className="blog-categories">
      <h3>Blog Categories</h3>
      <ul>
        <li><a href="#">Research</a></li>
        <li><a href="#">Student Life</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Innovations</a></li>
        <li><a href="#">Announcements</a></li>
      </ul>
    </div>

    {/* Newsletter Signup */}
    <div className="newsletter-signup">
      <h3>Stay Updated!</h3>
      <p>Subscribe to our newsletter to receive the latest updates and blog posts directly in your inbox.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
);

export default Blog;
