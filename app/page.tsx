import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";

export default async function RedirectPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
}
