
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const StockNavbar = ({ onSearchChange }: { onSearchChange: (value: string) => void }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav className="bg-market-neutral text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">MarketWatchNow</h1>
        </div>
        <div className="relative w-full md:w-1/3">
          <div className="relative">
            <Input 
              placeholder="Search for a stock..."
              className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-300"
              onChange={handleInputChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={16} />
          </div>
        </div>
        <div className="hidden md:flex gap-2">
          <Button variant="ghost" className="text-white hover:bg-white/10">Sign In</Button>
          <Button className="bg-white text-market-neutral hover:bg-white/90">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default StockNavbar;
