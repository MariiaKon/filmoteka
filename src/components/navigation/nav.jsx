import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from 'context/authContext';
import Logo from 'components/logo/logo';
import { Nav, Navlink } from './nav.styled';

function Navigation() {
  const location = useLocation();
  const { logout, user } = useContext(AuthContext);

  return (
    <>
      <Logo />

      <Nav>
        <Navlink to="/">Home</Navlink>
        {user && (
          <Navlink
            to="/library/watched"
            className={location.pathname.includes('library') && 'active'}
          >
            Library
          </Navlink>
        )}
        {!user && <Navlink to="/auth/login">Log in</Navlink>}
        {user && (
          <Navlink to="/auth/login" onClick={logout}>
            Log out
          </Navlink>
        )}
      </Nav>
    </>
  );
}

export default Navigation;
