
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

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
      <CardHeader>
        <CardTitle className="text-lg font-bold">Watchlist</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-1">
          {stocks.map((stock) => (
            <div 
              key={stock.symbol}
              className="p-2 hover:bg-market-light rounded-md cursor-pointer transition-colors flex items-center justify-between"
              onClick={() => onStockSelect(stock.symbol)}
            >
              <div>
                <p className="font-medium">{stock.symbol}</p>
                <p className="text-sm text-muted-foreground truncate max-w-[120px]">{stock.name}</p>
              </div>
              <div className="text-right">
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchlistCard;
