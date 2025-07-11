// components/BlockchainLog.tsx
"use client";
import React from "react";

interface LogEntry {
  item_id: string;
  time: string;
  action: string;
}

interface BlockchainLogProps {
  logs: LogEntry[];
}

const BlockchainLog: React.FC<BlockchainLogProps> = ({ logs }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔗 Blockchain Log</h2>
      <ul className="text-sm space-y-3 text-gray-700">
        {logs.map((log, idx) => (
          <li key={idx} className="border-b border-gray-200 pb-2">
            <span className="font-semibold text-blue-600">{log.time}</span> —{" "}
            <span className="font-medium">{log.item_id}</span> —{" "}
            <span className="italic text-gray-600">{log.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlockchainLog;
