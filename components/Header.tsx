import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';
/*import Logo from '@/data/logo.svg';*/
import Image from 'next/image';
import Link from './Link';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import SearchButton from './SearchButton';

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10 flex-row-reverse'; // Fully RTL
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50';
  }

  return (
    <header className={headerClass}>
      {/* Navigation Links and Actions */}
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {/* Menu Items */}
        <div className="no-scrollbar hidden max-w-40 items-center overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 mr-4" // RTL spacing
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* Search Button, Theme Switch, and Mobile Nav */}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>

      {/* Logo and Header Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
      <div className="flex items-center justify-between">
        {/* Logo comes first */}
        <div className="mr-3">
          {/* Replace the Logo component with next/image */}
          <Image
            src="/static/images/logo.png" // Path to your new logo
            alt="Logo"
            width={100} // Adjust the width as needed
            height={50} // Adjust the height as needed
            priority // Ensure the logo is loaded early
            className="object-contain dark:invert" // Added dark:invert for dark mode
          />
        </div>
        {/* Title comes after */}
        {typeof siteMetadata.headerTitle === 'string' ? (
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            {siteMetadata.headerTitle}
          </div>
        ) : (
          siteMetadata.headerTitle
        )}
      </div>
    </Link>
    </header>
  );
};

export default Header;