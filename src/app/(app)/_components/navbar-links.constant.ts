type linkProperties = {
  id: string;
  name: string;
  href: string;
};

export const links: linkProperties[] = [
  { id: '1', name: 'Home', href: '/home' },
  { id: '2', name: 'Tv Shows', href: '/home/shows' },
  { id: '3', name: 'Movies', href: '/home/movies' },
  { id: '4', name: 'Recently Added', href: '/home/recently' },
  { id: '5', name: 'My List', href: '/home/user/list' },
];
