
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

interface AITool {
  name: string;
  description: string;
  url: string;
}

const aiTools: AITool[] = [
  {
    name: "ElevenLabs",
    description: "Text to speech with realistic human voices.",
    url: "https://elevenlabs.io/"
  },
  {
    name: "Midjourney",
    description: "Create stunning AI-generated images from text descriptions.",
    url: "https://www.midjourney.com/"
  },
  {
    name: "Lumini
    description: "The best free stock photos and royalty free images. Powered by robots everywhere.
    url: "https://www.lummi.ai/"
  },
  {
    name: "Otter.ai",
    description: "AI-powered transcription and note-taking to capture important conversations.",
    url: "https://otter.ai/"
  },
  {
    name: "Luma AI",
    description: "Create 3D objects and scenes from simple text prompts.",
    url: "https://lumalabs.ai/"
  }
];

interface AIToolsDialogProps {
  triggerId?: string;
  children: React.ReactNode; // Add the children prop to the interface
}

const AIToolsDialog = ({ triggerId, children }: AIToolsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild id={triggerId}>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Free AI Tools</DialogTitle>
          <DialogDescription>
            Explore these powerful AI tools to enhance your productivity.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {aiTools.map((tool) => (
            <Card key={tool.name} className="p-4 hover:shadow-md transition-shadow group">
              <a 
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {tool.name}
                  </h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </a>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIToolsDialog;
