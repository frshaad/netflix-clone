import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/netflix_logo.svg";

import NavLink from "./NavLink";
import { links } from "./Navlinks.constant";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between p-5 sm:px-6 lg:px-8">
      <nav className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="ml-14 hidden gap-x-4 lg:flex">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-8">
        <Search className="h-5 w-5 cursor-pointer text-gray-300" />
        <Bell className="h-5 w-5 cursor-pointer text-gray-300" />
        <UserButton />
      </div>
    </header>
  );
}
