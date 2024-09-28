import { MovieType } from "@/types";
import React from "react";
import styles from "@/styles/card.module.css";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { getFullImagePath } from "@/lib/utils";
import Link from "next/link";

type MovieCardProps = {
  movie: MovieType;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movie/${movie.id}`}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            src={getFullImagePath(movie.poster_path)}
            alt={`Poster for ${movie.title}`}
          />
        </div>
      </Link>
      <button className={styles.love}>
        <Heart size={24} fill="red" color="red" />
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
