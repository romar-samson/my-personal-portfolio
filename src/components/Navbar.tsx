import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-md z-40 border-b border-gray-100 dark:border-gray-800 px-6 md:px-12 flex items-center justify-between transition-colors duration-300">
      <div>
        <a href="#" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer transition-colors duration-300">
          uqlz<span className="text-[#4285F4]">/</span>sam 
        </a>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contacts" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contacts</a>
        </div>
        
        <a
          href="#contacts"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-[#4285F4] hover:bg-blue-600 rounded-xl shadow-sm transition-colors"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};
