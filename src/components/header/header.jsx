import { useLocation } from 'react-router-dom';
import Navigation from 'components/navigation/nav';
import Searchbar from 'components/searchbar/searchbar';
import LibraryBtns from 'components/buttonbar/buttonbar';
import { HeaderSection, Container } from './header.styled';

function Header() {
  const location = useLocation();

  return (
    <HeaderSection location={location.pathname.includes('library')}>
      <Container>
        <Navigation />

        {location.pathname.includes('library') ? (
          <LibraryBtns />
        ) : !location.pathname.includes('auth') ? (
          <Searchbar />
        ) : (
          false
        )}
      </Container>
    </HeaderSection>
  );
}

export default Header;
