import { MovieType } from "@/types";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface FavoritesState {
  favorites: MovieType[];
  addFavorite: (movie: MovieType) => void;
  removeFavorite: (movieId: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (movie: MovieType) => {
        set((state) => ({
          favorites: [...state.favorites, movie],
        }));
      },
      removeFavorite: (movieId: string) => {
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.id !== movieId),
        }));
      },
    }),
    {
      name: "favorites",
    } as PersistOptions<FavoritesState>
  )
);
