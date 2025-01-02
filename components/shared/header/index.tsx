//MARK: Imports
import { Button } from '@/components/ui/button';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from './mode-toggle';

const Header = () => {
  return (
    <header className="w-full border-b ">
      <div className="wrapper flex-between ">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

//MARK: Notes:
//* In a button component, the "asChild" prop essentially allows you to use the button's styling and functionality on a different element, like an anchor tag, by essentially "wrapping" your custom child element with the button's behavior instead of rendering a default button element itself; it's a way to compose functionality onto another component, giving you more flexibility in how you structure your UI.

//* In button design, "variant = ghost" means that the button will appear as a "ghost button," which is a transparent button with only a thin border, essentially looking like the background it's placed on, while still being clickable; it's a subtle button style often used for secondary actions or when you want to minimize visual disruption on a page.
