// components/HeroSection.tsx
"use client";
import React from "react";
import { Sparkles, ShieldCheck, ScanBarcode, LockKeyhole, Layers } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white flex flex-col justify-center items-center px-6 md:px-20">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          🔐 RFID + Cybersecurity
          <br />
          <span className="text-blue-400">Building the Next Generation of Trust in Retail</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Merging physical visibility with digital resilience — AI-powered anomaly detection,
          encrypted RFID infrastructure, and blockchain-backed authenticity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl transition duration-300 ease-in-out">
            Explore Framework
          </button>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-2xl transition duration-300 ease-in-out">
            Watch Demo
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-2 sm:grid-cols-5 gap-6 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <IconLabel icon={<ScanBarcode className="h-8 w-8 text-cyan-400" />} label="Smart Checkout" />
        <IconLabel icon={<LockKeyhole className="h-8 w-8 text-indigo-400" />} label="AES Encrypted Tags" />
        <IconLabel icon={<Sparkles className="h-8 w-8 text-pink-400" />} label="AI Threat Detection" />
        <IconLabel icon={<ShieldCheck className="h-8 w-8 text-green-400" />} label="Zero-Trust Access" />
        <IconLabel icon={<Layers className="h-8 w-8 text-yellow-400" />} label="Blockchain Logs" />
      </motion.div>
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
