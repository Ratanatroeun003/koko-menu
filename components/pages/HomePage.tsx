'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { MENU, CATEGORIES } from '@/config/menu';
import banner1 from '@/public/images/menu/banner1.png';
import banner2 from '@/public/images/menu/banner2.jpg';
import banner3 from '@/public/images/menu/banner3.jpg';
import banner4 from '@/public/images/menu/banner6.png';

const HomePage = () => {
  const banners = [banner1, banner2, banner3, banner4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState('all');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const filteredMenu =
    category === 'all' ? MENU : MENU.filter((m) => m.category === category);
  return (
    <div className="min-h-screen w-full mb-4">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 space-y-2 mt-4">
        {/* Banner Container */}
        <div className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={banners[currentIndex]}
                alt={`KOKO PUB banner ${currentIndex + 1}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
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
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3"
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
                <Card className="relative  p-0 m-0 gap-0 transition-all group duration-300 hover:-translate-y-1 overflow-hidden hover:shadow-lg bg-card border border-border flex flex-col h-full">
                  <div className="relative w-full overflow-hidden">
                    <AspectRatio ratio={1}>
                      <Image
                        src={m.image}
                        fill
                        alt={m.name}
                        priority={index < 4}
                        className="object-cover transition-transform scale-110 ease-in-out duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </AspectRatio>
                    <div className="absolute inset-x-0 top-0 h-12 bg-linear-to-b from-black/40 to-transparent pointer-events-none" />
                    <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                      ${m.price.toFixed(2)}
                    </Badge>
                  </div>
                  <CardFooter className="rounded-none p-0 bg-slate-300 flex items-center justify-center">
                    <p className="font-khmer text-sm text-center line-clamp-1 font-medium">
                      {m.name}
                    </p>
                  </CardFooter>
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
