import React from "react";
import SearchBar from "./SearchBar";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
import { BookHeart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          NMovies
        </Link>
        <SearchBar />
        <Link title="favorites" href="/favorites" className={styles.navLink}>
          <BookHeart size={28} color="red" />
        </Link>
      </div>
    </nav>
  );
}
