import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 min-h-screen w-full pointer-events-none z-0 overflow-hidden">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#09090B] transition-colors duration-300"></div>

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Light Mode Blobs (Using native high-performance radial gradients instead of expensive CSS blur filters) */}
      <div className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(191,219,254,0.4)_0%,transparent_60%)] animate-blob dark:hidden will-change-transform pointer-events-none"></div>
      <div className="absolute top-[0%] right-[0%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(165,243,252,0.4)_0%,transparent_60%)] animate-blob animation-delay-2000 dark:hidden will-change-transform pointer-events-none"></div>
      <div className="absolute top-[30%] left-[30%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(233,213,255,0.4)_0%,transparent_60%)] animate-blob animation-delay-4000 dark:hidden will-change-transform pointer-events-none"></div>

      {/* Dark Mode Glowing Auroras */}
      <div className="hidden dark:block absolute top-[-10%] left-[10%] w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_60%)] mix-blend-lighten animate-blob will-change-transform pointer-events-none"></div>
      <div className="hidden dark:block absolute top-[0%] right-[0%] w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(8,145,178,0.15)_0%,transparent_60%)] mix-blend-lighten animate-blob animation-delay-2000 will-change-transform pointer-events-none"></div>
      <div className="hidden dark:block absolute top-[30%] left-[30%] w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_60%)] mix-blend-lighten animate-blob animation-delay-4000 will-change-transform pointer-events-none"></div>
    </div>
  );
};
