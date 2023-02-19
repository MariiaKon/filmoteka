import varsCss from 'components/commonCss/varsCss';
import { useState } from 'react';
import EmptyList from './emptyList/emptyList';
import MovieList from 'components/movieList/movieList';
import Pages from 'components/pagination/pagination';

function LibraryView({ movies }) {
  const [startIdx, setStartIdx] = useState(0);

  const perPage = (() => {
    if (document.documentElement.clientWidth < `${varsCss.tablet}`) {
      return 4;
    } else if (document.documentElement.clientWidth >= `${varsCss.desktop}`) {
      return 9;
    }
    return 8;
  })();

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
      {movies.length === 0 ? (
        <EmptyList />
      ) : (
        <MovieList movies={moviesToShow} />
      )}
      <Pages totalResults={movies.length} perPage={perPage} cb={handleClick} />
    </>
  );
}

export default LibraryView;
