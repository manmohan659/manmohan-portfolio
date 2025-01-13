import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, status = 'completed', tags = [], demoUrl }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 h-full transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-white/90">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm rounded-full 
                bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200
                group-hover:bg-white/20 group-hover:text-white
                transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {status === 'upcoming' ? (
          <div className="mt-4 text-purple-600 dark:text-purple-400 group-hover:text-white font-medium">
            Coming Soon! 🚀
          </div>
        ) : demoUrl && (
          <a 
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-white font-medium hover:underline"
          >
            Try it live <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['completed', 'upcoming']),
  tags: PropTypes.arrayOf(PropTypes.string),
  demoUrl: PropTypes.string
};

export default ProjectCard;