import { getMovieDetails } from "@/lib/data";
import styles from "@/styles/movie-details.module.css";
import { getFullImagePath } from "@/lib/utils";
import ImageWithFallback from "@/components/ImageWithFallback";

export default async function movieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(id);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ImageWithFallback
          src={getFullImagePath(movie?.poster_path)}
          alt={`${movie?.title} backdrop`}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.headerContent}>
          <h1 className={styles.title}>{movie?.title}</h1>
          <p className={styles.genres}>
            {movie?.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className={styles.runtime}>{movie?.runtime} minutes</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <ImageWithFallback
            src={getFullImagePath(movie?.poster_path)}
            alt={movie?.title}
            width={300}
            height={450}
            className={styles.poster}
          />
          <div className={styles.synopsis}>
            <h2>Synopsis</h2>
            <p>{movie?.synopsis}</p>
          </div>
        </div>

        <div className={styles.crew}>
          <h2>Director</h2>
          <div className={styles.person}>
            <ImageWithFallback
              src={getFullImagePath(movie?.director.image_path)}
              alt={movie?.director.name}
              width={100}
              height={100}
              className={styles.personImage}
            />
            <p className={styles.personName}>{movie?.director.name}</p>
          </div>
        </div>

        <div className={styles.cast}>
          <h2>Cast</h2>
          <div className={styles.castGrid}>
            {movie?.cast.map((actor) => (
              <div key={actor?.name} className={styles.person}>
                <ImageWithFallback
                  src={getFullImagePath(actor?.image_path)}
                  alt={actor?.name}
                  width={100}
                  height={100}
                  fallbackSrc="/person-fallback.png"
                />
                <p className={styles.personName}>{actor?.name}</p>
                <p className={styles.character}>{actor?.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
