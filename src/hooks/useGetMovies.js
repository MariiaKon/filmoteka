import * as API from 'api/tmdbApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function useGetMovies() {
  const location = useLocation();
  const query = useSelector(state => state.query);
  const page = useSelector(state => state.page);
  const searchPath = useSelector(state => state.searchPath);
  const sorter = useSelector(state => state.sorter);
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
        API.getMovies(query, page, searchPath, sorter).then(response => {
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
        API.getMovies(query, page, searchPath, sorter).then(response => {
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
    }, [query, page, searchPath, sorter, location.pathname]);
  } catch (error) {
    setError(true);
  }

  return { movies, actors, error, totalResults, searchPath };
}

export default useGetMovies;
