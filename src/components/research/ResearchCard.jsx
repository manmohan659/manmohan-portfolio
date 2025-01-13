import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';

const ResearchCard = ({ title, description, paperUrl, tags = [] }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      {description}
    </p>
    {tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
    <a 
      href={paperUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
    >
      Read the paper <ExternalLink className="ml-1 w-4 h-4" />
    </a>
  </div>
);

ResearchCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  paperUrl: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ResearchCard;