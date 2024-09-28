import React from 'react';
import imageSrc from '../../../../assets/edu.jpeg'; 

import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={imageSrc} alt="EduAid Image" />
        </div>
        <div className="about-info">
          <h2>About us</h2>
          <p>
            EduAid was founded in 2023 with a mission
            to provide higher educational opportunities to promising African
            students in need, fostering local and international partnerships within the education sector.
          </p>
          <p>
            Our team comprises passionate educators, tech enthusiasts, 
            and creative minds who strive to make a difference
            by breaking barriers to education and enabling talented 
            individuals to reach their full potential.
          </p>
          <p>
            We believe in the transformative power of education. 
            Through strategic collaborations with educational
            institutions and stakeholders, we aim to create pathways 
            for underprivileged yet brilliant minds to thrive
            and contribute to a brighter future.
          </p>
          <p>
            Join us in our commitment to transforming lives, communities, 
            and the world through accessible and inclusive
            education.
          </p>
        </div>
      </div>
      <button className="learn-more-btn">Learn More About Us</button>
    </div>
  );
};

export default About;
