import MovieItem from 'components/mainSection/movieItem/movieItem';
import { List } from './movieList.styled';

function MovieList({ movies }) {
  return (
    <List>
      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
}

export default MovieList;
