"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlockchainLog from "@/components/BlockchainLog";
import FraudChart from "@/components/FraudChart";
import AnimatedCursor from "@/components/AnimatedCursor";
import Navbar from "@/components/Navbar";
import RFIDTagScanner from "@/components/RFIDTagScanner";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PageProgressBar from "@/components/PageProgressBar";
import GoToTopButton from "@/components/GoToTop";
import Preloader from "@/components/Preloader";
import axios from "axios";

interface LogEntry {
  item_id: string;
  time: string;
  action: string;
}

const App: React.FC = () => {
  const [tagId, setTagId] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [showPreloader, setShowPreloader] = useState(true); // Controlled by Preloader

  const scanTag = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/scan", { tagId });
      setStatus(res.data.message);
      setLogs(res.data.logs);
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error connecting to backend.");
    }
  };

  return (
    <>
      {showPreloader ? (
        <Preloader onComplete={() => setShowPreloader(false)} />
      ) : (
        <>
          <AnimatedCursor />
          <Navbar />
          <GoToTopButton />
          <HeroSection />
          <PageProgressBar />
          <RFIDTagScanner
            tagId={tagId}
            setTagId={setTagId}
            status={status}
            scanTag={scanTag}
            logs={logs}
            BlockchainLog={BlockchainLog}
            FraudChart={FraudChart}
          />
          <CTA />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
