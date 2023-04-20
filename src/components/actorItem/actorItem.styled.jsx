import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Poster, Title, Info } from 'components/movieItem/movieItem.styled';

export const Actor = styled.li`
  display: flex;
  gap: 10px;
  height: calc((${varsCss.mobile}px - 20px * 2) * 0.4 / 2 * 3);

  @media screen and (min-width: ${varsCss.tablet}px) {
    height: calc((${varsCss.tablet}px - 30px - 75px * 2) / 2 * 0.4 / 2 * 3);
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    height: calc(
      (${varsCss.desktop}px - 30px * 2 - 71px * 2) / 3 * 0.4 / 2 * 3
    );
  }
`;

export const Photo = styled(Poster)`
  width: 40%;
  height: 100%;
  margin-bottom: 0;
  aspect-ratio: 2/3;
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
