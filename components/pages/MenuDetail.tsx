import { Card, CardFooter } from '@/components/ui/card';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Page({
  menu,
}: {
  menu: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    featured?: boolean;
  };
}) {
  return (
    <div className="w-full max-w-4xl mx-auto min-h-screen flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Link href="/">
          <div className="flex items-center gap-2 font-semibold bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer">
            <p className="font-khmer text-xl">ត្រឡប់ក្រោយទៅមុខងារ Menu</p>
            <MoveRight className="w-6 h-6" />
          </div>
        </Link>
        <Card className="gap-0 p-0">
          <div className="relative w-84 h-84 rounded-md overflow-hidden">
            <Image
              src={menu.image}
              alt={menu.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardFooter className="flex items-center bg-background justify-between gap-2 p-4">
            <div className="flex flex-col gap-1">
              <p className="font-khmer text-xl">{menu.name}</p>
              <p className="text-xl">{menu.category}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">${menu.price.toFixed(2)}</p>
              <p className="font-khmer text-xl">
                {menu.featured ? 'ប្រចាំហាង' : ''}
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
