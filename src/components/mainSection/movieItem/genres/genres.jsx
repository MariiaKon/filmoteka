import { useOutletContext } from 'react-router-dom';
import { GenreList, GenreItem } from './genres.styled';

function Genres({ ids }) {
  const { genres } = useOutletContext();
  const genreIdName = ids.map(id => {
    return genres.find(genre => id === genre.id);
  });

  return (
    <GenreList>
      {genreIdName && genreIdName.length > 0 ? (
        genreIdName.map(genre => {
          return <GenreItem key={genre.id}>{genre.name}</GenreItem>;
        })
      ) : (
        <GenreItem>Other</GenreItem>
      )}
    </GenreList>
  );
}

export default Genres;
