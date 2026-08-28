import Logo from '@/public/images/menu/koko_pub.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinned } from 'lucide-react';
const Header = () => {
  return (
    <header className="w-full bg-muted border-b-2 border-border backdrop-blur-sm">
      <div className="grid grid-cols-3 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 items-center py-2">
        <Link href="/" className="group flex items-center">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-slate-100 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src={Logo}
              alt="KOKO PUB Logo"
              width={48}
              height={48}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
        <h1 className="flex flex-col items-center justify-center text-center">
          <span className="font-sans text-base font-extrabold tracking-wider text-black sm:text-lg md:text-xl lg:text-2xl">
            KOKO PUB
          </span>
          <span className="hidden font-khmer text-xs font-medium text-green-500 sm:inline-block md:text-sm">
            សូមស្វាគមន៍
          </span>
        </h1>
        <div className="flex justify-end">
          <Link
            href="/location"
            className="underline-offset-4 flex font-semibold hover:text-slate-100 text-green-700 text-sm underline font-khmer hover:scale-95 transition-all duration-200"
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
