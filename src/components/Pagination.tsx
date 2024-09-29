"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "@/styles/pagination.module.css";

export default function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();

  const nextPage = () => {
    router.push(`/?page=${Number(page) + 1}`);
  };

  const prevPage = () => {
    router.push(`/?page=${Number(page) - 1}`);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={prevPage} disabled={page == 1} className="button">
        Prev
      </button>
      <span className={styles.pageInfo}>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={nextPage}
        disabled={page == totalPages}
        className="button"
      >
        Next
      </button>
    </div>
  );
}
