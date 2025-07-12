// components/GoToTopButton.tsx
"use client";

import { ArrowUpIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const GoToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className="fixed bottom-8 right-8  p-3 bg-slate-900 text-white font-semibold tracking-wide uppercase shadow-md transition hover:bg-slate-700 focus:outline-none"
      style={{ borderRadius: 0 }}
    >
      <ArrowUpIcon size={24} className="inline-block " />
    </button>
  );
};

export default GoToTopButton;
