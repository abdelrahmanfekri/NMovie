"use client";
import { useDebouncedCallback } from "use-debounce";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "@/styles/navbar.module.css";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    router.push(`/search?q=${search}`);
  };

  const handleSearch = useDebouncedCallback((search: string) => {
    router.push(`/search?q=${search}`);
  }, 500);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        name="search"
        placeholder="Search for a movie..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button type="submit" className={styles.searchBtn}>
        <Search />
      </button>
    </form>
  );
}
