import * as API from 'api/filmotekaApi';
import { useEffect, useState } from 'react';

function useGetTrendings() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getTrendings().then(response => {
      const results = response.results.map(movie => {
        return {
          ...movie,
          genre_ids: movie.genre_ids.slice(0, 2),
          release_date: movie.release_date.slice(0, 4),
        };
      });
      setMovies(prevState => [...results]);
    });
  }, []);

  return movies;
}

export default useGetTrendings;
