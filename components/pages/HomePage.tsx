import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  return (
    <div className="w-full bg-background mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sticky top-16 z-40 bg-background backdrop-blur-sm">
          <Tabs defaultValue="all" className="w-fit mx-auto mb-4">
            <TabsList variant="line">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="drink">Drink</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
            </TabsList>
          </Tabs>
          <Separator className="mb-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MENU.map((m) => (
            <Card
              key={m.id}
              className="relative pt-0 overflow-hidden bg-card border border-border"
            >
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={m.image}
                  fill
                  alt="menu"
                  className="object-cover hover:scale-105 transition-transform ease-in-out duration-300"
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
                <label>${m.price.toFixed(2)}</label>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
