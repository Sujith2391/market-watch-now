
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
            <p className={`text-sm ${isPositive ? 'text-market-positive' : 'text-market-negative'}`}>
              {isPositive ? '+' : ''}{priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1D">
          <TabsList className="mb-4">
            <TabsTrigger value="1D">1D</TabsTrigger>
            <TabsTrigger value="1W">1W</TabsTrigger>
            <TabsTrigger value="1M">1M</TabsTrigger>
            <TabsTrigger value="3M">3M</TabsTrigger>
            <TabsTrigger value="1Y">1Y</TabsTrigger>
          </TabsList>
          <TabsContent value="1D" className="h-[300px]">
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
          </TabsContent>
          <TabsContent value="1W" className="h-[300px]">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Weekly data loading...
            </div>
          </TabsContent>
          <TabsContent value="1M" className="h-[300px]">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Monthly data loading...
            </div>
          </TabsContent>
          <TabsContent value="3M" className="h-[300px]">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              3-Month data loading...
            </div>
          </TabsContent>
          <TabsContent value="1Y" className="h-[300px]">
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Yearly data loading...
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StockChart;
