"use client";

import React from "react";
import { ShieldCheck, ScanBarcode, Cpu, Database, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  tagId: string;
  setTagId: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  scanTag: () => void;
  logs: any[];
  BlockchainLog: React.FC<{ logs: any[] }>;
  FraudChart: React.FC<{ logs: any[] }>;
}

const animationDuration = 0.6;
const ease = "easeOut";

const RFIDTagScanner: React.FC<Props> = ({
  tagId,
  setTagId,
  status,
  scanTag,
  logs,
  BlockchainLog,
  FraudChart,
}) => {
  // Helper to generate staggered delay
  const delayForIndex = (index: number) => 0.15 * index;

  return (
    <section
      className="min-h-screen w-full bg-[#f7f7f7] px-6 lg:px-20 py-32 font-['Poppins'] flex flex-col items-center"
      id="scan"
    >
      {/* Header & Input Split Section */}
      <motion.div
        className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        // We'll animate children manually
      >
        {/* Left Text Content */}
        <motion.div className="flex-1">
          <motion.h1
            className="text-5xl lg:text-[5rem] font-extrabold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(0) }}
          >
            Scan RFID Tag <br />
            <motion.span
              className="text-slate-600 text-3xl lg:text-[3rem] font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: animationDuration, ease, delay: delayForIndex(1) }}
            >
              to Verify Authenticity
            </motion.span>
            <motion.span
              className="inline-block ml-2"
              aria-hidden="true"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: animationDuration, ease, delay: delayForIndex(2) }}
            >
              <ArrowRight size={48} className="hidden lg:inline-block" />
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Right Input Box */}
        <motion.div
          className="flex-1 w-full bg-white/60 backdrop-blur-md border border-slate-300 shadow-lg p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: animationDuration, ease, delay: delayForIndex(3) }}
        >
          <motion.div className="flex flex-col gap-6">
            <motion.input
              className="bg-white placeholder-slate-400 text-slate-900 px-6 py-5 border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
              placeholder="Enter or Scan RFID Tag ID"
              value={tagId}
              onChange={(e) => setTagId(e.target.value)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: animationDuration, ease, delay: delayForIndex(4) }}
            />
            <motion.button
              onClick={scanTag}
              className="px-8 py-5 bg-gradient-to-r from-slate-800 to-slate-600 text-white font-semibold shadow-md hover:from-slate-700 lg:text-2xl hover:to-slate-500 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: animationDuration, ease, delay: delayForIndex(5) }}
            >
              Scan Tag
            </motion.button>
            <motion.p
              className="text-lg md:text-xl text-slate-700 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: animationDuration, ease, delay: delayForIndex(6) }}
            >
              Status: <span className="font-bold text-slate-900">{status}</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Visualizations */}
      <div className="w-full max-w-7xl flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: animationDuration, ease, delay: delayForIndex(7) }}
        >
          <BlockchainLog logs={logs} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: animationDuration, ease, delay: delayForIndex(8) }}
        >
          <FraudChart logs={logs} />
        </motion.div>
      </div>
    </section>
  );
};

export default RFIDTagScanner;
