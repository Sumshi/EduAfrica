import React, { useEffect } from 'react';
import './goal.css';
import africanExcellenceImage from '../../../../assets/african_excellence.jpeg';
import communityGrantImage from '../../../../assets/community_grant.jpeg';
import stemEducationImage from '../../../../assets/stem_education.jpeg';
import womenLeadershipImage from '../../../../assets/women_leadership.jpeg';

const ScholarshipCard = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="maincards flex rounded-md flex-col items-center p-6 gap-4 animate-on-scroll">
      <div className="imagecontainer">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="flex flex-col itemcenter justify-center gap-4">
        <h2 className='font-normal font-qicksand text-center capitalize text-gray-900 text-[1.5rem]'>
          {title}
        </h2>
        <p className="text-gray-500 font-medium text-center capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

const Goal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    const cards = document.querySelectorAll('.animate-on-scroll');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSeeMore = () => {
    const arrow = document.querySelector('.arrow');
    arrow.classList.add('moveForward');
    setTimeout(() => {
      arrow.classList.remove('moveForward'); // Reset the arrow after a short delay
    }, 500); // Adjust the delay time if needed
    console.log('See More clicked!');
  };

  return (
    <section className='hero p-12 w-full h-full'>
      <div className="flex flex-col gap-7">
        <div className="head text-center flex justify-center items-center flex-col">
          <h1 className="header mb-3 font-sm text-4xl text-gray-100">
            Empowering African Students with Scholarships
          </h1>
          <p className="font-medium text-gray-100 text-xl mb-8">
            Our Goal: Bridging the Gap for African Students to Access Quality Education
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="cards flex flex-row gap-4 justify-between relative p-8">
          <ScholarshipCard
            title="African Excellence Scholarship"
            description="Supporting outstanding African students to pursue higher education by covering tuition fees and living expenses."
            imageSrc={africanExcellenceImage}
            altText="African Excellence Scholarship"
          />
          <ScholarshipCard
            title="Community Development Grant"
            description="Providing financial aid for students passionate about community development and social impact initiatives across Africa."
            imageSrc={communityGrantImage}
            altText="Community Development Grant"
          />
          <ScholarshipCard
            title="STEM Education Fund"
            description="Encouraging students in Science, Technology, Engineering, and Mathematics (STEM) fields with funding for educational pursuits."
            imageSrc={stemEducationImage}
            altText="STEM Education Fund"
          />
          <ScholarshipCard
            title="Women in Leadership Scholarship"
            description="Empowering young African women by offering scholarships for leadership and entrepreneurial programs."
            imageSrc={womenLeadershipImage}
            altText="Women in Leadership Scholarship"
          />
          {/* Add more ScholarshipCard components if needed */}
        </div>

        {/* See More Button */}
        <div className="see-more flex items-center justify-center mt-8">
          <button className="see-more-button" onClick={handleSeeMore}>
            See More <span className="arrow">&#10148;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Goal;
