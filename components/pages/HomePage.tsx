'use client';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import {
  Card,
  CardAction,
  CardTitle,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { MENU } from '@/config/menu';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
const HomePage = () => {
  const [category, setCategory] = useState('all');
  const filteredMenu =
    category === 'all' ? MENU : MENU.filter((m) => m.category === category);
  return (
    <div className="min-h-screen w-full mb-4 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="sticky top-20 z-40 bg-background/95 py-2 backdrop-blur-md">
          <Tabs
            defaultValue="all"
            onValueChange={setCategory}
            className="w-fit mx-auto"
          >
            <TabsList variant="line">
              <TabsTrigger value="all" className="font-khmer">
                ទាំងអស់
              </TabsTrigger>
              <TabsTrigger value="drink" className="font-khmer">
                ភេសជ្ចះ
              </TabsTrigger>
              <TabsTrigger value="food" className="font-khmer">
                ម្ហូបអាហារ
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Separator className="mt-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMenu.map((m) => (
            <Card
              key={m.id}
              className="relative pt-0 transition-all group duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden bg-card border border-border"
            >
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={m.image}
                  fill
                  alt={m.name}
                  className="object-cover transition-transform group-hover:scale-105 ease-in-out duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{m.name}</CardTitle>
                <CardAction>
                  <Badge>{m.category}</Badge>
                </CardAction>
              </CardHeader>
              <CardFooter>
                <span className="text-lg font-semibold">
                  ${m.price.toFixed(2)}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
