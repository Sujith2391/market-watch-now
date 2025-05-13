
import React from 'react';

const LiveDataIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-market-positive rounded-full animate-pulse-light"></div>
      <span className="text-sm text-muted-foreground">Live data</span>
    </div>
  );
};

export default LiveDataIndicator;
