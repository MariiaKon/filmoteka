import ActorItem from 'components/actorItem/actorItem';
import { List } from 'components/movieList/movieList.styled';

function ActorsList({ actors }) {
  return (
    <List>
      {actors.map(actor => {
        return <ActorItem key={actor.id} actor={actor} />;
      })}
    </List>
  );
}

export default ActorsList;
