import { GenreList } from './genres.styled';

function Genres({ ids }) {
  // ids = [28, 12];
  // genres = [
  //   { id: 28, name: 'Action' },
  //   { id: 12, name: 'Adventure' },
  // ];

  // const genreNames = ids.map(id => {
  //   const names = genres.map(genre => {});
  // });
  // console.log(genreNames);

  return (
    <GenreList>
      {ids.length > 0 ? (
        ids.map(id => {
          return <li key={id}>{id}</li>;
        })
      ) : (
        <li>Other</li>
      )}
    </GenreList>
  );
}

export default Genres;
