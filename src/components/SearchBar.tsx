"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "@/styles/navbar.module.css";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => {
          router.push(`/search?q=${e.target.value}`);
        }}
      />
      <button type="submit" className={styles.searchBtn}>
        <Search />
      </button>
    </form>
  );
}
