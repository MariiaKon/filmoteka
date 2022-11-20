import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useGetGenres from 'hooks/useGetGenres';
import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';

function Layout() {
  const [query, setQuery] = useState('');
  const genres = useGetGenres();

  const onSubmit = keyword => {
    if (keyword === query) {
      return;
    }

    setQuery(keyword);
  };

  return (
    <>
      <Header onSubmit={onSubmit} />
      <Main>
        <Outlet context={{ query, genres }} />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
