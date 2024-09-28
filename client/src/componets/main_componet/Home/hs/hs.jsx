// Homeslide.jsx

import React, { useState, useEffect } from 'react';
import './hs.css';
import img1 from '../../../../assets/grad1.jpeg';
import img2 from '../../../../assets/grad2.jpeg';
import img3 from '../../../../assets/grad3.jpeg';
import img4 from '../../../../assets/grad4.jpeg';
import img5 from '../../../../assets/grad5.jpeg';
import img6 from '../../../../assets/grad6.jpeg';
import img7 from '../../../../assets/grad7.jpeg';
import img8 from '../../../../assets/grad8.jpeg';
import img9 from '../../../../assets/grad9.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Homeslide = () => {
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      
      // Ensure the flipped image is different from the current one
      let flippedIndex = randomIndex;
      while (flippedIndex === currentImageIndex) {
        flippedIndex = Math.floor(Math.random() * images.length);
      }

      setCurrentImageIndex(randomIndex);
      setFlippedIndexes((prevIndexes) => [...prevIndexes, flippedIndex]);

      // Reset flippedIndexes after a certain duration (3 seconds in this case)
      setTimeout(() => {
        setFlippedIndexes([]);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleImageClick = (index) => {
    setFlippedIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  return (
    <div className="homeslide-container h-[70vh] w-full relative overflow-hidden flex">
      <div className="homeslide-text-container text-white flex-1 p-8">
        <h1 className="text-4xl font-extrabold mb-4">
          Unlock Your Future with EduAidAfrica
        </h1>
        <p className="text-lg mb-8">
          Empowering dreams, shaping destinies. At EduAidAfrica, we believe in the power of education to transform lives. Our platform connects ambitious students with life-changing scholarship opportunities, paving the way for a brighter future. Join us in the journey of realizing your academic aspirations and securing the key to success.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
          Get Started
        </button>
      </div>
      <div className="homeslide-images-container flex-1">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`homeslide-image-container ${flippedIndexes.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="homeslide-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homeslide;
