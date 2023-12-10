import Image from "next/image";

import type { Movie } from "@/types";

import MovieCardOverlay from "./MovieCardOverlay";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <div className="relative h-48 cursor-pointer">
      <Image
        src={movie.imageString}
        alt="Movie"
        width={500}
        height={400}
        className="absolute h-full w-full rounded-sm object-cover"
      />

      <div className="relative z-10 h-60 w-full opacity-0 transition duration-500 hover:scale-125 hover:opacity-100">
        <div className="z-10 flex h-full w-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={800}
            height={800}
            className="absolute -z-10 h-full w-full rounded-lg object-cover"
          />

          <MovieCardOverlay movie={movie} />
        </div>
      </div>
    </div>
  );
}
