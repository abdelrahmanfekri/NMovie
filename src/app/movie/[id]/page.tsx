import { getMovieDetails } from "@/lib/data";
import styles from "@/styles/movie-details.module.css";
import { getFullImagePath } from "@/lib/utils";
import ImageWithFallback from "@/components/ImageWithFallback";
import PersonCard from "@/components/PersonCard";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id);
  return {
    title: `NMovie - ${movie.title}`,
    description: movie.synopsis,
    image: getFullImagePath(movie.poster_path),
  };
}

export default async function movieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(id);
  return (
    <div>
      <header className={styles.header}>
        <ImageWithFallback
          src={getFullImagePath(movie.backdrop_path)}
          fill
          alt={movie.title + " backdrop"}
          className="object-cover"
        />
        <div className={styles.headerContent}>
          <h1>{movie.title}</h1>
          <p>{movie.genres.map((gen) => gen.name).join(",")}</p>
          <p>{movie.release_date}</p>
          <p>{movie.runtime} min</p>
        </div>
      </header>
      <section className={styles.content}>
        <main className={styles.mainInfo}>
          <ImageWithFallback
            src={getFullImagePath(movie.poster_path)}
            width={200}
            height={300}
            alt={movie.director.name}
          />
          <div className={styles.synopsis}>
            <h2>Synopsis</h2>
            <p>{movie.synopsis}</p>
            <a href={movie.home_page} target="_blank" rel="noreferrer">
              Official Website
            </a>
          </div>
        </main>
        <aside className={styles.crew}>
          <h2>Director</h2>
          <PersonCard
            name={movie.director.name}
            image={getFullImagePath(movie.director.image_path)}
            summary="Director"
          />
        </aside>
        <aside className={styles.cast}>
          <h2>Cast</h2>
          <div className={styles.castGrid}>
            {movie.cast.map((person) => (
              <PersonCard
                key={person.name}
                name={person.name}
                image={getFullImagePath(person.image_path)}
                summary={person.character}
              />
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
