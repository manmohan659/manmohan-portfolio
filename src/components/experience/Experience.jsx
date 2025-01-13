import React from 'react';
import TimelineItem from '../common/TimelineItem';

const Experience = () => {
  const experienceData = [
    {
      title: "Software Developer",
      subtitle: "Accelya",
      period: "July 2022 – July 2024",
      description: "Led development of AI-powered solutions for meeting note analysis and mutual fund prediction."
    },
    {
      title: "Full Stack Software Engineer",
      subtitle: "Tata Consultancy Services",
      period: "Aug 2020 - Aug 2022",
      description: "Implemented SSO solutions and developed ETL pipelines for data consolidation."
    },
    {
      title: "Data Science Intern",
      subtitle: "Indian Institute of Tropical Meteorology",
      period: "Jun 2019 - Apr 2020",
      description: "Developed deep learning models for meteorological data analysis."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="relative">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;