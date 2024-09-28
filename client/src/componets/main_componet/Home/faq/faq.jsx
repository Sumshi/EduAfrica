import React, { useState } from 'react';
import FAQImage from '../../../../assets/faq.png'; 
import './faq.css'; 

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I apply for scholarships?',
      answer: 'You can apply for scholarships by visiting our platform, navigating to the available scholarships section, and following the application instructions provided for each opportunity.'
    },
    {
      question: 'What are the eligibility criteria for scholarships?',
      answer: 'Eligibility criteria vary for each scholarship. Typically, factors such as academic merit, financial need, and specific demographic criteria might determine eligibility. Detailed requirements are specified for each scholarship on our platform.'
    },
    {
      question: 'When are scholarship application deadlines?',
      answer: 'Each scholarship has its own application deadline, which is specified in the scholarship details on our platform. It is crucial to adhere to these deadlines, as late applications may not be considered.'
    },
    {
      question: 'Are there scholarships for specific fields of study?',
      answer: 'Yes, there are scholarships available for various fields of study such as STEM, arts, business, and more. Explore our platform to find scholarships tailored to your area of interest.'
    },
    {
      question: 'How can I increase my chances?',
      answer: 'To enhance your chances of receiving a scholarship, focus on maintaining a strong academic record, actively participating in extracurricular activities, writing compelling essays, obtaining strong recommendation letters, and meeting all specified requirements outlined in the scholarship applications.'
    },
    // Add more FAQs as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-section">
        <div className="faq-header">
          <div className="header-content">
            <h2>FAQ</h2>
          </div>
          <img src={FAQImage} alt="FAQ" className="faq-image" />
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="arrow">{activeIndex === index ? 'v' : '>'}</span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
