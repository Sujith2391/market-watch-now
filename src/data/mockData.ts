
// Mock data for stock charts
export const generateChartData = (symbol: string, basePrice: number, points: number = 24) => {
  const data = [];
  let currentPrice = basePrice;
  
  // Generate mock data points for a day (hourly)
  for (let i = 0; i < points; i++) {
    // Random price movement with some bias
    const change = (Math.random() - 0.48) * (basePrice * 0.01);
    currentPrice += change;
    
    // Ensure price doesn't go negative
    if (currentPrice < 0) currentPrice = basePrice * 0.8;
    
    // Format time (9:30 AM to 4:00 PM for a trading day)
    const hour = Math.floor(i / 2) + 9;
    const minute = (i % 2) * 30;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour > 12 ? hour - 12 : hour;
    const timeString = `${formattedHour}:${minute === 0 ? '00' : minute} ${ampm}`;
    
    data.push({
      name: symbol,
      price: parseFloat(currentPrice.toFixed(2)),
      date: timeString
    });
  }
  
  return data;
};

// Mock watchlist data
export const watchlistStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 188.42, change: 1.56, changePercent: 0.84 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 407.73, change: 2.41, changePercent: 0.59 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.65, change: -0.28, changePercent: -0.20 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 176.85, change: 1.12, changePercent: 0.64 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 175.34, change: -2.18, changePercent: -1.23 },
  { symbol: 'META', name: 'Meta Platforms, Inc.', price: 486.18, change: 5.32, changePercent: 1.11 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 864.71, change: 12.46, changePercent: 1.46 }
];

// Mock top gainers
export const topGainers = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 864.71, changePercent: 1.46 },
  { symbol: 'META', name: 'Meta Platforms, Inc.', price: 486.18, changePercent: 1.11 },
  { symbol: 'AAPL', name: 'Apple Inc.', price: 188.42, changePercent: 0.84 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 176.85, changePercent: 0.64 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 407.73, changePercent: 0.59 }
];

// Mock top losers
export const topLosers = [
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 175.34, changePercent: -1.23 },
  { symbol: 'NFLX', name: 'Netflix, Inc.', price: 603.50, changePercent: -0.87 },
  { symbol: 'DIS', name: 'The Walt Disney Company', price: 108.95, changePercent: -0.62 },
  { symbol: 'INTC', name: 'Intel Corporation', price: 42.32, changePercent: -0.42 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.65, changePercent: -0.20 }
];

// Mock news data
export const marketNews = [
  { 
    id: 1, 
    title: 'Federal Reserve Holds Interest Rates Steady, Signals Future Cuts',
    source: 'Financial Times',
    time: '2h ago',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 2, 
    title: 'NVIDIA Shares Surge on Strong AI Chip Demand and Revenue Forecast',
    source: 'Bloomberg',
    time: '3h ago',
    imageUrl: 'https://images.unsplash.com/photo-1543498108-9e1a6233a21e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 3, 
    title: 'Apple Announces New iPhone Release Date, Analysts Expect Record Sales',
    source: 'Wall Street Journal',
    time: '5h ago',
    imageUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 4, 
    title: 'Tesla Stock Drops as Production Concerns Overshadow New Model Announcement',
    source: 'CNBC',
    time: '6h ago',
    imageUrl: 'https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 5, 
    title: 'Amazon Expands Same-Day Delivery to More Markets, Boosting Retail Competition',
    source: 'Reuters',
    time: '8h ago'
  },
];

// Stock details for the main chart
export const stockDetails = {
  'AAPL': {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 188.42,
    priceChange: 1.56,
    priceChangePercent: 0.84,
    data: generateChartData('AAPL', 188.42)
  },
  'MSFT': {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    currentPrice: 407.73,
    priceChange: 2.41,
    priceChangePercent: 0.59,
    data: generateChartData('MSFT', 407.73)
  },
  'GOOGL': {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    currentPrice: 142.65,
    priceChange: -0.28,
    priceChangePercent: -0.20,
    data: generateChartData('GOOGL', 142.65)
  },
  'AMZN': {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    currentPrice: 176.85,
    priceChange: 1.12,
    priceChangePercent: 0.64,
    data: generateChartData('AMZN', 176.85)
  },
  'TSLA': {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    currentPrice: 175.34,
    priceChange: -2.18,
    priceChangePercent: -1.23,
    data: generateChartData('TSLA', 175.34)
  },
  'META': {
    symbol: 'META',
    name: 'Meta Platforms, Inc.',
    currentPrice: 486.18,
    priceChange: 5.32,
    priceChangePercent: 1.11,
    data: generateChartData('META', 486.18)
  },
  'NVDA': {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    currentPrice: 864.71,
    priceChange: 12.46,
    priceChangePercent: 1.46,
    data: generateChartData('NVDA', 864.71)
  }
};
