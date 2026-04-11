import React from 'react';
import { ArrowRight, Database, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiTypescript, SiVite, SiFramer,
  SiNextdotjs, SiGraphql, SiStripe, SiMysql, SiLaravel, SiXampp
} from 'react-icons/si';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 'proj-1',
      title: 'La Verdad Club Integration System',
      desc: 'A comprehensive management system designed for seamless club operations. Features robust social authentication, tailored APIs, and an intuitive, highly structured organizational dashboard.',
      image: '/lvcis.png',
      tech: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Shadcn UI', icon: <LayoutTemplate size={14} className="text-gray-900 dark:text-white" /> },
        { name: 'REST API', icon: <Database size={14} className="text-gray-500" /> },
        { name: 'Sanctum & Socialite', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'XAMPP', icon: <SiXampp className="text-[#FB7A24]" /> }
      ],
      creator: 'uqlzsam'
    },
    {
      id: 'proj-2',
      title: 'Personal Portfolio',
      desc: 'A highly performant, fully responsive personal portfolio designed with a sleek, minimalist aesthetic. Features a custom dark-mode engine, smooth framer-motion scroll sequences, and pristine code architecture.',
      image: '/portfolio.png',
      tech: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Framer Motion', icon: <SiFramer className="text-black dark:text-white" /> },
        { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> }
      ],
      creator: 'uqlzsam'
    },
    {
      id: 'proj-3',
      title: 'Sakai',
      desc: 'In Development',
      image: '/sakai.jpg',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098] dark:text-[#F144B3]" /> },
        { name: 'Stripe', icon: <SiStripe className="text-[#008CDD]" /> }
      ],
      creator: 'uqlzsam'
    }
  ];

  return (
    <div id="projects" className="w-full max-w-5xl mx-auto my-24 px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex justify-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 border-[#4285F4] pb-2 inline-block px-4 transition-colors duration-300">
          Featured Projects
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => {
          const isDev = proj.desc === 'In Development';

          return (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`bg-white dark:bg-[#121214] rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col transition-all duration-500 overflow-hidden group ${
                isDev ? 'opacity-90' : 'hover:shadow-xl dark:hover:shadow-blue-900/10 hover:-translate-y-2'
              }`}
            >
              
              {/* Image section with tooltip on hover */}
              <div className={`relative h-56 overflow-hidden bg-gray-50 dark:bg-[#0E0E10] pt-0 ${!isDev ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover transition-all duration-700 bg-gray-200 dark:bg-gray-800 ${
                    isDev ? 'blur-sm scale-110 opacity-60 grayscale-[50%]' : 'group-hover:scale-105 group-hover:blur-[2px]'
                  }`}
                />
                
                {/* Full Development Overlay directly locking the image */}
                {isDev && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/40 backdrop-blur-[2px]">
                    <span className="bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                       Work in Progress
                    </span>
                  </div>
                )}

                {/* Tooltip Overlay (Only show if not in development) */}
                {!isDev && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold text-gray-900 dark:text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Designed by {proj.creator}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold transition-colors duration-300 mb-3 ${isDev ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                  {proj.title}
                </h3>
                <p className={`text-sm font-semibold flex-grow mb-6 leading-relaxed transition-colors duration-300 ${isDev ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>
                  {proj.desc}
                </p>
                
                <div className={`flex flex-wrap gap-2.5 mb-8 transition-all ${isDev ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                  {proj.tech.map((t) => (
                    <span key={t.name} className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-900/50 shadow-sm hover:border-blue-200 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-[#1E1E23] hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default">
                      <span className="text-[1.1rem]">{t.icon}</span>
                      {t.name}
                    </span>
                  ))}
                </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto transition-colors duration-300">
                {proj.desc === 'In Development' ? (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 dark:text-amber-400 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    In Development
                  </span>
                ) : (
                  <a 
                    href="#_" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-[#4285F4] dark:hover:text-[#4285F4] transition-colors group/link"
                  >
                    View Project 
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
};
