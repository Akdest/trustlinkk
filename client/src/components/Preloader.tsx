"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "Establishing Connection...",
  "Syncing with Ledger...",
  "Verifying Credentials...",
  "Securing the Chain...",
  "Loading TrustLink...",
];

interface Props {
  onComplete: () => void;
}

const Preloader: React.FC<Props> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 10, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // fade out buffer
        }
        return next;
      });
    }, 400);

    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f7f7f7] flex flex-col items-center justify-center  font-['Poppins']">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900 animate-pulse"
      >
        TrustLink
      </motion.h1>

      <motion.p
        className="mt-6 text-3xl font-bold text-slate-800"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {Math.floor(progress)}%
      </motion.p>

      <motion.p
        key={messageIndex}
        className="mt-2 text-slate-700 text-lg tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {messages[messageIndex]}
      </motion.p>

      <div className="mt-8 w-full h-4 bg-white  overflow-hidden">
        <motion.div
          className="h-full bg-slate-900 "
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Preloader;
