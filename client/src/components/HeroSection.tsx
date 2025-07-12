"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Reusable animated dot component
const AnimatedDot: React.FC<{ delay?: number }> = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ scale: 1, opacity: 1, rotate: 45 }}
    transition={{ delay, duration: 0.5, type: "spring", stiffness: 120 }}
    whileHover={{
      scale: 1.5,
      boxShadow: "0 0 8px rgba(255,255,255,0.8)",
    }}
    className="w-2.5 h-2.5 bg-white"
  />
);

// Dot pattern shape
const dotPattern: boolean[][] = [
  [true],
  [true],
  [true, true],
  [true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white font-['Poppins']">
      {/* Background Image */}
      <Image
        src="/bg/bg3.png"
        alt="TrustLink background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Glassmorphic Container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[80%] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg flex items-center justify-center">

          {/* Left Dot Pattern */}
          <div className="absolute left-4 md:left-10 bottom-0 transform -translate-y-1/2 hidden md:flex flex-col gap-1 z-30">
            {dotPattern.map((row, rowIdx) => (
              <div key={`left-row-${rowIdx}`} className="flex gap-1">
                {row.map((dot, colIdx) =>
                  dot ? (
                    <AnimatedDot
                      key={`left-dot-${rowIdx}-${colIdx}`}
                      delay={0.05 * (rowIdx + colIdx)}
                    />
                  ) : null
                )}
              </div>
            ))}
          </div>

          {/* Hero Text */}
          <motion.div
            className="text-center px-4 md:px-10 z-30"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <motion.div
              className="h-1 w-[40%] bg-white mx-auto mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.h1
              className="text-5xl md:text-8xl lg:text-[144px] font-extrabold tracking-wide uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              TrustLink
            </motion.h1>

            <motion.p
              className="text-md tracking-widest mt-4 text-gray-200 uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
             Where trust meets technology to redefine security.
            </motion.p>

            {/* Buttons */}
          {/* Buttons */}
{/* Buttons */}
{/* Buttons */}
<motion.div
  className="mt-8 flex gap-6 justify-center flex-wrap"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  {/* Get Started: Emerald gradient with soft glow */}
  <button className="px-6 py-2 cursor-pointer bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 text-white font-semibold rounded-full hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 transition duration-300 shadow-md shadow-emerald-900/50">
    Get Started
  </button>

  {/* Learn More: Transparent with emerald gradient border & subtle glow */}
  <button className="px-6 py-2 border-2 border-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 text-white rounded-full bg-transparent hover:bg-gradient-to-r hover:from-emerald-600 hover:via-emerald-500 hover:to-emerald-400 hover:text-white transition duration-300 shadow-sm shadow-emerald-800/30">
    Learn More
  </button>
</motion.div>



          </motion.div>

          {/* Right Dot Pattern (top right corner) */}
          <div className="absolute right-4 md:right-10 top-1/6 transform -translate-y-1/2 rotate-180 hidden md:flex flex-col gap-1 z-30">
            {dotPattern.map((row, rowIdx) => (
              <div key={`right-row-${rowIdx}`} className="flex gap-1">
                {row.map((dot, colIdx) =>
                  dot ? (
                    <AnimatedDot
                      key={`right-dot-${rowIdx}-${colIdx}`}
                      delay={0.1 + 0.05 * (rowIdx + colIdx)}
                    />
                  ) : null
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Vertical Line + 3 Dots Below (outside glass) */}
        <div className="absolute right-4 md:right-10 bottom-1/6 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-30">
          <div className="w-1 h-24 bg-white rounded-2xl" />
          <div className="flex flex-col gap-5 mt-2">
            {[1, 2, 3].map((_, idx) => (
              <AnimatedDot key={`bottom-dot-${idx}`} delay={0.3 + idx * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="w-1 h-6 bg-white rounded-full animate-bounce" />
        <span className="text-xs tracking-wider text-white/70">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
