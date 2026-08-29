import logo from '@/public/images/menu/koko_pub.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinned } from 'lucide-react';
import header from '@/public/images/menu/header2.jpg';
const Header = () => {
  return (
    <header className="w-full border-b-2 border-border backdrop-blur-sm">
      <div className="grid grid-cols-2 max-w-7xl w-full mx-auto h-20 bg-green-500">
        <div className="w-full bg-white rounded-r-full">r</div>
        <div>r</div>
      </div>
    </header>
  );
};

export default Header;
