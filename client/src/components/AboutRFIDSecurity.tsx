"use client";

import React from "react";
import { ShieldCheck, ScanBarcode, Cpu, Database, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutRFIDSecurity() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [leftRef, leftInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [footerRef, footerInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden px-6 lg:px-20 py-20 font-sans"
      id="knowus"
    >
      {/* Background Image */}
      <Image
        src="/bg/bg2_inv.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div ref={leftRef}>
          <motion.h1
            className="absolute text-[6rem] lg:text-[8rem] font-bold text-slate-900 leading-none select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Know
          </motion.h1>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-slate-300 leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We build what <br /> you imagine
          </motion.h2>

          <motion.p
            className="text-2xl text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We’re glad you’re here.
          </motion.p>

          <motion.p
            className="text-xl text-slate-800 text-justify max-w-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            RFID empowers modern retail—but also introduces new cyber-physical risks. By integrating cybersecurity, AI, and blockchain, we’re redefining how trust is built in physical-digital systems. Our mission: create a secure, intelligent, and transparent retail ecosystem using next-gen technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-slate-800 underline underline-offset-4 hover:text-slate-600 transition duration-200 text-lg"
            >
              Know more about us <ArrowUpRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Right: Glass Card Containing All Icons */}
        <div ref={rightRef} className="bg-white/50 backdrop-blur-lg shadow-lg border border-white/30 p-4 mb-4 md:p-8 md:mb-4 lg:p-10 grid grid-cols-2 gap-8">
          {[{
            icon: ShieldCheck,
            label: "Encrypted RFID"
          }, {
            icon: ScanBarcode,
            label: "Anomaly Detection"
          }, {
            icon: Cpu,
            label: "Edge Security"
          }, {
            icon: Database,
            label: "Blockchain Logs"
          }].map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              className="flex flex-col p-2 md:p-8 items-center justify-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <Icon size={80} className="text-slate-900 mb-4" />
              <h3 className="text:base md:text-2xl text-slate-900 font-semibold slate-900">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Background Text */}
      <motion.h1
        ref={footerRef}
        className="absolute md:bottom-2 lg:bottom-10 right-1/16 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-slate-900 leading-none select-none"
        initial={{ opacity: 0, y: 30 }}
        animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        about us
      </motion.h1>
    </section>
  );
}