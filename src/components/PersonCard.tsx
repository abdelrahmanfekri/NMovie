import React from "react";
import ImageWithFallback from "./ImageWithFallback";
import styles from "@/styles/person-card.module.css";
export default function PersonCard({
  name,
  image,
  summary,
}: {
  name: string;
  image: string;
  summary: string;
}) {
  return (
    <div className={styles.person}>
      <ImageWithFallback
        className={styles.image}
        width={100}
        height={100}
        src={image}
        alt={name}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.summary}>{summary}</p>
    </div>
  );
}
