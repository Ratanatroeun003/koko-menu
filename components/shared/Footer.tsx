import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border rounded-md bg-muted/40">
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <nav className="flex flex-col items-start gap-2 text-sm text-muted-foreground">
            <Link
              href="/"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Menu
            </Link>
            <Link
              href="/location"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Location
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              About
            </Link>
          </nav>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Menu</h2>

          <nav className="flex flex-col items-start gap-2 text-sm text-muted-foreground">
            <Link
              href="/menu"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              All Menu
            </Link>
            <Link
              href="/menu?category=food"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Food
            </Link>
            <Link
              href="/menu?category=drink"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Drink
            </Link>
          </nav>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Contact</h2>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>Phone: 012 345 678</p>
            <p>Email: example@gmail.com</p>
            <p>Phnom Penh, Cambodia</p>
          </div>
        </div>
        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Follow Us</h2>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Facebook
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Telegram
            </Link>

            <Link href="#" className="transition-colors hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <Separator />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Koko Cafe. All rights reserved.</p>
        <p>
          Made by <span className="font-medium text-foreground">@trna</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
