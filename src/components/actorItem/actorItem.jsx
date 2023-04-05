import { base_url, profile_size } from 'api/tmdbApi';
import { Actor, Photo, Name, Filmography } from './actorItem.styled';

function ActorItem({ actor }) {
  const movies = actor?.known_for?.map(movie => {
    return {
      ...movie,
      date: movie.release_date
        ? movie.release_date.slice(0, 4)
        : movie.first_air_date
        ? movie.first_air_date.slice(0, 4)
        : '',
    };
  });

  return (
    <>
      {actor && (
        <Actor>
          <Photo
            src={
              actor.profile_path
                ? `${base_url}${profile_size}${actor.profile_path}`
                : `${process.env.PUBLIC_URL + '/no_poster.webp'}`
            }
            alt={actor.name}
            loading="lazy"
          />
          <Filmography>
            <Name>{actor.name}</Name>
            <ul>
              {movies?.map(movie => {
                return (
                  <li key={movie.id}>
                    {movie.title ? movie.title : movie.name}

                    {movie.date !== '' && ` (${movie?.date})`}
                  </li>
                );
              })}
            </ul>
          </Filmography>
        </Actor>
      )}
    </>
  );
}

export default ActorItem;
