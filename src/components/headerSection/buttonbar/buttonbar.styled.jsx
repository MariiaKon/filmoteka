import varsCss from 'components/varsCss';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonBar = styled.ul`
  grid-area: 2 / 1 / 3 / 3;
  gap: 20px;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    gap: 15px;
  }
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 44px;
  background: transparent;
  color: ${varsCss.primaryColor};
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid;
  border-color: ${varsCss.primaryColor};
  transition: ${varsCss.transition};

  @media screen and (min-width: ${varsCss.tablet}px) {
    width: 136px;
  }

  :hover,
  :focus {
    box-shadow: 0px 8px 43px ${varsCss.accentColor};
  }

  &.active {
    background: ${varsCss.accentColor};
    border: none;
    filter: drop-shadow(0px 8px 43px ${varsCss.accentColor});
  }
`;
