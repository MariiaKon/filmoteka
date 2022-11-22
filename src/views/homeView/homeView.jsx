import { useOutletContext } from 'react-router-dom';
import useGetMovies from 'hooks/useGetMovies';
import MovieList from 'components/mainSection/movieList/movieList';
import Pages from 'components/mainSection/pagination/pagination';

function HomeView() {
  const { query } = useOutletContext();
  const movies = useGetMovies(query);

  return (
    <>
      {movies && <MovieList movies={movies} />}
      <Pages />
    </>
  );
}

export default HomeView;
