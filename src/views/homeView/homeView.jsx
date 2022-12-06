import { useOutletContext } from 'react-router-dom';
// import useGetMovies from 'hooks/useGetMovies';
import MovieList from 'components/mainSection/movieList/movieList';
import Pages from 'components/mainSection/pagination/pagination';

function HomeView() {
  const { /*query,*/ movies, error, totalResults } = useOutletContext();
  // const { movies, error } = useGetMovies(query);

  return (
    <>
      {movies && <MovieList movies={movies} />}
      {!error && <Pages totalResults={totalResults} perPage={20} />}
    </>
  );
}

export default HomeView;
