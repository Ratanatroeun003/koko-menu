import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/menu/koko_pub.webp';
import { MapPinPlusIcon, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-muted border-b border-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-500 group-hover:border-slate-950-400 transition-colors shadow-md">
            <Image
              src={logo}
              alt="Koko Pub Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bungee font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-rose-950 to-black drop-shadow-sm leading-tight">
              KOKO
            </span>
            <span className="text-md font-semibold font-bungee tracking-widest text-slate-950 transition-colors">
              PUB
            </span>
          </div>
        </Link>
        <div className="flex flex-col gap-1 font-semibold">
          <Link href="/location" className="text-slate-950 hover:scale-105">
            <div className="flex gap-1">
              <MapPinPlusIcon />
              <p>Location</p>
            </div>
          </Link>
          <a
            href="tel:+855966998037"
            className="text-slate-950 hover:scale-105"
          >
            <div className="flex gap-1">
              <Phone /> 096 6998 037
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
