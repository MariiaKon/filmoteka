import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 2 / 2;
`;

export const LogoTitle = styled.span`
  font-size: 30px;
  line-height: 35px;
  margin-left: 10px;
  color: ${varsCss.primaryColor};

  @media screen and (max-width: ${varsCss.tablet - 1}px) {
    display: none;
  }
`;
