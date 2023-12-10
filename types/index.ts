export type Movie = {
  id: number;
  imageString: string;
  title: string;
  age: number;
  duration: number;
  overview: string;
  release: number;
  youtubeString: string;
  watchlists: {
    id: string;
    userId: string;
    movieId: number | null;
  }[];
};
