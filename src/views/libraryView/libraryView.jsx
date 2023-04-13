import { useState } from 'react';
import useLibraryMoviesPerPage from 'hooks/useLibraryMoviesPerPage';
import EmptyList from './emptyList/emptyList';
import List from 'components/list/list';
import Pages from 'components/pagination/pagination';

function LibraryView({ movies }) {
  const [startIdx, setStartIdx] = useState(0);
  const perPage = useLibraryMoviesPerPage();
  const endIdx = startIdx + perPage;

  const moviesToShow =
    movies.slice(startIdx, endIdx).length > 0
      ? movies.slice(startIdx, endIdx)
      : movies.slice(startIdx - perPage, startIdx);

  const handleClick = pageIdx => {
    const newStart = (pageIdx * perPage) % movies.length;
    setStartIdx(newStart);
  };

  return (
    <>
      {movies.length === 0 ? <EmptyList /> : <List items={moviesToShow} />}
      <Pages totalResults={movies.length} perPage={perPage} cb={handleClick} />
    </>
  );
}

export default LibraryView;
