import { useOutletContext } from 'react-router-dom';
import MovieList from 'components/movieList/movieList';
import Pages from 'components/pagination/pagination';

function HomeView() {
  const { movies, error, totalResults } = useOutletContext();

  return (
    <>
      {movies && <MovieList movies={movies} />}
      {!error && <Pages totalResults={totalResults} perPage={20} />}
    </>
  );
}

export default HomeView;
