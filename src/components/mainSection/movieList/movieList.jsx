import { useOutletContext } from 'react-router-dom';
import useGetMovies from 'hooks/useGetMovies';
import MovieItem from 'components/mainSection/movieItem/movieItem';
import { List } from './movieList.styled';

function MovieList() {
  const { query } = useOutletContext();
  const movies = useGetMovies(query);

  return (
    <List>
      {movies &&
        movies.map(movie => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
    </List>
  );
}

export default MovieList;
