
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, ExternalLink } from 'lucide-react';

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
      <CardHeader className="flex flex-row justify-between items-center pb-2">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <Newspaper size={18} className="text-market-neutral" />
          Market News
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-xs">
          View All
        </Button>
      </CardHeader>
      <CardContent className="px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
            >
              {item.imageUrl && (
                <div className="h-32 w-full overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              )}
              <CardContent className="p-3">
                <p className="font-medium line-clamp-2 mb-2 group-hover:text-market-darkblue transition-colors">{item.title}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span className="flex items-center">
                    {item.time}
                    <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
