import Image from "next/image";
import { getMovieList } from "@/lib/data";
import Navbar from "@/components/Navbar";

// {
//   adult: false,
//   backdrop_path: '/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg',
//   genre_ids: [ 80, 28, 53, 18 ],
//   id: 646097,
//   original_language: 'en',
//   original_title: 'Rebel Ridge',
//   overview: "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
//   popularity: 579.031,
//   poster_path: '/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg',
//   release_date: '2024-08-27',
//   title: 'Rebel Ridge',
//   video: false,
//   vote_average: 7.032,
//   vote_count: 709
// }

export default async function Home() {
  const movies = await getMovieList(1);
  return (
    <div>
      <Navbar />
    </div>
  );
}
