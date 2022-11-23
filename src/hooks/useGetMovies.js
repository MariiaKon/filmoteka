import * as API from 'api/filmotekaApi';
import { useEffect, useState } from 'react';

function useGetMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  try {
    useEffect(() => {
      API.getMovies(query).then(response => {
        if (response === null || response.results.length === 0) {
          setError(true);
          setMovies(null);
          return;
        }

        const results = response.results.map(movie => {
          return {
            ...movie,
            release_date: movie.release_date
              ? movie.release_date.slice(0, 4)
              : '',
            vote_average: movie.vote_average.toFixed(1),
          };
        });
        setError(false);
        setMovies(prevState => [...results]);
      });
    }, [query]);
  } catch (error) {}

  return { movies, error };
}

export default useGetMovies;
