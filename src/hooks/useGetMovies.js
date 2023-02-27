import * as API from 'api/tmdbApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useGetMovies(query, page) {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  try {
    useEffect(() => {
      if (location.pathname.includes('library')) {
        return;
      }

      API.getMovies(query, page).then(response => {
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
        setTotalResults(response.total_results);
      });
    }, [query, page, location.pathname]);
  } catch (error) {}

  return { movies, error, totalResults };
}

export default useGetMovies;
