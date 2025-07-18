
import React, { useState, useEffect } from 'react';
import StockNavbar from '@/components/StockNavbar';
import MarketSummary from '@/components/MarketSummary';
import StockChart from '@/components/StockChart';
import WatchlistCard from '@/components/WatchlistCard';
import NewsCard from '@/components/NewsCard';
import TopMoversCard from '@/components/TopMoversCard';
import PredictionSection from '@/components/PredictionSection';
import LiveDataIndicator from '@/components/LiveDataIndicator';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { stockDetails, watchlistStocks, topGainers, topLosers, marketNews } from '@/data/mockData';

const Index = () => {
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleStockSelect = (symbol: string) => {
    setSelectedStock(symbol);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Format the last updated time
  const formatLastUpdated = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StockNavbar onSearchChange={handleSearchChange} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Market Overview</h2>
          <div className="flex items-center gap-3">
            <LiveDataIndicator />
            <span className="text-sm text-muted-foreground">
              Last updated: {formatLastUpdated(lastUpdated)}
            </span>
          </div>
        </div>
        
        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-500" />
          <AlertTitle className="text-blue-700">Stock Market Monitoring & Price Prediction</AlertTitle>
          <AlertDescription className="text-blue-600">
            Welcome to our platform. This is a project by Veeresh, Prajwal, Ganesh, and Manjunatha. Guided by Prof. Prasad H.M.
          </AlertDescription>
        </Alert>
        
        <MarketSummary />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            {selectedStock && stockDetails[selectedStock] && (
              <StockChart 
                stockSymbol={stockDetails[selectedStock].symbol}
                stockName={stockDetails[selectedStock].name}
                currentPrice={stockDetails[selectedStock].currentPrice}
                priceChange={stockDetails[selectedStock].priceChange}
                priceChangePercent={stockDetails[selectedStock].priceChangePercent}
                data={stockDetails[selectedStock].data}
              />
            )}
          </div>
          <div>
            <WatchlistCard 
              stocks={watchlistStocks} 
              onStockSelect={handleStockSelect} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <PredictionSection selectedStock={selectedStock} />
          </div>
          <div>
            <TopMoversCard 
              gainers={topGainers} 
              losers={topLosers} 
              onStockSelect={handleStockSelect} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <div>
            <NewsCard news={marketNews} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
