import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BsChevronUp } from 'react-icons/bs';
import useGetGenres from 'hooks/useGetGenres';
import useGetMovies from 'hooks/useGetMovies';

import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';
import { Button } from './layout.styled';

function Layout() {
  const [query, setQuery] = useState('');
  const [showUp, setShowUp] = useState(false);
  const genres = useGetGenres();
  const { error, movies } = useGetMovies(query);

  const onSubmit = keyword => {
    if (keyword === query) {
      return;
    }

    setQuery(keyword);
  };

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

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header onSubmit={onSubmit} error={error} />
      <Main>
        <Outlet context={{ query, genres, movies, error }} />

        {showUp && (
          <Button type="button" onClick={onClick} className={'up'}>
            <BsChevronUp
              style={{ height: '2em', width: '2em', strokeWidth: '1px' }}
            />
          </Button>
        )}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
