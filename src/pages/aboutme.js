// src/components/About.js
import React from 'react';
import './AboutMe.css'; // Make sure to style this component

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          {/* Replace with your image URL or use an <img> tag */}
          <img src="/path-to-your-image.jpg" alt="Michael Setji" className="profile-pic" />
        </div>
        <div className="about-bio">
          <p>
            Hello! My name is Michael Setji. I am a passionate ECE and Computer Science major with a
            love for building innovative solutions. I enjoy creating applications, solving
            technical challenges, and learning about emerging technologies. Outside of tech, I
            spend time exploring new hobbies and connecting with others who share my enthusiasm for
            discovery and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;