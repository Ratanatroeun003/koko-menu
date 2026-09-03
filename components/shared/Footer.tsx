import { FaFacebook, FaTelegram, FaPhone } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border rounded-md bg-background">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:gap-8 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Column 1 */}
        <div>
          {/* <h2 className="text-lg font-bold">Quick Links</h2>
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
          </nav> */}
        </div>
        {/* Column 2 */}
        <div>
          {/* <h2 className="text-lg font-bold">Menu</h2>

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
          </nav> */}
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Contact</h2>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>tel: 096 6998 037</p>
            <p>Phnom Penh, Cambodia</p>
          </div>
        </div>
        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Follow Us</h2>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="https://www.facebook.com/share/1GJaLQK9Zf/?mibextid=wwXIfr"
              className="transition-colors hover:text-foreground"
            >
              Facebook Page
            </a>
            <a
              href="https://t.me/+855966998037"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              ឆាតទៅកាន់ Telegram
            </a>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <Separator />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Koko Cafe. All rights reserved.</p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <p>
            Made by <span className="font-bold text-gray-950">@trna</span>
          </p>
          <span className="font-medium text-foreground flex items-center justify-center gap-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/TroeunRatana"
              className="transition-colors hover:text-blue-500 hover:scale-110 border-2 border-gray-950 rounded-full p-1"
            >
              <FaTelegram size="18" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/share/1aCyYxFoSR/?mibextid=wwXIfr"
              className="transition-colors hover:text-blue-500 hover:scale-110 border-2 border-gray-950 rounded-full p-1"
            >
              <FaFacebook size="18" />
            </a>
            <a
              href="tel:+855714407205"
              className="transition-colors hover:text-blue-500 hover:scale-110 border-2 border-gray-950 rounded-full p-1"
            >
              <FaPhone size="18" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
