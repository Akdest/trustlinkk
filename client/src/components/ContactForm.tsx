"use client";

import React from "react";
import { motion } from "framer-motion";

const animationDuration = 0.6;
const ease = "easeOut";

const ContactForm = () => {
  const delayForIndex = (index: number) => 0.15 * index;

  return (
    <motion.section
      id="contact"
      className="w-full bg-[#f7f7f7] py-24 px-6 lg:px-20 font-['Poppins'] text-slate-900 min-h-[100vh] flex items-center"
      initial={{ opacity: 1 }} // keep parent visible
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 1 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(0) }}
          >
            Reach Out to Us
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-[2rem] text-slate-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(1) }}
          >
            Have a question about RFID, blockchain logging, or fraud detection in your supply chain? Our team is ready to assist you with tailored solutions and insights.
          </motion.p>

          <div className="space-y-2 text-slate-600 text-base lg:text-xl">
            {[
              { label: "Email:", value: "support@trustlink.tech", delay: 2 },
              { label: "Phone:", value: "+91 98765 43210", delay: 3 },
              { label: "Location:", value: "NIT Jalandhar, Punjab, India", delay: 4 },
            ].map(({ label, value, delay }) => (
              <motion.p
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: animationDuration, ease, delay: delayForIndex(delay) }}
              >
                <strong>{label}</strong> {value}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          className="w-full border border-slate-300 bg-white/60 backdrop-blur-md p-12 shadow-lg flex flex-col gap-8 justify-center"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 1 }}
        >
          <motion.input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white border border-slate-300 px-6 py-5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(5) }}
          />
          <motion.input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white border border-slate-300 px-6 py-5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(6) }}
          />
          <motion.textarea
            rows={6}
            placeholder="Your Message"
            className="w-full bg-white border border-slate-300 px-6 py-5 text-slate-900 placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(7) }}
          />
          <motion.button
            type="submit"
            className="self-start px-12 py-5 bg-slate-900 text-white uppercase tracking-wider font-semibold hover:bg-slate-800 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: animationDuration, ease, delay: delayForIndex(8) }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
