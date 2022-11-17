import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/headerSection/header/header';
import Main from 'components/mainSection/main/main';
import Footer from 'components/footerSection/footer';

function Layout() {
  const [query, setQuery] = useState('');

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
        <Outlet context={{ query }} />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
