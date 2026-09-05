'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { MenuCard } from '@/components/MenuCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BannerCarousel from '@/components/BannerCarousel';
import { MENU, CATEGORIES, FilterCategory } from '@/config/menu';
import banner1 from '@/public/images/menu/banner1.webp';
import banner2 from '@/public/images/menu/banner2.webp';

const HomePage = () => {
  const banners = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState<FilterCategory>('all');
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length]);
  const filteredMenu = MENU.filter((m) => {
    if (category === 'all') return true;
    if (category === 'featured') return m.featured === true;
    return m.category === category;
  });
  return (
    <div className="min-h-screen w-full mb-4">
      <main className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 space-y-2 mt-4">
        <BannerCarousel
          banners={banners}
          currentIndex={currentIndex}
          onHover={setIsPaused}
        />
        <div className="sticky top-0 z-40 border-y border-border bg-background/85 backdrop-blur-md shadow-xs">
          <div className="max-w-7xl py-3 mx-auto px-2 sm:px-6 lg:px-8">
            <Tabs
              value={category}
              onValueChange={(val) => setCategory(val as FilterCategory)}
              className="w-full max-w-4xl mx-auto"
            >
              <TabsList
                variant="line"
                className="flex w-full overflow-x-auto whitespace-nowrap flex-nowrap justify-start no-scrollbar gap-2 touch-pan-x overscroll-x-contain scroll-smooth max-w-full"
              >
                <TabsTrigger
                  value="all"
                  className="font-khmer text-base sm:text-lg md:text-xl cursor-pointer whitespace-nowrap shrink-0 px-4 py-2"
                >
                  ទាំងអស់
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="font-khmer text-base sm:text-lg md:text-xl cursor-pointer whitespace-nowrap shrink-0 px-4 py-2"
                >
                  ប្រចាំហាង
                </TabsTrigger>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="font-khmer text-base sm:text-lg md:text-xl cursor-pointer whitespace-nowrap shrink-0 px-4 py-2"
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
            {filteredMenu.map((item, index) => (
              <MenuCard key={item.id} item={item} isPriority={index < 4} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;
