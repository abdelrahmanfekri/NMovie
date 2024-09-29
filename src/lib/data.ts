"use server";

import { MovieDetails, MovieType } from "@/types";

const api_key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWFhODU3MTU5NmUyZjBjZTBlNjI0MzUzNjgwNDI4YyIsIm5iZiI6MTcyNzUyOTQzOS4yNjkzODgsInN1YiI6IjY2ZjdmZWMxMTQwZmJmNmExYTVmMzYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6r-CJkmguGiynbeJGD7631FO_-8lgimByCfkXyggj_8";

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

// {
//   "adult": false,
//   "backdrop_path": "/cyKH7pDFlxIXluqRyNoHHEpxSDX.jpg",
//   "belongs_to_collection": null,
//   "budget": 0,
//   "genres": [
//     {
//       "id": 80,
//       "name": "Crime"
//     },
//     {
//       "id": 28,
//       "name": "Action"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 18,
//       "name": "Drama"
//     }
//   ],
//   "homepage": "https://www.netflix.com/title/81157729",
//   "id": 646097,
//   "imdb_id": "tt11301886",
//   "origin_country": [
//     "US"
//   ],
//   "original_language": "en",
//   "original_title": "Rebel Ridge",
//   "overview": "A former Marine confronts corruption in a small town when local law enforcement unjustly seizes the bag of cash he needs to post his cousin's bail.",
//   "popularity": 579.031,
//   "poster_path": "/xEt2GSz9z5rSVpIHMiGdtf0czyf.jpg",
//   "production_companies": [
//     {
//       "id": 1976,
//       "logo_path": "/vuNHAl3LpcNtjtRx8Ml4gpUMO2G.png",
//       "name": "filmscience",
//       "origin_country": "US"
//     },
//     {
//       "id": 125043,
//       "logo_path": null,
//       "name": "Bonneville Pictures",
//       "origin_country": "US"
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "2024-08-27",
//   "revenue": 0,
//   "runtime": 132,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Their laws. His rules.",
//   "title": "Rebel Ridge",
//   "video": false,
//   "vote_average": 7.03,
//   "vote_count": 710
// }

// {
//   "adult": false,
//   "gender": 2,
//   "id": 1763709,
//   "known_for_department": "Acting",
//   "name": "Aaron Pierre",
//   "original_name": "Aaron Pierre",
//   "popularity": 58.681,
//   "profile_path": "/hNwZWdT2KxKj1YLbipvtUhNjfAp.jpg",
//   "cast_id": 42,
//   "character": "Terry Richmond",
//   "credit_id": "616dc79733ec260061b23fae",
//   "order": 0
// },

export async function getMovieList(page: number): Promise<[MovieType]> {
  const url = `https://api.themoviedb.org/3/discover/movie?page=${page}/`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  let movies: [MovieType] = data.results.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  });
  return movies;
}

export async function getMovieDetails(movieId: string): Promise<MovieDetails> {
  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
  const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };
  const detailsResponse = await fetch(detailsUrl, options);
  const creditsResponse = await fetch(creditsUrl, options);
  const detailsData = await detailsResponse.json();
  const creditsData = await creditsResponse.json();
  const genres = detailsData.genres.map((genre: any) => {
    return {
      id: genre.id,
      name: genre.name,
    };
  });
  const cast = creditsData.cast
    .map((actor: any) => {
      if (
        actor.known_for_department === "Acting" &&
        actor.profile_path &&
        actor.name &&
        actor.character
      ) {
        return {
          name: actor.name,
          character: actor.character,
          image_path: actor.profile_path,
        };
      }
    })
    .filter((actor: any) => actor);
  const director = creditsData.crew.find(
    (actor: any) => actor.job === "Director"
  );
  return {
    id: detailsData.id,
    title: detailsData.title,
    poster_path: detailsData.poster_path,
    release_date: detailsData.release_date,
    vote_average: detailsData.vote_average,
    synopsis: detailsData.overview,
    genres: genres,
    director: {
      name: director?.name,
      image_path: director?.profile_path,
    },
    cast: cast,
    runtime: detailsData.runtime,
  };
}

export async function searchMovie(query: string): Promise<[MovieType]> {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  let movies: [MovieType] = data.results.map((movie: any) => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  });
  return movies;
}
