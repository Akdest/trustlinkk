// components/FraudChart.tsx

"use client";
import React from "react";

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
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🚨 Fraud Overview</h2>
      <div className="text-gray-700 space-y-2 text-base">
        <p>
          <span className="font-semibold">Total Scans:</span> {total}
        </p>
        <p className="text-red-600 font-semibold">
          Fraudulent Tags: {fraudulent}
        </p>
      </div>
    </div>
  );
};

export default FraudChart;
