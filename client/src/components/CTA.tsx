"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const animationDuration = 0.6;
const ease = "easeOut";

const CTA = () => {
  // Helper for stagger delays
  const delayForIndex = (index: number) => 0.2 * index;

  return (
    <motion.section
      className="w-full min-h-screen h-screen py-24 px-6 lg:px-20 font-['Poppins'] text-white flex items-center"
      style={{
        background: `linear-gradient(135deg, #1e293b 0%, #0f172a 100%)`,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      // no variants here, but parent animates opacity for child detection
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* CTA Text */}
        <motion.div className="flex-1" initial={{ opacity: 1 }}>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(0) }}
          >
            Ready to Secure Your Supply Chain?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-[2rem] text-slate-300 max-w-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(1) }}
          >
            Harness the power of blockchain logs and real-time RFID scanning to prevent fraud, track inventory, and protect assets across your logistics ecosystem.
          </motion.p>
          <motion.hr
            className="border-slate-700 mb-8 max-w-xs"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(2) }}
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            className="text-slate-400 text-lg italic max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(3) }}
          >
            Join hundreds of businesses already boosting security and transparency with our cutting-edge solutions.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex-1 flex justify-start lg:justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: animationDuration, ease, delay: delayForIndex(4) }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white text-lg font-semibold tracking-wide uppercase transition-all duration-300 hover:brightness-125"
          >
            Reach Us
            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
