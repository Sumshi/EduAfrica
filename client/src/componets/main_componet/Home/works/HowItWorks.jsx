import React from 'react';
import './HowItWorks.css';
import image1 from '../../../../assets/student.svg';
import image2 from '../../../../assets/tick.svg';
import image3 from '../../../../assets/graph.svg';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How EduAid Works</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon">1</div>
          <img src={image1} alt="Step 1" className="step-image" />
          <h3>Create Your Profile</h3>
          <p>Join EduAid and build your profile by sharing your educational journey, interests, and aspirations.</p>
          <span className="arrow-right"></span>
        </div>
        <div className="step">
          <div className="step-icon">2</div>
          <img src={image2} alt="Step 2" className="step-image" />
          <h3>Receive Personalized Matches</h3>
          <p>Our intelligent system matches you with tailored educational opportunities perfectly aligned with your goals.</p>
          <span className="arrow-right"></span>
        </div>
        <div className="step">
          <div className="step-icon">3</div>
          <img src={image3} alt="Step 3" className="step-image" />
          <h3>Effortlessly Track Your Applications</h3>
          <p>Stay organized with real-time updates on application progress, deadlines, and important notifications - all in one place.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
