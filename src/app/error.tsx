"use client";
import styles from "@/styles/component.module.css";
import { MessageCircleWarning } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <MessageCircleWarning size={100} className={styles.icon} />
      <h2>{error.message || "An error occurred"}</h2>
      <p>
        There was an error while trying to load the page. Please refresh the
        page and try again later.
      </p>
      <button className="button" onClick={() => window.location.reload()}>
        Try again
      </button>
    </main>
  );
}
