import varsCss from 'components/varsCss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 18px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: 22px;
  }
`;

export const LinkToHome = styled(Link)`
  color: ${varsCss.textAccentColor};
  font-size: inherit;
`;
