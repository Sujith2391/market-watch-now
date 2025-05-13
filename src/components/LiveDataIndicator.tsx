
import React from 'react';

const LiveDataIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-white/90 shadow-sm px-3 py-1 rounded-full">
      <div className="relative">
        <div className="w-3 h-3 bg-market-positive rounded-full animate-pulse-light"></div>
        <div className="w-3 h-3 bg-market-positive rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
      </div>
      <span className="text-sm font-medium text-gray-700">Live data</span>
    </div>
  );
};

export default LiveDataIndicator;
