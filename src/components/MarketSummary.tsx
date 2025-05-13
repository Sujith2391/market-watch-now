
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MarketIndex {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const marketIndices: MarketIndex[] = [
  { name: 'S&P 500', price: 5123.78, change: 25.32, changePercent: 0.47 },
  { name: 'Dow Jones', price: 38763.45, change: -14.23, changePercent: -0.04 },
  { name: 'NASDAQ', price: 16182.63, change: 120.45, changePercent: 0.71 },
  { name: 'Russell 2000', price: 2024.48, change: -7.95, changePercent: -0.39 }
];

const MarketSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {marketIndices.map((index) => (
        <Card key={index.name} className="border-none shadow-md">
          <CardContent className="p-4">
            <h3 className="font-medium text-lg">{index.name}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold">{index.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <div className={`flex items-center gap-1 text-sm ${index.change >= 0 ? 'text-market-positive' : 'text-market-negative'}`}>
                {index.change >= 0 ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span>{index.change.toFixed(2)}</span>
                <span>({index.changePercent.toFixed(2)}%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MarketSummary;
