import React from 'react';

const TimelineItem = ({ title, subtitle, period, description, extra }) => (
  <div className="relative pl-8 group">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600/50 dark:bg-blue-500/50"></div>
    <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full -left-1.5 top-2 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-colors duration-300"></div>
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-blue-600 dark:text-blue-400">{period}</span>
      </div>
      <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">{subtitle}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      {extra && (
        <p className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 text-sm font-medium">
          {extra}
        </p>
      )}
    </div>
  </div>
);

export default TimelineItem;