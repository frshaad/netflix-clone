import Navbar from './_components/navbar';

type Properties = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Properties) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-11/12 max-w-7xl sm:w-full sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
