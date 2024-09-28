import React from 'react';
import './sponsors.css';

// Import the sponsor icons
import sponsor1Icon from '../../../../assets/mastercard.svg';
import sponsor2Icon from '../../../../assets/university.svg';
import sponsor3Icon from '../../../../assets/rmit.svg';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h2 className="sponsors-header">Our Sponsors</h2>
      <div className="sponsors-logos">
        {/* Displaying the three sponsor icons */}
        <div className="sponsor-logo">
          <img src={sponsor1Icon} alt="Sponsor 1" />
        </div>
        <div className="sponsor-logo">
          <img src={sponsor2Icon} alt="Sponsor 2" />
        </div>
        <div className="sponsor-logo">
          <img src={sponsor3Icon} alt="Sponsor 3" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
