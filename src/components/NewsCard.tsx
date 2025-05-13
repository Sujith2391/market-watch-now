
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: NewsItem[];
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Card className="border-none shadow-md h-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Market News</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="space-y-4">
          {news.map((item) => (
            <div 
              key={item.id}
              className="p-2 hover:bg-market-light rounded-md cursor-pointer transition-colors"
            >
              <div className="flex gap-3">
                {item.imageUrl && (
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <p className="font-medium line-clamp-2">{item.title}</p>
                  <div className="flex gap-2 text-sm text-muted-foreground mt-1">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
