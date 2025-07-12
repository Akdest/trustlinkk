// components/FraudChart.tsx
"use client";

import React from "react";
import { AlertCircle, ScanBarcode } from "lucide-react";

interface LogEntry {
  item_id: string;
  time: string;
  action: string;
}

interface FraudChartProps {
  logs: LogEntry[];
}

const FraudChart: React.FC<FraudChartProps> = ({ logs }) => {
  const total = logs.length;
  const fraudulent = logs.filter((log) => log.action === "Fraudulent Entry").length;

  return (
    <div className="bg-white/60 backdrop-blur-lg max-w-4xl relative left-1/2 transform -translate-x-1/2 shadow-md border border-slate-300 p-12 w-full flex flex-col gap-6">
      <h2 className="text-2xl lg:text-[2.5rem] font-bold text-slate-900 flex items-center gap-2">
      Fraud Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Total Scans Card */}
        <div className="bg-white/80  border border-slate-200 shadow-sm p-6 flex flex-col items-center justify-center text-center">
          <ScanBarcode size={48} className="text-slate-700 mb-2" />
          <p className="text-2xl font-bold text-slate-900">{total}</p>
          <p className="text-slate-600  text-sm lg:text-xl mt-1">Total RFID Scans</p>
        </div>

        {/* Fraudulent Tags Card */}
        <div className="bg-white/80  border border-red-200 shadow-sm p-6 flex flex-col items-center justify-center text-center">
          <AlertCircle size={48} className="text-red-600 mb-2" />
          <p className="text-2xl font-bold text-red-600">{fraudulent}</p>
          <p className="text-slate-600 text-sm lg:text-xl  mt-1">Fraudulent Tags Detected</p>
        </div>
      </div>
    </div>
  );
};

export default FraudChart;