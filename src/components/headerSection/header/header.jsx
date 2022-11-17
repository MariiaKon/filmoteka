import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/nav';
import Searchbar from '../searchbar/searchbar';
import Error from '../error/error';
import LibraryBtns from '../buttonbar/buttonbar';
import { HeadHome, HeadLibrary, Container } from './header.styled';

function Header({ onSubmit }) {
  const location = useLocation();

  return location.pathname.includes('library') ? (
    <HeadLibrary>
      <Container>
        <Navigation />
        <LibraryBtns />
      </Container>
    </HeadLibrary>
  ) : (
    <HeadHome>
      <Container>
        <Navigation />
        <Searchbar onSubmit={onSubmit} />
        {/* <Error
          msg={
            'Search result not successful. Enter the correct movie name and try again.'
          }
        /> */}
      </Container>
    </HeadHome>
  );
}

export default Header;
