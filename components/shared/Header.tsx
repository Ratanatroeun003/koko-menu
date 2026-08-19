import { Button } from '@/components/ui/button';
import store from '@/public/images/menu/store.webp';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 border-b border-border backdrop-blur-md mb-4">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center h-16 justify-between">
        <Image
          src={store}
          alt="store"
          className="w-12 h-12 object-cover rounded-full"
          quality={90}
          priority
        />
        <h1 className="font-khmer text-4xl">សូមស្វាគមន៏</h1>
        <div className="flex gap-2">
          <Link
            href="/location"
            className="hover:underline hover:cursor-pointer"
          >
            Location
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
