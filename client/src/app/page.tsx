// App.tsx
"use client";
import React, { useState } from "react";
import axios from "axios";
import HeroSection from "@/components/HeroSection";
import BlockchainLog from "@/components/BlockChainLog";
import FraudChart from "@/components/FraudChart";



interface LogEntry {
  item_id: string;
  time: string;
  action: string;
}

const App: React.FC = () => {
  const [tagId, setTagId] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const scanTag = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/scan", {
        tagId,
      });
      setStatus(res.data.message);
      setLogs(res.data.logs);
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error connecting to backend.");
    }
  };

  return (
    <>
      <HeroSection />

      <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center justify-start">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          TrustLink: RFID Scan Simulation
        </h1>

        <div className="w-full max-w-md flex items-center gap-3 mb-4">
          <input
            className="border border-gray-300 px-4 py-2 rounded w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter RFID Tag ID"
            value={tagId}
            onChange={(e) => setTagId(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            onClick={scanTag}
          >
            Scan Tag
          </button>
        </div>

        <p className="text-lg mb-8 font-medium text-gray-700">
          Status:{" "}
          <span className="font-semibold text-blue-700">{status}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          <BlockchainLog logs={logs} />
          <FraudChart logs={logs} />
        </div>
      </div>
    </>
  );
};

export default App;
