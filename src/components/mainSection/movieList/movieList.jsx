import { useOutletContext } from 'react-router-dom';
import useGetTrendings from 'hooks/useGetTrendings';
import useSearchMoviesByQuery from 'hooks/useSearchMoviesByQuery';
import MovieItem from 'components/mainSection/movieItem/movieItem';
import { List } from './movieList.styled';

function MovieList() {
  const { query } = useOutletContext();
  const trendings = useGetTrendings();
  const movies = useSearchMoviesByQuery(query);

  return (
    <List>
      {query === ''
        ? trendings?.map(movie => {
            return <MovieItem key={movie.id} movie={movie} />;
          })
        : movies?.map(movie => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
    </List>
  );
}

export default MovieList;
