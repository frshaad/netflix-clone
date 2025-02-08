type linkProperties = {
  id: string;
  name: string;
  href: string;
};

export const links: linkProperties[] = [
  { id: '1', name: 'Home', href: '/' },
  { id: '2', name: 'TV Shows', href: '/shows' },
  { id: '3', name: 'Movies', href: '/movies' },
  { id: '4', name: 'Recently Added', href: '/recent' },
  { id: '5', name: 'My List', href: '/watchlist' },
];
