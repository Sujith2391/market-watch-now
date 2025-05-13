
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Brain, Calendar } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PredictionSection: React.FC<{ selectedStock: string }> = ({ selectedStock }) => {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center gap-2">
            <Brain size={20} className="text-market-positive" />
            AI Price Prediction
          </div>
        </CardTitle>
        <Button size="sm" variant="outline" className="text-xs">
          <Calendar className="mr-1 h-4 w-4" /> 
          7-Day Forecast
        </Button>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 p-4 rounded-md mb-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Prediction for {selectedStock}</h3>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">$178.92</p>
              <div className="flex items-center text-market-positive">
                <TrendingUp size={16} />
                <span className="text-sm">+2.3%</span>
              </div>
            </div>
          </div>
          
          <AspectRatio ratio={16 / 6} className="bg-white rounded-md overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
              Prediction chart loading...
            </div>
          </AspectRatio>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-market-light p-3 rounded-md">
            <p className="text-xs text-muted-foreground mb-1">Confidence Level</p>
            <p className="font-medium">87%</p>
          </div>
          <div className="bg-market-light p-3 rounded-md">
            <p className="text-xs text-muted-foreground mb-1">Model Used</p>
            <p className="font-medium">LSTM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionSection;
