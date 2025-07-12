// components/PageProgressBar.tsx
"use client";

import React, { useEffect, useState } from "react";

const PageProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroNavbarHeight = 600; // Approx height of Navbar + HeroSection combined (adjust as needed)

      // Show bar only if scrolled beyond hero + navbar height
      setShowBar(scrollTop > heroNavbarHeight);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showBar) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-1/4 right-4 md:right-10 h-1/4 w-1 bg-slate-300 bg-opacity-30 z-[9999]"
    >
      <div
        className="bg-slate-900 w-full origin-top transition-all duration-150 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default PageProgressBar;
