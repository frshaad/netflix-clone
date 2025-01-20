import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Movie } from "@/types";

import MovieCardOverlay from "./MovieCardOverlay";

type Props = {
  movie: Movie;
  large?: boolean;
};

export default function MovieCard({ movie, large }: Props) {
  return (
    <div
      className={cn("relative cursor-pointer h-48", {
        "h-60": large,
      })}
    >
      <Image
        src={movie.imageString}
        alt="Movie"
        width={500}
        height={400}
        className="absolute size-full rounded-sm object-cover"
      />

      <div className="relative z-10 h-60 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={800}
            height={800}
            className="absolute -z-10 size-full rounded-lg object-cover"
          />

          <MovieCardOverlay movie={movie} />
        </div>
      </div>
    </div>
  );
}
