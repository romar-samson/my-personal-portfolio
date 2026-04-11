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
            className="bg-white dark:bg-[#121214] rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-400 group"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-[#18181B] rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1D] group-hover:bg-white dark:group-hover:bg-[#1E1E23] text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-700 hover:scale-105 transition-all duration-300 shadow-sm cursor-default"
                >
                  <span className="text-[1.25rem]">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
