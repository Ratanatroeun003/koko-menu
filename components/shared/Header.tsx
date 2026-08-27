import Logo from '@/public/images/menu/store_logo.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinned } from 'lucide-react';
const Header = () => {
  return (
    <header className="w-full bg-muted border-b border-border backdrop-blur-sm">
      <div className="grid grid-cols-3 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 items-center py-4">
        <Link
          href="/"
          className="flex w-fit items-center transition-transform duration-200 hover:scale-95"
        >
          <Image
            src={Logo}
            alt="Store logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />
        </Link>
        <h1 className="flex flex-col items-center justify-center text-center">
          <span className="font-sans text-base font-extrabold tracking-wide text-primary sm:text-lg md:text-xl lg:text-2xl">
            KOKO COFFEE
          </span>
          <span className="hidden font-khmer text-xs font-medium text-muted-foreground sm:inline-block md:text-sm">
            សូមស្វាគមន៍
          </span>
        </h1>
        <div className="flex justify-end">
          <Link
            href="/location"
            className="underline-offset-4 flex text-green-500 text-sm underline font-khmer hover:scale-95 transition-all duration-200"
          >
            <MapPinned />
            <span className="hidden sm:block">មើលទីតាំងហាង</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
