import React from 'react';
import { Layout, Server, Palette, Wrench, Code, FileCode, Braces } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPython, SiDotnet, SiPhp, SiLaravel, SiMysql,
  SiFigma, SiGit, SiGithub, SiVercel, SiVite
} from 'react-icons/si';

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-[#4285F4] dark:text-blue-400" size={24} />,
      skills: [
        { name: 'HTML', icon: <Code className="text-[#E34F26]" size={16} /> },
        { name: 'CSS', icon: <FileCode className="text-[#1572B6]" size={16} /> },
        { name: 'JavaScript', icon: <Braces className="text-[#F7DF1E]" size={16} /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'React Native', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Framer Motion', icon: <SiFramer className="text-black dark:text-white" /> }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-emerald-500 dark:text-emerald-400" size={24} />,
      skills: [
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'C#', icon: <SiDotnet className="text-[#512BD4]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933] dark:text-[#43B943]" /> },
        { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> }
      ]
    },
    {
      title: 'Design',
      icon: <Palette className="text-violet-500 dark:text-violet-400" size={24} />,
      skills: [
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: 'Framer', icon: <SiFramer className="text-black dark:text-white" /> }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="text-amber-500 dark:text-amber-400" size={24} />,
      skills: [
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
        { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
        { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> }
      ]
    }
  ];

  return (
    <div id="techstack" className="w-full max-w-5xl mx-auto my-24 px-6 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex justify-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white border-b-4 border-[#4285F4] pb-2 inline-block px-4 transition-colors duration-300">
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-white dark:bg-[#0E0E11] rounded-[2.5rem] p-8 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"
          >
            {/* Ambient Background Blur on Hover */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl group-hover:scale-[1.8] group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-all duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-14 h-14 bg-gray-50 dark:bg-[#18181B] border border-gray-100 dark:border-gray-800 rounded-2xl group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 dark:group-hover:bg-blue-500/10 dark:group-hover:border-blue-900/30 transition-all duration-500 shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="group/skill flex items-center gap-2.5 px-4 py-2 bg-gray-50/80 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm font-bold rounded-xl border border-gray-200/80 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <span className="text-[1.2rem] group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="tracking-wide">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
