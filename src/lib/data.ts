"use server";

import { MovieDetails, MovieType } from "@/types";

const api_key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWFhODU3MTU5NmUyZjBjZTBlNjI0MzUzNjgwNDI4YyIsIm5iZiI6MTcyNzUyOTQzOS4yNjkzODgsInN1YiI6IjY2ZjdmZWMxMTQwZmJmNmExYTVmMzYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6r-CJkmguGiynbeJGD7631FO_-8lgimByCfkXyggj_8";

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
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export async function searchMovie(query: string) {
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
  return data.results;
}

export async function getMovieCredits(movieId: string) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits/`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data.cast;
}
