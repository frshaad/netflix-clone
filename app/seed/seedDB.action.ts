"use server";

import prisma from "@/lib/db";

import { movieDB } from "./movieDb.constant";

export async function postData() {
  await prisma.movie.createMany({
    data: movieDB,
  });
}
