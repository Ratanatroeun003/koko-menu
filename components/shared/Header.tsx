import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/menu/koko_pub.jpg';
import { MapPinPlusIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sky-400/50 group-hover:border-sky-400 transition-colors shadow-md">
            <Image
              src={logo}
              alt="Koko Pub Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bungee font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-200 to-white drop-shadow-sm leading-tight">
              KOKO
            </span>
            <span className="text-md font-semibold font-bungee tracking-widest text-sky-400 transition-colors">
              PUB
            </span>
          </div>
        </Link>
        <Link href="/location" className="text-green-300 hover:scale-105">
          <div className="flex">
            <MapPinPlusIcon />
            <p>Location</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
