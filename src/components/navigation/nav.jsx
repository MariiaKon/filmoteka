import { useLocation } from 'react-router-dom';
import Logo from 'components/logo/logo';
import { Nav, Navlink } from './nav.styled';

function Navigation() {
  const location = useLocation();

  return (
    <>
      <Logo />

      <Nav>
        <Navlink to="/">Home</Navlink>
        <Navlink
          to="/library/watched"
          className={location.pathname.includes('library') && 'active'}
        >
          Library
        </Navlink>
      </Nav>
    </>
  );
}

export default Navigation;
