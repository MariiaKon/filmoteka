import * as API from 'api/filmotekaApi';
import { useEffect, useState } from 'react';

function useSearchMoviesByQuery(query) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.searchMoviesByQuery(query).then(response => {
      if (response === null || response.results.length === 0) {
        setMovies(null);
        return;
      }

      const results = response.results.map(movie => {
        return {
          ...movie,
          genre_ids: movie.genre_ids.slice(0, 2),
          release_date: movie.release_date.slice(0, 4),
        };
      });
      setMovies(prevState => [...results]);
    });
  }, [query]);

  return movies;
}

export default useSearchMoviesByQuery;
