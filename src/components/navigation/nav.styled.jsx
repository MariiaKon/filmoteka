import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  grid-area: 1/2/1/3;
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

  @media screen and (min-width: ${varsCss.tablet}px) {
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
