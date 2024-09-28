import React, { useState, useEffect } from 'react';
import img_01 from "../../assets/hero-bg-1.jpg";
import img_02 from "../../assets/hero-bg-2.jpg";
import img_03 from "../../assets/hero-bg-3.jpg";
import img_04 from "../../assets/hero-bg-4.jpg";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img_01, img_02, img_03, img_04];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // Auto navigate every 2 seconds

    return () => {
      clearInterval(autoPlay); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="relative">
      <div className="slideshow relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide absolute grid w-screen h-90vh transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide} className='w-full h-full object-cover' alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
