import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";

import Navbar from "./_components/Navbar";

type Props = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <Navbar />
      <main className="mx-auto w-11/12 max-w-7xl sm:w-full sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
