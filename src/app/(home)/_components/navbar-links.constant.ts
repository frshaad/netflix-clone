import { nanoid } from 'nanoid';

type linkProperties = {
  id: string;
  name: string;
  href: string;
};

export const links: linkProperties[] = [
  { id: nanoid(), name: 'Home', href: '/home' },
  { id: nanoid(), name: 'Tv Shows', href: '/home/shows' },
  { id: nanoid(), name: 'Movies', href: '/home/movies' },
  { id: nanoid(), name: 'Recently Added', href: '/home/recently' },
  { id: nanoid(), name: 'My List', href: '/home/user/list' },
];
