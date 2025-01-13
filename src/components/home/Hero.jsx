import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from '../common/SocialLink';

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Manmohan Sharma
        </h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          AI Researcher & Full Stack Developer
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink icon={<Github size={24} />} href="https://github.com/manmohan659" />
          <SocialLink icon={<Linkedin size={24} />} href="www.linkedin.com/in/manmohan-sharma-716661167" />
          <SocialLink icon={<Mail size={24} />} href="mailto:manmohan659@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Hero;