import { useOutletContext } from 'react-router-dom';
import MovieList from 'components/mainSection/movieList/movieList';
import Pages from 'components/mainSection/pagination/pagination';

function HomeView() {
  const { movies, error, totalResults } = useOutletContext();

  return (
    <>
      {movies && <MovieList movies={movies} />}
      {!error && (
        <Pages totalResults={totalResults} perPage={20} cb={() => {}} />
      )}
    </>
  );
}

export default HomeView;
