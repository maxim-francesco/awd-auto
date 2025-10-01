"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const LOCAL_STORAGE_KEY = "simple-start-config";

type StyleConfig = {
  message: string;
  color: string;
  size: number;
};

export default function Home() {
  const [config, setConfig] = useState<StyleConfig>({
    message: "Hello, World!",
    color: "text-primary",
    size: 72,
  });
  
  // This state is to prevent hydration errors with localStorage
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load from localStorage on mount
  useEffect(() => {
    if (isClient) {
      try {
        const savedConfig = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedConfig) {
          setConfig(JSON.parse(savedConfig));
        }
      } catch (error) {
        console.error("Failed to load from local storage", error);
      }
    }
  }, [isClient]);

  // Save to localStorage on change
  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config));
      } catch (error) {
        console.error("Failed to save to local storage", error);
      }
    }
  }, [config, isClient]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, message: e.target.value });
  };

  const handleColorChange = (value: string) => {
    setConfig({ ...config, color: value });
  };

  const handleSizeChange = (value: number[]) => {
    setConfig({ ...config, size: value[0] });
  };
  
  // Use a key to force re-render and re-trigger animation
  const messageKey = isClient ? `${config.message}-${config.color}-${config.size}` : 'server-render';
  
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-background p-4 sm:p-8">
      <div className="flex flex-1 items-center justify-center">
        <h1
          key={messageKey}
          className={`font-headline text-center font-bold transition-opacity duration-500 ${isClient ? 'animate-in fade-in' : 'opacity-0'} ${config.color}`}
          style={{ fontSize: `${config.size}px`, lineHeight: '1.2' }}
        >
          {config.message}
        </h1>
      </div>

      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle>Customize Your Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="message-input">Message</Label>
            <Input
              id="message-input"
              value={config.message}
              onChange={handleMessageChange}
              placeholder="Your custom message..."
              disabled={!isClient}
            />
          </div>

          <div className="space-y-2">
            <Label>Color</Label>
            <RadioGroup
              value={config.color}
              onValueChange={handleColorChange}
              className="flex flex-wrap gap-4"
              disabled={!isClient}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text-primary" id="c-primary" />
                <Label htmlFor="c-primary" className="cursor-pointer text-primary">Blue</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text-accent" id="c-accent" />
                <Label htmlFor="c-accent" className="cursor-pointer text-accent">Violet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text-foreground" id="c-foreground" />
                <Label htmlFor="c-foreground" className="cursor-pointer text-foreground">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="text-destructive" id="c-destructive" />
                <Label htmlFor="c-destructive" className="cursor-pointer text-destructive">Alert</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label htmlFor="size-slider">Size: {config.size}px</Label>
            <Slider
              id="size-slider"
              min={16}
              max={128}
              step={1}
              value={[config.size]}
              onValueChange={handleSizeChange}
              disabled={!isClient}
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
