import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper/core';
import scholarshipImage1 from '../../../../assets/Mastercard_logo_PNG5.png';
import scholarshipImage2 from '../../../../assets/Princeton.png';
import scholarshipImage3 from '../../../../assets/Julius Berger.png';
import './N_u.css';


SwiperCore.use([Navigation, Pagination]);

SwiperCore.use([Navigation, Pagination]);

const SponsorshipCarousel = () => {
  const sponsorships = [
    {
      name: 'Mastercard Scholarship',
      details: 'Details about the Mastercard Scholarship...',
      amount: '$10,000'
    },
    {
      name: 'Princeton Scholarship',
      details: 'Details about the Princeton Scholarship...',
      amount: '$15,000'
    },
    {
      name: 'Julius Berger Scholarship',
      details: 'Details about the Julius Berger Scholarship...',
      amount: '$12,500'
    }
  ];

  // Select a random scholarship from the list
  const randomIndex = Math.floor(Math.random() * sponsorships.length);
  const randomScholarship = sponsorships[randomIndex];

  return (
    <div className="sponsorships-carousel">
      <div className="sponsorship-header">
        <h1 className="sponsorship-title">Featured Sponsorships</h1>
        <p className="sponsorship-description">
          Find exclusive opportunities for education and support
        </p>
      </div>
      <div className="sponsorship-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {sponsorships.map((sponsorship, index) => (
            <SwiperSlide key={index}>
              <div className="sponsorship-slide">
                <div className="sponsorship-content">
                  <h2 className="sponsorship-name">{sponsorship.name}</h2>
                  <p className="sponsorship-details">{sponsorship.details}</p>
                  <p className="sponsorship-amount">Amount: {sponsorship.amount}</p>
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SponsorshipCarousel;
