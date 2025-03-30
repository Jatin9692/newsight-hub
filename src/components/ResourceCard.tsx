
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Resource } from '../data/resourcesData';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription>{resource.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-4">{resource.description}</p>
        <Button className="w-full" variant="outline" asChild>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            Explore Resource
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
