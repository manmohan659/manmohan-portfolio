import React from 'react';
import TimelineItem from '../common/TimelineItem';

const Education = () => {
    const educationData = [
        {
          title: "Master of Science in Computer Science (AI)",
          subtitle: "University of San Francisco, San Francisco",
          period: "2024 - 2026",
          description: "Specialized in Artificial Intelligence and Machine Learning. Research focused on deep learning applications in healthcare."
        },
        {
          title: "Bachelor of Engineering in Computer Science",
          subtitle: "University of Mumbai",
          period: "2016 - 2020",
          description: "Foundation in computer science with focus on software engineering and data structures."
        }
    ];
  
    return (
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="education">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="relative">
            {educationData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Education;
