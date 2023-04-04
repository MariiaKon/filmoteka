import styled from 'styled-components';
import { Poster, Title } from 'components/movieItem/movieItem.styled';

export const Actor = styled.li`
  display: flex;
`;

export const Photo = styled(Poster)`
  width: 140px;
  height: auto;
`;

export const Name = styled(Title)`
  margin-left: 10px;
`;
