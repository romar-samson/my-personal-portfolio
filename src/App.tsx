import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to html tag whenever darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300 bg-transparent">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10 w-full pt-20 min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer id="contacts" className="text-center py-8 text-sm text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#09090B] transition-colors duration-300">
         <p>© {new Date().getFullYear()} Romar Samson. All rights reserved.</p>
      </footer>

      {/* Floating Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-yellow-400 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}

export default App;
