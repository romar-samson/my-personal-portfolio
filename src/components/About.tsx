import React from 'react';
import { Sparkles, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div id="about" className="w-full max-w-5xl mx-auto my-32 px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 flex justify-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 border-[#4285F4] pb-2 inline-block px-4 relative transition-colors duration-300">
          About Me
        </h2>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white dark:bg-[#121214] rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-12 relative overflow-hidden group hover:shadow-md transition-all duration-500"
      >
        {/* Soft Decorative Ambient Background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-3xl transition-opacity group-hover:opacity-100 opacity-60"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-50 dark:bg-gray-900/50 rounded-full blur-3xl transition-colors duration-300"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-snug transition-colors duration-300">
              Transforming ideas into clean, intuitive user experiences.
            </h3>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-relaxed border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/50 dark:from-blue-900/10 to-transparent py-2 transition-colors duration-300">
              I’m a UI/UX designer and front-end developer focused on creating clean, accessible, and responsive interfaces. I enjoy bridging the gap between design and development turning thoughtful design decisions into functional, real world applications.
            </p>
            <p className="text-base font-semibold text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              Currently, I’m focused on building front-end projects and refining my personal portfolio while continuously learning advanced layout techniques, accessibility, and modern design to code workflows. I’m passionate about improving my craft, exploring design trends, and creating seamless user experiences through both design and code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex gap-4 p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all shadow-sm cursor-default"
             >
               <div className="mt-1 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0 transition-colors duration-300">
                 <Sparkles size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">Seamless Flows</h4>
                 <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 transition-colors duration-300">Translating multi-layered challenges into clear and functional user journeys.</p>
               </div>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex gap-4 p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all shadow-sm cursor-default"
             >
               <div className="mt-1 flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 shrink-0 transition-colors duration-300">
                 <Target size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">Interactive Motion</h4>
                 <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 transition-colors duration-300">Enhancing usability through purposeful animations and tactile feedback.</p>
               </div>
             </motion.div>

             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="flex gap-4 p-5 bg-white dark:bg-[#18181B] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all shadow-sm cursor-default"
             >
               <div className="mt-1 flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0 transition-colors duration-300">
                 <Zap size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">Robust Core</h4>
                 <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 transition-colors duration-300">Ensuring every interface is backed by a stable, high-efficiency architecture.</p>
               </div>
             </motion.div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};
