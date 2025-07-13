"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#knowus" },
  { label: "Services", href: "#scan" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] font-['Poppins']">
      <div
        className={`flex justify-between items-center px-6 md:px-10 h-16 max-w-7xl mx-auto transition-all duration-300 
        ${isScrolled ? "bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm" : ""}`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Left: Logo */}
          <div className="text-slate-900 font-extrabold text-xl md:text-2xl cursor-pointer select-none">
            TrustLink
          </div>

          {/* Center: Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setSidebarOpen(true)}
            className="flex flex-row items-center gap-1 w-auto h-10"
          >
            <div className="flex flex-col gap-1">
              <span className="block h-1 w-8 bg-slate-900" />
              <span className="block h-1 w-8 bg-slate-900" />
            </div>
            <span className="text-sm text-slate-900 font-semibold tracking-widest uppercase">
              Menu
            </span>
          </button>

          {/* Right: Reach Us - Hidden on small screens */}
          <div className="hidden lg:block px-8 py-2 text-md text-slate-900 border-4 border-slate-900 hover:bg-slate-900 hover:text-white transition duration-300">
            <Link href="#contact">Reach Us</Link>
          </div>
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#f7f7f7]/80 backdrop-blur-md text-slate-900 z-[150] flex flex-col items-center justify-center gap-16 p-10 font-['Poppins']"
          >
            <button
              className="absolute top-6 right-1/12 text-4xl lg:text-[4rem] font-bold text-slate-900"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center gap-10 text-4xl lg:text-[4rem] tracking-wider font-extrabold">
              {navLinks.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-slate-600 transition duration-300 relative"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {label}
                  <motion.span
                    variants={{
                      rest: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 h-[3px] bg-slate-900"
                    style={{ display: "block" }}
                  />
                </motion.a>
              ))}
              <Link
                href="#contact"
                className="mt-10 px-8 py-4 text-2xl border-4 border-slate-900 hover:bg-slate-900 hover:text-white transition duration-300"
              >
                Reach Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
