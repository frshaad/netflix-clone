import { v4 as uuid } from "uuid";

type linkProps = {
  id: string;
  name: string;
  href: string;
};

export const links: linkProps[] = [
  { id: uuid(), name: "Home", href: "/home" },
  { id: uuid(), name: "Tv Shows", href: "/home/shows" },
  { id: uuid(), name: "Movies", href: "/home/movies" },
  { id: uuid(), name: "Recently Added", href: "/home/recently" },
  { id: uuid(), name: "My List", href: "/home/user/list" },
];
