"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import AboutRFIDSecurity from "./AboutRFIDSecurity";
import Link from "next/link";

// Animated Dot with dark colors
const AnimatedDot: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        rotate: 45,
        transition: { delay, duration: 0.5, type: "spring", stiffness: 120 },
      });
    } else {
      controls.start({ scale: 0, opacity: 0, rotate: 0 });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={controls}
      whileHover={{
        scale: 1.5,
        boxShadow: "0 0 8px rgba(30,41,59,0.9)",
      }}
      className="w-2.5 h-2.5 bg-gray-900 shadow-[0_0_6px_rgba(30,41,59,0.7)] transform rotate-90"
    />
  );
};

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
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.1 });

  const animateControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animateControls.start("visible");
    } else {
      animateControls.start("hidden");
    }
  }, [inView, animateControls]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center font-['Poppins'] text-gray-900"
        id="#"
      
      >
        {/* Background */}
        <Image
          src="/bg/bg2.jpg"
          alt="TrustLink background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-white/50 z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[80%] lg:w-[70%] h-[80%] flex items-center justify-center">
            {/* Left Dot Pattern */}
            <div className="absolute left-4 md:left-10 bottom-0 transform -translate-y-1/2 hidden md:flex flex-col gap-3 z-30">
              {dotPattern.map((row, rowIdx) => (
                <div key={`left-${rowIdx}`} className="flex gap-2">
                  {row.map((dot, colIdx) =>
                    dot ? (
                      <AnimatedDot key={`ldot-${rowIdx}-${colIdx}`} delay={0.05 * (rowIdx + colIdx)} />
                    ) : null
                  )}
                </div>
              ))}
            </div>

            {/* Hero Text */}
            <motion.div
              className="text-center px-4 md:px-10 z-30"
              initial="hidden"
              animate={animateControls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
                hidden: { opacity: 0, y: -40 },
              }}
            >
              <motion.div
                className="h-1 w-[40%] bg-gray-900 mx-auto mb-4 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.h1
                className="text-5xl md:text-8xl lg:text-[144px] font-extrabold tracking-wide uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                TrustLink
              </motion.h1>
              <motion.p
                className="text-md tracking-widest mt-4 text-slate-700 uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Where trust meets technology to redefine security.
              </motion.p>
              <motion.div
                className="mt-8 flex gap-6 justify-center flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: 1.2 }}
              >
                <button className="px-6 py-2 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white font-semibold hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 transition duration-300 shadow-md shadow-gray-900/70">
                  <Link href="#scan">Scan RFID</Link>
                </button>
                <button className="px-6 py-2 border-2 border-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-gray-900 bg-transparent hover:bg-gradient-to-r hover:from-slate-800 hover:via-slate-700 hover:to-slate-600 hover:text-white transition duration-300 shadow-sm shadow-gray-900/50">
                  <Link href="#knowus">Learn More</Link>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Dot Pattern */}
            <div className="absolute right-4 md:right-10 top-1/6 transform -translate-y-1/2 rotate-180 hidden md:flex flex-col gap-3 z-30">
              {dotPattern.map((row, rowIdx) => (
                <div key={`right-${rowIdx}`} className="flex gap-2">
                  {row.map((dot, colIdx) =>
                    dot ? (
                      <AnimatedDot key={`rdot-${rowIdx}-${colIdx}`} delay={0.1 + 0.05 * (rowIdx + colIdx)} />
                    ) : null
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Vertical Line + 3 Dots Below */}
          <div className="absolute right-4 md:right-10 bottom-1/6 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-30">
            <div className="w-1 h-24 bg-gray-900 rounded-2xl" />
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
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <div className="w-1 h-6 bg-gray-900 rounded-full animate-bounce" />
          <span className="text-xs tracking-wider text-gray-900/70">Scroll</span>
        </motion.div>
      </section>
      <AboutRFIDSecurity />
    </>
  );
};

export default HeroSection;
