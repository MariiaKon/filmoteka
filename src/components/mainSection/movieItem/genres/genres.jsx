import { useOutletContext } from 'react-router-dom';
import update from 'immutability-helper';
import { GenreList, GenreItem } from './genres.styled';

function Genres({ ids, isOpen }) {
  const { genres } = useOutletContext();

  const genreIdName = ids.map(id => {
    return genres.find(genre => id === genre.id);
  });

  const cropGenresList = (ids, isOpen) => {
    if (isOpen || ids.length <= 2) {
      return ids;
    } else if (ids.length > 2) {
      const newIds = ids.slice(0, 2);
      return update(newIds, { $push: [{ id: 'Other', name: 'Other' }] });
    }
  };

  const croppedIds = cropGenresList(genreIdName, isOpen);

  return (
    <GenreList>
      {croppedIds?.length > 0 ? (
        croppedIds.map(genre => {
          return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
        })
      ) : (
        <GenreItem>Other</GenreItem>
      )}
    </GenreList>
  );
}

export default Genres;
