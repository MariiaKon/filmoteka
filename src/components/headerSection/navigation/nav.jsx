import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { Nav, Navlink, Navbar } from './nav.styled';

function Navigation() {
  const location = useLocation();

  return (
    <>
      <Navbar>
        <Logo />
      </Navbar>
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
