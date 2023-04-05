import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Poster, Title, Info } from 'components/movieItem/movieItem.styled';

export const Actor = styled.li`
  display: flex;
  gap: 10px;
`;

export const Photo = styled(Poster)`
  width: 40%;
  height: auto;
  margin-bottom: 0;
`;

export const Name = styled(Title)`
  margin-bottom: 10px;
  text-overflow: clip;
  font-weight: 700;
`;

export const Filmography = styled(Info)`
  display: block;
  color: ${varsCss.textColor};
`;
