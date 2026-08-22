import Logo from '@/public/images/menu/store_logo.jpg';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-300/80 border-b border-border backdrop-blur-md mb-4">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center h-20 justify-between">
        <Link href="/">
          <div className="relative w-14 h-14">
            <Image
              src={Logo}
              fill
              alt="store"
              sizes="56px"
              priority
              className="object-contain"
            />
          </div>
        </Link>
        <h1 className="font-khmer text-xl sm:text-2xl lg:text-3xl">
          សូមស្វាគមន៏
        </h1>

        <Link
          href="/location"
          className="underline font-khmer hover:scale-95 transition-all duration-200"
        >
          មើលទីតាំងហាង
        </Link>
      </div>
    </header>
  );
};

export default Header;
