// components/BlockchainLog.tsx
"use client";

import React, { useState } from "react";

interface LogEntry {
  item_id: string;
  time: string;
  action: string;
}

interface BlockchainLogProps {
  logs: LogEntry[];
}

const BlockchainLog: React.FC<BlockchainLogProps> = ({ logs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className={`bg-white/60 backdrop-blur-lg max-w-4xl relative left-1/2 transform -translate-x-1/2 border-1 border-slate-300 w-full transition-all duration-300 ${isExpanded ? 'px-12 py-6' : 'px-12 py-6 pb-2'}`}>
      <button
        className="text-2xl lg:text-[2.5rem] font-bold text-slate-900 mb-2 w-full text-left flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Show Logs
        <span className="text-xl">{isExpanded ? "▲" : "▼"}</span>
      </button>

      {isExpanded && (
        <div className="h-[400px] overflow-y-auto snap-y snap-mandatory border-t border-slate-300 pt-4">
          <ul className="space-y-4">
            {logs.map((log, idx) => (
              <li
                key={idx}
                onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
                className="cursor-pointer border-b border-slate-200 pb-3 snap-start transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-slate-900">{log.time}</span> —{' '}
                    <span className="font-medium text-slate-800">{log.item_id}</span>
                  </div>
                  <span className="text-slate-500 text-sm">{activeIndex === idx ? "▲" : "▼"}</span>
                </div>
                {activeIndex === idx && (
                  <p className="mt-2 text-sm text-slate-800 italic pl-2 border-l-2 ">
                    {log.action}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlockchainLog;
