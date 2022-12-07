import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowUp } from 'icons/arrow_up.svg';
import useGetGenres from 'hooks/useGetGenres';
import useGetMovies from 'hooks/useGetMovies';
import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';
import { Button } from './layout.styled';

function Layout() {
  const navigate = useNavigate();
  const genres = useGetGenres();
  const query = useSelector(state => state.query);
  const page = useSelector(state => state.page);
  const [showUp, setShowUp] = useState(false);
  const { error, movies, totalResults } = useGetMovies(query, page);

  useEffect(() => {
    const handleScroll = () => {
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

  useEffect(() => {
    query === ''
      ? navigate(`?trendings&page=${page}`)
      : navigate(`?query=${query.toLowerCase()}&page=${page}`);
  }, [query, page, navigate]);

  return (
    <>
      <Header error={error} />
      <Main>
        <Outlet
          context={{
            genres,
            movies,
            error,
            totalResults,
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
