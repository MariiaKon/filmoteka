import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.span`
  font-size: 30px;
  line-height: 35px;
  margin-left: 10px;
  color: ${varsCss.primaryColor};
  display: none;

  @media screen and (min-width: ${varsCss.tablet}px) {
    display: inline-block;
  }
`;
