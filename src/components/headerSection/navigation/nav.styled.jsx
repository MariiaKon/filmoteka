import varsCss from 'components/varsCss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Navlink = styled(NavLink)`
  position: relative;
  color: #fff;
  text-transform: uppercase;
  margin: 0 20px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 767px) {
    font-size: ${varsCss.fontSizeSecondary};
  }

  &.active {
    ::after {
      position: absolute;
      display: block;
      content: '';
      width: 100%;
      height: 3px;
      background: ${varsCss.textAccentColor};
      margin-top: 2px;
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
