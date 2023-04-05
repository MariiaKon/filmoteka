import { useSelector } from 'react-redux';
import MovieItem from 'components/movieItem/movieItem';
import ActorItem from 'components/actorItem/actorItem';
import { ListGrid } from './list.styled';

function List({ items }) {
  const searchPath = useSelector(state => state.searchPath);

  return (
    <ListGrid>
      {searchPath === 'person'
        ? items.map(item => {
            return <ActorItem key={item.id} actor={item} />;
          })
        : items.map(item => {
            return <MovieItem key={item.id} movie={item} />;
          })}
    </ListGrid>
  );
}

export default List;
