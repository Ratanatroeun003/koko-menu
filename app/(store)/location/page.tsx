import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowBigLeft } from 'lucide-react';
import store from '@/public/images/menu/koko_pub.webp';

const Page = () => {
  return (
    <main className="min-h-screen w-full px-4 py-8">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/"
          className="mb-4 inline-flex font-khmer items-center gap-2 text-xl font-medium bg-green-500 rounded-md px-4 py-2 text-white transition-colors hover:text-primary"
        >
          <ArrowBigLeft className="h-6 w-6" />
          ត្រឡប់ទៅទំព័រដើម
        </Link>
        <div className="mb-6">
          <h1 className="font-khmer text-3xl font-bold">ទីតាំងហាង</h1>
        </div>
        <div className="mx-auto flex w-full flex-col gap-6 rounded-xl border bg-muted p-5 shadow-sm sm:p-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="font-khmer mb-3 text-2xl font-bold">KOKO PUB</h1>

            <p className="font-khmer mb-5 wrap-break-words text-sm leading-7 text-muted-foreground">
              អាសយដ្ឋានទីតាំងរបស់ហាង សូមចុចប៊ូតុងខាងក្រោម ដើម្បីមើលទីតាំង
              របស់ហាងនៅលើ Google Maps។
            </p>
            <Link
              href="https://maps.app.goo.gl/45wcSNFmkQGx2nRz7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-khmer inline-flex w-fit items-center justify-center rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-600"
            >
              មើល Google Map
            </Link>
          </div>
          <div className="relative w-24 h-24 shrink-0 mx-auto sm:mx-0">
            <Image
              src={store}
              alt="ទីតាំងហាង"
              fill
              sizes="96px"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
