'use client';
import Image from 'next/image';
import { Card, CardFooter } from '@/components/ui/card';
import { MoveLeft } from 'lucide-react';
import { MenuItem } from '@/config/menu';
import { useRouter } from 'next/navigation';

interface MenuDetailPageProps {
  menu: MenuItem;
}

export default function MenuDetailPage({ menu }: MenuDetailPageProps) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="w-full min-h-screen mt-2">
      <div className="flex mx-auto w-full max-w-4xl flex-col gap-4 items-center px-4 py-2 justify-center">
        {/* Back Button */}
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-sm font-semibold bg-green-600 text-white cursor-pointer hover:bg-green-700 hover:scale-110 px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <MoveLeft />
          <span className="font-khmer text-lg">ត្រឡប់ក្រោយ</span>
        </button>

        {/* Menu Detail Card */}
        <Card className="w-full max-w-md overflow-hidden rounded-xl border border-border shadow-md p-0">
          <div className="relative w-full aspect-square overflow-hidden bg-muted">
            <Image
              src={menu.image}
              alt={menu.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <CardFooter className="flex items-center justify-between gap-4 p-5 bg-card">
            <div className="flex flex-col gap-1">
              <h1 className="font-khmer text-2xl font-semibold text-foreground">
                {menu.name}
              </h1>
              <p className="text-sm font-medium text-muted-foreground capitalize">
                {menu.category}
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="font-bold text-2xl text-amber-500">
                ${menu.price.toFixed(2)}
              </span>
              {menu.featured && (
                <span className="font-khmer text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium px-2 py-0.5 rounded-full border border-amber-500/20">
                  ប្រចាំហាង
                </span>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
