import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pt-40 pb-16 px-6 md:px-0 text-center flex flex-col items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="mb-4"
      >
        <h2 className="text-xl md:text-2xl font-bold text-[#4285F4] uppercase tracking-widest">
          Hi, I am Romar Samson
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mb-8 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight transition-colors duration-300">
          UI/UX Designer<br />& Frontend Developer.
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="mb-12 max-w-xl mx-auto"
      >
        <p className="text-xl text-gray-600 dark:text-gray-400 font-light transition-colors duration-300 leading-relaxed">
          Building the bridge between logic and interaction to craft premium digital experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a 
          href="#projects" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-[#4285F4] dark:hover:bg-[#4285F4] dark:hover:text-white rounded-2xl transition-all shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        >
          View my projects
        </a>
      </motion.div>
    </div>
  );
};
