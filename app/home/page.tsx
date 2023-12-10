import MovieClip from "./_components/MovieClip";
import RecentlyAdded from "./_components/RecentlyAdded";

export default function HomePage() {
  return (
    <>
      <MovieClip />
      <h1 className="text-3xl font-bold ">Recently Added</h1>
      <RecentlyAdded />
    </>
  );
}
