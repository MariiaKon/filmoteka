import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowUp } from 'assets/icons/arrow_up.svg';
import useGetMovies from 'hooks/useGetMovies';
import useSetQueryStr from 'hooks/useSetQueryStr';
import useScrollUp from 'hooks/useScrollUp';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Footer from 'components/footer/footer';
import Error from 'components/error/error';
import { Button } from './layout.styled';

function Layout() {
  const location = useLocation();
  const query = useSelector(state => state.query);
  const page = useSelector(state => state.page);
  const searchPath = useSelector(state => state.searchPath);
  const [showUp, setShowUp] = useState(false);
  const { error, movies, actors, totalResults } = useGetMovies(
    query,
    page,
    searchPath
  );

  useSetQueryStr(query, page);
  useScrollUp(setShowUp);

  const onUpClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Main>
        {error &&
        !location.pathname.includes('library') &&
        !location.pathname.includes('auth') ? (
          <Error
            children={
              searchPath !== 'person'
                ? 'Search result not successful. Enter the correct movie name and try again.'
                : 'Search result not successful. Try something else.'
            }
          />
        ) : (
          <Outlet
            context={{
              movies,
              actors,
              error,
              totalResults,
            }}
          />
        )}

        {showUp && (
          <Button
            type="button"
            onClick={onUpClick}
            className={'up'}
            children={<ArrowUp />}
          />
        )}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
