import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timeline = [
    {
      year: '2014 - 2018',
      title: 'Junior High School',
      institution: 'Tarlac Christian Fellowship Learning Center',
      desc: 'Began my formal education. Cultivated a strong foundation in logic, mathematics, and early computer literacy.'
    },
    {
      year: '2018 - 2020',
      title: 'Senior High School',
      institution: 'GAS Track',
      desc: 'Focused on the GAS track. Discovered my early curiosity for advanced technology and computational problem solving.'
    },
    {
      year: '2020 - 2024',
      title: 'College',
      institution: 'B.S. in Information Systems',
      desc: 'Deepened my software engineering fundamentals, collaborated on full-stack academic projects, and honed my UI/UX design skills.'
    },
    {
      year: '2022',
      title: 'Hello, World!',
      institution: 'The First Line of Code',
      desc: 'Wrote my very first line of code. The magic of bringing logic to life on a screen sparked a relentless, lifelong passion for programming.'
    },
    {
      year: '2024 - Present',
      title: 'UI/UX Designer & Frontend Developer',
      institution: 'Qstrike Innovations Phils, OPC',
      desc: 'Building highly optimized, interactive, and beautifully crafted web applications for modern digital experiences.'
    }
  ];

  return (
    <div id="experience" className="w-full max-w-5xl mx-auto my-32 px-6 md:px-0">
      <div className="mb-16 flex justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 border-[#4285F4] pb-2 inline-block px-4 relative transition-colors duration-300">
          Experience & Education
        </h2>
      </div>
      
      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        
        {/* Background Line */}
        <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 bg-blue-50/50 dark:bg-gray-800 rounded-full transition-colors duration-300"></div>
        
        {/* Animated Fill Line */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-4 w-1 bg-[#4285F4] rounded-full origin-top shadow-[0_0_15px_rgba(66,133,244,0.5)] z-0"
        ></motion.div>

        <div className="space-y-12 relative pt-4 pb-4">
          {timeline.map((item, idx) => {
            const isLeftCard = idx % 2 === 0;
            
            return (
              <div key={idx} className="relative flex items-center justify-between w-full group">
                
                {/* Desktop Spacer (Hidden on Mobile) */}
                <div className={`hidden md:block w-5/12 ${!isLeftCard ? 'order-1' : 'order-3'}`}></div>
                
                {/* Content Box */}
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 z-10 ${!isLeftCard ? 'order-3' : 'order-1'}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white dark:bg-[#121214] rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl dark:hover:shadow-blue-900/10 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 relative overflow-hidden"
                  >
                     <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-lg mb-4 border border-blue-100 dark:border-blue-900/50 shadow-sm transition-colors duration-300">
                       {item.year}
                     </span>
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-1 transition-colors duration-300">{item.title}</h3>
                     <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-4 transition-colors duration-300">{item.institution}</h4>
                     <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                       {item.desc}
                     </p>
                  </motion.div>
                </div>

                {/* Center Animated Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.5 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[20px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#09090B] border-[3px] border-[#4285F4] z-20 shadow-[0_0_0_6px_rgba(255,255,255,1)] dark:shadow-[0_0_0_6px_rgba(9,9,11,1)] cursor-pointer"
                ></motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
