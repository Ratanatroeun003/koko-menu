import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Noto_Sans,
  Bungee_Shade,
  Noto_Sans_Khmer,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const notoSansHeading = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const notoSansKhmer = Noto_Sans_Khmer({
  variable: '--font-khmer',
  subsets: ['khmer'],
});
const bungeeShade = Bungee_Shade({
  variable: '--font-bungee',
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KOKO PUB - Menu',
  description: 'Explore our delicious food and drinks menu at KOKO PUB',
  metadataBase: new URL('https://koko-menu.vercel.app'), // ដាក់ទីនេះដើម្បីកំណត់ Base URL
  openGraph: {
    title: 'KOKO PUB MENU',
    description: 'Explore our delicious food and drinks menu at KOKO PUB',
    url: 'https://koko-menu.vercel.app', // ឥឡូវវានឹងស្ថិតក្នុង openGraph យ៉ាងត្រូវត្រឹមត្រូវ
    siteName: 'Koko Pub',
    images: [
      {
        url: '/images/menu/koko_pub.webp', // បើមាន metadataBase ហើយ អាចដាក់ path ធម្មតាក៏បាន ឬដាក់លីងពេញក៏បាន
        width: 800,
        height: 800,
        alt: 'Koko Pub Logo',
      },
    ],
    locale: 'km_KH',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        notoSansKhmer.variable,
        'font-sans',
        inter.variable,
        notoSansHeading.variable,
        bungeeShade.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
