"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";

export async function removeFromWatchlist(formData: FormData) {
  const watchlistId = formData.get("watchlistId") as string;
  const pathname = formData.get("pathname") as string;

  await prisma.watchlist.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}
