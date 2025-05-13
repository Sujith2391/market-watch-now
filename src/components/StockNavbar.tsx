
import React, { useState } from 'react';
import { Search, User, BellRing } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const StockNavbar = ({ onSearchChange }: { onSearchChange: (value: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <nav className="bg-market-neutral text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">MarketWatchPro</h1>
          <span className="ml-2 bg-market-positive text-white text-xs px-2 py-1 rounded">BETA</span>
        </div>
        <div className="relative w-full md:w-1/3">
          <div className="relative">
            <Input 
              placeholder="Search for a stock..."
              className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-300"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={16} />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <BellRing size={20} />
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Sign In</Button>
          <Button className="bg-market-positive hover:bg-market-positive/90 text-white">Sign Up</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2 bg-white/10 border-none text-white hover:bg-white/20">
                <User size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px]">
              <div className="flex flex-col h-full">
                <h2 className="text-xl font-bold mb-4">My Account</h2>
                <div className="py-4 border-y">
                  <p className="text-sm text-muted-foreground">Sign in to access your portfolio, predictions, and alerts.</p>
                </div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full">Sign In</Button>
                  <Button variant="outline" className="w-full">Create Account</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default StockNavbar;
