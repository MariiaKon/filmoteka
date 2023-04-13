import * as API from 'api/tmdbApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useGetMovies(query, page, searchPath) {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  try {
    useEffect(() => {
      if (location.pathname.includes('library')) {
        return;
      }

      if (searchPath === 'person') {
        API.getMovies(query, page, searchPath).then(response => {
          if (response === null || response.results.length === 0) {
            setError(true);
            setActors([]);
            setMovies([]);
            return;
          }

          setError(false);
          setActors(prevState => [...response.results]);
          setMovies([]);
          setTotalResults(response.total_results);
        });
      } else {
        API.getMovies(query, page, searchPath).then(response => {
          if (response === null || response.results.length === 0) {
            setError(true);
            setMovies([]);
            setActors([]);
            return;
          }

          const results = response.results.map(movie => {
            return {
              ...movie,
              release_date: movie.release_date
                ? movie.release_date.slice(0, 4)
                : movie.first_air_date
                ? movie.first_air_date.slice(0, 4)
                : '',
              vote_average: movie.vote_average.toFixed(1),
            };
          });
          setError(false);
          setMovies(prevState => [...results]);
          setActors([]);
          setTotalResults(response.total_results);
        });
      }
    }, [query, page, searchPath, location.pathname]);
  } catch (error) {
    setError(true);
  }

  return { movies, actors, error, totalResults };
}

export default useGetMovies;
