import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowUp } from 'icons/arrow_up.svg';
import useGetMovies from 'hooks/useGetMovies';
import useSetQueryStr from 'hooks/useSetQueryStr';
import useScrollUp from 'hooks/useScrollUp';
import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';
import { Button } from './layout.styled';

function Layout() {
  const query = useSelector(state => state.query);
  const page = useSelector(state => state.page);
  const [showUp, setShowUp] = useState(false);
  const { error, movies, totalResults } = useGetMovies(query, page);

  useSetQueryStr(query, page);
  useScrollUp(setShowUp);

  const onUpClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header error={error} />
      <Main>
        <Outlet
          context={{
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
