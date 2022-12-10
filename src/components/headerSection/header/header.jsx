import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/nav';
import Searchbar from '../searchbar/searchbar';
import Error from '../error/error';
import LibraryBtns from '../buttonbar/buttonbar';
import { HeaderSection, Container } from './header.styled';

function Header({ error }) {
  const location = useLocation();

  return (
    <HeaderSection location={location.pathname.includes('library')}>
      <Container>
        <Navigation />
        {location.pathname.includes('library') ? (
          <LibraryBtns />
        ) : (
          <>
            <Searchbar />
            {error && (
              <Error
                msg={
                  'Search result not successful. Enter the correct movie name and try again.'
                }
              />
            )}
          </>
        )}
      </Container>
    </HeaderSection>
  );
}

export default Header;
