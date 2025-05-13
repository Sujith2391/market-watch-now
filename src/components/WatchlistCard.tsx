
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WatchlistStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface WatchlistCardProps {
  stocks: WatchlistStock[];
  onStockSelect: (symbol: string) => void;
}

const WatchlistCard: React.FC<WatchlistCardProps> = ({ stocks, onStockSelect }) => {
  return (
    <Card className="border-none shadow-md h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">Watchlist</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 rounded-full">
          <Plus size={16} className="mr-1" /> Add
        </Button>
      </CardHeader>
      <CardContent className="px-2 overflow-auto max-h-[500px]">
        <div className="space-y-1">
          {stocks.map((stock) => (
            <div 
              key={stock.symbol}
              className="p-2 hover:bg-market-light rounded-md cursor-pointer transition-colors flex items-center justify-between group"
              onClick={() => onStockSelect(stock.symbol)}
            >
              <div>
                <p className="font-medium">{stock.symbol}</p>
                <p className="text-sm text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
              </div>
              <div className="text-right flex items-center gap-2">
                <div>
                  <p className="font-medium">${stock.price.toFixed(2)}</p>
                  <div className={`flex items-center gap-1 text-xs ${stock.change >= 0 ? 'text-market-positive' : 'text-market-negative'}`}>
                    {stock.change >= 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    <span>{stock.change.toFixed(2)}</span>
                    <span>({stock.changePercent.toFixed(2)}%)</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <X size={14} className="text-muted-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchlistCard;
