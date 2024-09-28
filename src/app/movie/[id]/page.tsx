import { getMovieDetails } from "@/lib/data";
import React from "react";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(id);

  return <div>Movie Details</div>;
}
