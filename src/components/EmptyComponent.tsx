import React from "react";
import styles from "@/styles/component.module.css";
import { FileQuestion } from "lucide-react";

export default function EmptyComponent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.container}>
      <FileQuestion size={100} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
