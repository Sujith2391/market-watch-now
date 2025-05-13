
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, BarChart4, Download } from 'lucide-react';

interface StockData {
  name: string;
  price: number;
  date: string;
}

interface StockChartProps {
  stockSymbol: string;
  stockName: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;
  data: StockData[];
}

const StockChart: React.FC<StockChartProps> = ({
  stockSymbol,
  stockName,
  currentPrice,
  priceChange,
  priceChangePercent,
  data
}) => {
  const [chartType, setChartType] = useState<'area' | 'candle'>('area');
  const isPositive = priceChange >= 0;
  const color = isPositive ? '#00C853' : '#FF3D57';

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{stockSymbol}</CardTitle>
            <p className="text-sm text-muted-foreground">{stockName}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">${currentPrice.toFixed(2)}</p>
            <p className={`text-sm ${isPositive ? 'text-market-positive' : 'text-market-negative'} flex items-center justify-end gap-1`}>
              {isPositive ? (
                <TrendingUp size={16} />
              ) : (
                <TrendingDown size={16} />
              )}
              {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Tabs defaultValue="1D">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="1D">1D</TabsTrigger>
              <TabsTrigger value="1W">1W</TabsTrigger>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="3M">3M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <BarChart4 size={16} />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Download size={16} />
            </Button>
          </div>
        </div>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id={`colorPrice-${stockSymbol}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis 
                domain={['dataMin - 1', 'dataMax + 1']} 
                tick={{ fontSize: 12 }} 
                orientation="right"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                labelFormatter={(label) => `Time: ${label}`}
                contentStyle={{ borderRadius: '6px', border: '1px solid #eee' }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke={color}
                fillOpacity={1}
                fill={`url(#colorPrice-${stockSymbol})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Open</p>
            <p className="font-medium">${(currentPrice - (Math.random() * 2)).toFixed(2)}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">High</p>
            <p className="font-medium">${(currentPrice + (Math.random() * 3)).toFixed(2)}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Low</p>
            <p className="font-medium">${(currentPrice - (Math.random() * 4)).toFixed(2)}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Volume</p>
            <p className="font-medium">{(Math.random() * 10 + 1).toFixed(2)}M</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChart;
