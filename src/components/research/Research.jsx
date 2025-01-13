import React from 'react';
import ResearchCard from './ResearchCard';

const Research = () => {
  const researchData = [
    {
      title: "Respiratory Sound Classification for Remote Diagnosis",
      description: "Published research on machine learning techniques for respiratory sound classification, focusing on improving remote diagnosis capabilities through advanced audio processing and neural network architectures.",
      paperUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3697586",
      tags: ["Machine Learning", "Healthcare", "Audio Processing", "Deep Learning"]
    },
    // You can add more research papers here following the same structure
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="research">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Research
        </h2>
        <div className="space-y-8">
          {researchData.map((research, index) => (
            <ResearchCard 
              key={index}
              {...research}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;