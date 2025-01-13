import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const Navigation = () => {
  const { isDark, setIsDark } = React.useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConnect, setShowConnect] = useState(false);
  const connectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (connectRef.current && !connectRef.current.contains(event.target)) {
        setShowConnect(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' }
  ];

  const socialLinks = [
    { icon: 'github', href: 'https://github.com/yourusername' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/yourusername' },
    { icon: 'mail', href: 'mailto:manmohan659@gmail.com' }
  ];

  // Added click handler for menu items to close mobile menu
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            onClick={handleMenuClick}
          >
            MS
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={handleMenuClick}
              >
                {item.label}
              </a>
            ))}
            
            {/* Connect Button */}
            <div className="relative" ref={connectRef}>
              <button
                onMouseEnter={() => setShowConnect(true)}
                onClick={() => setShowConnect(!showConnect)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Connect
              </button>
              
              {showConnect && (
                <div 
                  className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                  onMouseLeave={() => setShowConnect(false)}
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.icon}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
                    >
                      {link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? 
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : 
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? 
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : 
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={handleMenuClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;