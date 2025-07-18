
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface StockMover {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
}

interface TopMoversCardProps {
  gainers: StockMover[];
  losers: StockMover[];
  onStockSelect: (symbol: string) => void;
}

const TopMoversCard: React.FC<TopMoversCardProps> = ({ gainers, losers, onStockSelect }) => {
  return (
    <Card className="border-none shadow-md h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">Top Movers</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="gainers">
          <TabsList className="mb-2 w-full grid grid-cols-2">
            <TabsTrigger value="gainers" className="flex items-center justify-center">
              <TrendingUp size={14} className="mr-1 text-market-positive" />
              Gainers
            </TabsTrigger>
            <TabsTrigger value="losers" className="flex items-center justify-center">
              <TrendingDown size={14} className="mr-1 text-market-negative" />
              Losers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gainers">
            <div className="space-y-1">
              {gainers.map((stock) => (
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
                    <div className="flex items-center gap-1 text-xs text-market-positive">
                      <TrendingUp size={14} />
                      <span>+{stock.changePercent.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="losers">
            <div className="space-y-1">
              {losers.map((stock) => (
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
                    <div className="flex items-center gap-1 text-xs text-market-negative">
                      <TrendingDown size={14} />
                      <span>{stock.changePercent.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 p-2 bg-market-lightblue rounded-md flex items-start gap-2">
          <AlertTriangle size={16} className="text-market-darkblue shrink-0 mt-0.5" />
          <p className="text-xs text-market-darkblue">
            High volatility detected in the market. Consider portfolio diversification.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopMoversCard;
