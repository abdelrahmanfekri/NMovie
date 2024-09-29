"use client";
import { MovieType } from "@/types";
import React from "react";
import styles from "@/styles/card.module.css";
import { Heart, Star } from "lucide-react";
import { getFullImagePath } from "@/lib/utils";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { useFavoritesStore } from "@/store/favorites";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  let isFavorite = favorites.some((fav) => fav.id === movie.id);
  return (
    <div className={styles.card}>
      <Link href={`/movie/${movie.id}`}>
        <div className={styles.imageContainer}>
          <ImageWithFallback
            layout="fill"
            src={getFullImagePath(movie.poster_path)}
            alt={`Poster for ${movie.title}`}
          />
        </div>
      </Link>
      <button
        className={styles.love}
        onClick={() => {
          isFavorite ? removeFavorite(movie.id) : addFavorite(movie);
        }}
      >
        <Heart size={24} fill={isFavorite ? "red" : ""} color="red" />
      </button>
      <div className={styles.info}>
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>
          <Star
            size={16}
            style={{ paddingRight: 5 }}
            fill="yellow"
            color="yellow"
          />
          {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
