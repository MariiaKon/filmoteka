import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as ArrowUp } from 'icons/arrow_up.svg';
import useGetGenres from 'hooks/useGetGenres';
import useGetMovies from 'hooks/useGetMovies';

import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';
import { Button } from './layout.styled';

function Layout() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showUp, setShowUp] = useState(false);
  const genres = useGetGenres();
  const { error, movies, totalResults } = useGetMovies(query, page);

  useEffect(() => {
    const handleScroll = e => {
      document.documentElement.clientHeight < window.scrollY
        ? setShowUp(true)
        : setShowUp(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onUpClick = () => {
    window.scrollTo(0, 0);
  };

  const onSubmit = keyword => {
    if (keyword === query) {
      return;
    }

    setQuery(keyword);
    setPage(1);
  };

  const onPageClick = page => {
    setPage(page);
  };

  return (
    <>
      <Header onSubmit={onSubmit} error={error} />
      <Main>
        <Outlet
          context={{
            query,
            genres,
            movies,
            error,
            totalResults,
            onPageClick,
            page,
          }}
        />

        {showUp && (
          <Button type="button" onClick={onUpClick} className={'up'}>
            <ArrowUp />
          </Button>
        )}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
