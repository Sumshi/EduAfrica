import React, { useState, useEffect } from 'react';
import './reviews.css';
import AV1 from '../../../../assets/av1.jpeg';
import AV2 from '../../../../assets/av2.jpeg';
import AV3 from '../../../../assets/av3.jpeg';
import AV4 from '../../../../assets/av4.jpeg';

const data = [
  {
    avatar: AV1,
    name: 'Bryan Williams',
    position: 'Scholarship Recipient',
    review:
      '" EduAid provided me with the scholarship that transformed my future. Being from a low-income family, it was the beacon of hope for my education. Thank you for changing lives! "',
  },
  {
    avatar: AV2,
    name: 'Adrianna Gomez',
    position: 'Former Scholarship Applicant',
    review:
      '" EduAid\'s support and guidance during my application process were invaluable. Despite not being selected, their feedback helped me refine my approach. A fantastic initiative! "',
  },
  {
    avatar: AV3,
    name: 'Hannah Patel',
    position: 'Current Scholar',
    review:
      '" EduAid has not only provided financial assistance but also mentoring. It\'s an organization that genuinely cares about its scholars, fostering growth and success. "',
  },
  {
    avatar: AV4,
    name: 'Elijah Thompson',
    position: 'High School Graduate',
    review:
      '" I aspire to be a part of EduAid\'s scholarship program. Witnessing the impact it has had on others, I believe it\'s the perfect opportunity to achieve my dreams. "',
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === data.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="w-full h-full p-10 flex items-center">
      <div className="text-center">
        <h2 className="text-black text-5xl font-semibold mb-4">
          Testimonials
        </h2>
        <h3 className="text-black text-2xl">
          Here is what our students had to say about us
        </h3>
      </div>
      <div className="testimonial_container">
        {data.map((item, index) => (
          <div
            key={index}
            className={
              index === currentTestimonial
                ? 'testimonial active'
                : 'testimonial'
            }
          >
            <div className="client_avatar">
              <img src={item.avatar} alt={`Avatar of ${item.name}`} />
            </div>
            <h5 className="text-black font-quicksand font-semibold text-xl">
              {item.name}
            </h5>
            <small className="client_position">{item.position}</small>
            <p className="client_review">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
