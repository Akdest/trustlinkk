"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-16 text-white">
        {/* Logo */}
        <div className="text-emerald-400 font-extrabold text-xl md:text-2xl cursor-pointer select-none">
          TrustLink
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-8 uppercase font-semibold tracking-wide">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger Button for sm & md */}
        <button
          aria-label="Toggle sidebar"
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
        >
          <span className="block h-1 w-6 bg-white rounded-sm" />
          <span className="block h-1 w-6 bg-white rounded-sm" />
          <span className="block h-1 w-6 bg-white rounded-sm" />
        </button>
      </div>

      {/* Sidebar Overlay + Slide Menu */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-64 bg-[#0f172a] shadow-lg z-50 p-6 flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                className="self-end text-white text-2xl font-bold"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-4 mt-4 uppercase font-semibold tracking-wide">
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className="text-white hover:text-emerald-400 transition"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
