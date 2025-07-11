"use client";
import React from "react";
import { Sparkles, ShieldCheck, ScanBarcode, LockKeyhole, Layers } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#0a0f1c] via-[#1c2431] to-[#10151f] text-white flex flex-col justify-center items-center px-6 md:px-20 overflow-hidden">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
           Welcome to <span className="text-blue-400">TrustLink🤝</span>
          <br />
          <span className="text-gray-300">Where RFID meets Cybersecurity</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-10">
          TrustLink is redefining how physical assets are secured in digital ecosystems — encrypted RFID infrastructure, AI-driven threat detection, and blockchain-backed trust. 
        </p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300">
            Explore Features
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full transition-all duration-300">
            View Demo
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-2 sm:grid-cols-5 gap-6 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <IconLabel icon={<ScanBarcode className="h-8 w-8 text-cyan-400" />} label="Smart Checkout" />
        <IconLabel icon={<LockKeyhole className="h-8 w-8 text-indigo-400" />} label="Encrypted Tags" />
        <IconLabel icon={<Sparkles className="h-8 w-8 text-pink-400" />} label="AI Detection" />
        <IconLabel icon={<ShieldCheck className="h-8 w-8 text-green-400" />} label="Zero-Trust" />
        <IconLabel icon={<Layers className="h-8 w-8 text-yellow-400" />} label="Blockchain Logs" />
      </motion.div>

      <motion.div
        className="absolute -top-10 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse hidden md:block"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-60 h-60 bg-pink-500 rounded-full blur-2xl opacity-20 animate-pulse hidden md:block"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

type IconLabelProps = {
  icon: React.ReactNode;
  label: string;
};

const IconLabel: React.FC<IconLabelProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center text-sm font-medium text-gray-300">
      {icon}
      <span className="mt-2 text-center max-w-[6rem]">{label}</span>
    </div>
  );
};

export default HeroSection;
