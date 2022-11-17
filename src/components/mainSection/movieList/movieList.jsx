import useGetTrendings from 'hooks/useGetTrendings';
import useSearchMoviesByQuery from 'hooks/useSearchMoviesByQuery';
import MovieItem from 'components/mainSection/movieItem/movieItem';
import { List } from './movieList.styled';

function MovieList({ query }) {
  const trendings = useGetTrendings();
  const movies = useSearchMoviesByQuery(query);

  return (
    <List>
      {query === '' ? (
        <MovieItem movies={trendings} />
      ) : (
        <MovieItem movies={movies} />
      )}
    </List>
  );
}

export default MovieList;
