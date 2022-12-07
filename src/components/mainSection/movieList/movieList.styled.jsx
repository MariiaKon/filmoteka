import varsCss from 'components/varsCss';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 280px;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    grid-template-columns: repeat(2, 294px);
    gap: 30px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    grid-template-columns: repeat(3, 274px);
  } ;
`;
