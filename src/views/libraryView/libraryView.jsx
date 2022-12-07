import varsCss from 'components/varsCss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MovieList from 'components/mainSection/movieList/movieList';
import Pages from 'components/mainSection/pagination/pagination';

function LibraryView({ movies }) {
  const [startIdx, setStartIdx] = useState(0);

  const perPage = (() => {
    if (document.documentElement.clientWidth < `${varsCss.tablet}`) {
      return 4;
    } else if (document.documentElement.clientWidth > `${varsCss.desktop}`) {
      return 9;
    }
    return 8;
  })();

  const endIdx = startIdx + perPage;
  const moviesToShow = movies.slice(startIdx, endIdx);

  const handleClick = pageIdx => {
    const newStart = (pageIdx * perPage) % movies.length;
    setStartIdx(newStart);
  };

  return (
    <>
      {movies.length === 0 ? (
        <div>
          There is no movies. <NavLink to="/">Let's add some?</NavLink>
        </div>
      ) : (
        <MovieList movies={moviesToShow} />
      )}
      <Pages totalResults={movies.length} perPage={perPage} cb={handleClick} />
    </>
  );
}

export default LibraryView;
