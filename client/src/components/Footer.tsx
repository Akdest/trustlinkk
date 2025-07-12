"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1e1e2f] text-slate-300 px-8 py-10 font-['Poppins'] select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo/Name */}
        <div className="text-xl font-extrabold text-slate-100 tracking-widest">
          TrustLink
        </div>

        {/* Middle: Navigation */}
        <nav className="flex space-x-8 uppercase text-sm font-semibold tracking-wide">
          <a href="#" className=" transition-colors duration-300">Home</a>
          <a href="#knowus" className=" transition-colors duration-300">About</a>
          <a href="#scan" className=" transition-colors duration-300">Services</a>
          <a href="#contact" className=" transition-colors duration-300">Contact</a>
        </nav>

        {/* Right: Copyright */}
        <div className="text-xs text-slate-500 select-text">
          &copy; {new Date().getFullYear()} TrustLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
