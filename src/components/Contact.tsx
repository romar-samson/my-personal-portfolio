import React from 'react';
import { Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div id="contacts" className="w-full max-w-6xl mx-auto my-32 px-6 md:px-12">
      <div className="bg-white dark:bg-[#121214] rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 p-8 md:p-16 relative overflow-hidden transition-colors duration-300">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 dark:from-blue-900/10 to-transparent pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10"
        >
          
          {/* Left Column: Heading and Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 transition-colors duration-300">
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  something great.
                </span>
              </h2>
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400 leading-relaxed max-w-md transition-colors duration-300">
                I'm currently available for freelance projects and full-time opportunities. If you have an exciting idea or just want to say hi, send me a message!
              </p>
            </div>

            <div className="mt-16 lg:mt-0">
              <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-gray-800 pb-2 inline-block transition-colors duration-300">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Github Profile" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-[#18181B] text-gray-700 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all shadow-sm group border border-gray-100 dark:border-gray-800">
                  <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] hover:text-white dark:hover:text-white transition-all shadow-sm group border border-blue-100 dark:border-blue-900/50">
                  <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble Portfolio" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-50 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400 hover:bg-[#EA4C89] dark:hover:bg-[#EA4C89] hover:text-white dark:hover:text-white transition-all shadow-sm group border border-pink-100 dark:border-pink-900/50">
                  <FaDribbble size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white dark:bg-[#18181B] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-blue-900/5 dark:shadow-none transition-colors duration-300">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#202024] border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#202024] border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project or idea..." 
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#202024] border border-gray-100 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gray-900 dark:bg-white hover:bg-[#4285F4] dark:hover:bg-[#4285F4] text-white dark:text-gray-900 hover:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-md">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
