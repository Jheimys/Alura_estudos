import { useEffect, useState } from "react";
import type { Movie } from "../components/types";
import { getMOvies } from "../components/api";

export function useFetchMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMOvies();
        setMovies(data);
      } catch (err) {
        setError("Erro ao buscar filmes.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { movies, isLoading, error };
}
