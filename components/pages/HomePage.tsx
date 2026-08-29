'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { MENU, CATEGORIES } from '@/config/menu';
import banner from '@/public/images/menu/banner.png';

const HomePage = () => {
  const [category, setCategory] = useState('all');
  const filteredMenu =
    category === 'all' ? MENU : MENU.filter((m) => m.category === category);
  return (
    <div className="min-h-screen w-full mb-4">
      <div className="sticky top-0 z-50 bg-background/85 backdrop-blur-md py-2 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={category}
            onValueChange={setCategory}
            className="w-full max-w-4xl mx-auto"
          >
            <TabsList
              variant="line"
              className="flex w-full overflow-x-auto whitespace-nowrap flex-nowrap justify-start no-scrollbar gap-2 py-1 touch-pan-x scroll-smooth"
            >
              <TabsTrigger
                value="all"
                className="font-khmer cursor-pointer whitespace-nowrap shrink-0 px-4 py-2"
              >
                ទាំងអស់
              </TabsTrigger>
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="font-khmer cursor-pointer whitespace-nowrap shrink-0 px-4 py-2"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <Separator className="mt-2" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mt-4">
        {/* Banner Container */}
        <div className="relative aspect-16/6 overflow-hidden rounded-xl border border-border shadow-sm">
          <Image
            src={banner}
            alt="KOKO PUB banner"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            className="object-cover"
          />
        </div>
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((m, index) => (
              <motion.div
                key={m.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="relative p-0 transition-all group duration-300 hover:-translate-y-1 overflow-hidden hover:shadow-lg bg-card border border-border flex flex-col h-full">
                  <div className="relative w-full">
                    <AspectRatio ratio={1}>
                      <Image
                        src={m.image}
                        fill
                        alt={m.name}
                        priority={index < 4}
                        className="object-cover transition-transform group-hover:scale-105 ease-in-out duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </AspectRatio>
                    <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                      ${m.price.toFixed(2)}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1 pb-1 font-khmer text-base">
                      {m.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
