import React from 'react';
import TimelineItem from '../common/TimelineItem';

const Education = () => {
    const educationData = [
      {
        title: "Master of Technology in Computer Science",
        subtitle: "Indian Institute of Technology, Delhi",
        period: "2018 - 2020",
        description: "Specialized in Artificial Intelligence and Machine Learning. Research focused on deep learning applications in healthcare.",
        extra: "9.2/10 GPA"
      },
      {
        title: "Bachelor of Technology in Computer Science",
        subtitle: "Delhi Technological University",
        period: "2014 - 2018",
        description: "Foundation in computer science with focus on software engineering and data structures.",
        extra: "8.8/10 GPA"
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
