import Genres from './genres/genres';
import { Movie, Poster, Title, Info, Release } from './movieItem.styled';

const base_url = 'https://image.tmdb.org/t/p';
const file_size = '/w300';

function MovieItem({ movies }) {
  return (
    <>
      {movies &&
        movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Poster
                src={
                  movie.poster_path
                    ? `${base_url}${file_size}${movie.poster_path}`
                    : `${process.env.PUBLIC_URL + '/no_poster.jpg'}`
                }
                alt={movie.title}
              />
              <Title>{movie.title}</Title>
              <Info>
                <Genres ids={movie.genre_ids} />
                {movie.release_date && <Release>{movie.release_date}</Release>}
              </Info>
            </Movie>
          );
        })}
    </>
  );
}

export default MovieItem;
