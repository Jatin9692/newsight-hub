
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DailySummary = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Card className="w-full bg-gradient-to-br from-primary/10 to-primary/5">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Daily Summary</CardTitle>
        <CardDescription>{today}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Top Stories Today</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li className="text-sm">Global markets respond to new economic policies</li>
            <li className="text-sm">Tech companies unveil innovative marketing strategies</li>
            <li className="text-sm">Political shifts impact international trade agreements</li>
            <li className="text-sm">Championship finals break viewing records</li>
          </ul>
        </div>
        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            Stay informed with our daily curated summaries of what matters most.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySummary;
