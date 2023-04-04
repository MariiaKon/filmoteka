import { base_url, profile_size } from 'api/tmdbApi';
import { Actor, Photo, Name } from './actorItem.styled';

function ActorItem({ actor }) {
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
          <div>
            <Name>{actor.name}</Name>
            <ul>
              {actor.known_for.map(movie => {
                return (
                  <li>
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </li>
                );
              })}
            </ul>
          </div>
        </Actor>
      )}
    </>
  );
}

export default ActorItem;
