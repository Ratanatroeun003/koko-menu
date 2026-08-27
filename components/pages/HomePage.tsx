'use client';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardAction,
  CardTitle,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { MENU } from '@/config/menu';
import banner from '@/public/images/menu/banner2.png';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const HomePage = () => {
  const [category, setCategory] = useState('all');
  const filteredMenu =
    category === 'all' ? MENU : MENU.filter((m) => m.category === category);
  return (
    <div className="min-h-screen w-full mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="sticky top-0 z-50 bg-background/85 py-2 backdrop-blur-sm">
          <Tabs
            value={category}
            onValueChange={setCategory}
            className="w-fit mx-auto"
          >
            <TabsList variant="line">
              <TabsTrigger value="all" className="font-khmer cursor-pointer">
                ទាំងអស់
              </TabsTrigger>
              <TabsTrigger value="drink" className="font-khmer cursor-pointer">
                ភេសជ្ជៈ
              </TabsTrigger>
              <TabsTrigger value="food" className="font-khmer cursor-pointer">
                ម្ហូបអាហារ
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Separator className="mt-2" />
        </div>
        <div className="relative w-full">
          <AspectRatio ratio={16 / 5}>
            <Image
              src={banner}
              alt="banner"
              priority
              fill
              className="object-cover rounded-xl overflow-hidden border"
            />
          </AspectRatio>
        </div>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((m, index) => (
              <motion.div
                key={m.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              >
                <Card className="relative pt-0 transition-all group duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden bg-card border border-border">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={m.image}
                      fill
                      alt={m.name}
                      priority={index < 4}
                      className="object-cover transition-transform group-hover:scale-105 ease-in-out duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{m.name}</CardTitle>
                    <CardAction>
                      <Badge>{m.category}</Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="font-semibold">
                    ${m.price.toFixed(2)}
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
