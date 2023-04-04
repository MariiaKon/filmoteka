import { useOutletContext } from 'react-router-dom';
import MovieList from 'components/movieList/movieList';
import ActorsList from 'components/actorsList/actorsList';
import Pages from 'components/pagination/pagination';

function HomeView() {
  const { movies, actors, error, totalResults } = useOutletContext();

  return (
    <>
      {movies && <MovieList movies={movies} />}
      {actors && <ActorsList actors={actors} />}
      {!error && <Pages totalResults={totalResults} perPage={20} />}
    </>
  );
}

export default HomeView;
