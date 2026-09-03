import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { MenuItem } from '@/config/menu';
export const MenuCard = ({
  item,
  isPriority,
}: {
  item: MenuItem;
  isPriority: boolean;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/menu/${item.id}`} className="block h-full">
        <Card className="relative rounded-b-none p-0 m-0 gap-0 transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:shadow-md bg-card border border-border flex flex-col h-full group">
          <div className="relative w-full overflow-hidden">
            <AspectRatio ratio={1}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority={isPriority}
                className="object-cover scale-110 transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </AspectRatio>
            <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              ${item.price.toFixed(2)}
            </Badge>
          </div>
          <CardFooter className="p-1 rounded-none bg-background flex items-center justify-center border-t border-border/40 flex-1">
            <p className="font-khmer text-lg text-center line-clamp-2 font-medium leading-tight text-foreground">
              {item.name}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
