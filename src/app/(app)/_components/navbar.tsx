import Image from 'next/image';
import Link from 'next/link';

import { UserButton } from '@clerk/nextjs';
import { Bell, Search } from 'lucide-react';

import Logo from '@/../public/netflix_logo.svg';

import MobileNavbar from './mobile-navbar';
import NavLink from './navbar-link';
import { links } from './navbar-links.constant';

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between p-5 sm:px-6 lg:px-8">
      <nav className="flex items-center">
        <Link className="w-32" href="/">
          <Image alt="Netflix logo" src={Logo} priority />
        </Link>
        <ul className="ml-14 hidden gap-x-4 md:flex">
          {links.map((link) => (
            <NavLink key={link.id} label={link.name} path={link.href} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-8">
        <MobileNavbar />
        <Search className="size-5 cursor-pointer text-gray-300" />
        <Bell className="size-5 cursor-pointer text-gray-300" />
        <UserButton />
      </div>
    </header>
  );
}
