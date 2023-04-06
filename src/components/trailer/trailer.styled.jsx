import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';

export const Video = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 5px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    position: static;
    grid-area: 1 / 1 / 2 / 3;
  }

  :hover {
    border: 2px solid ${varsCss.accentColor};
  }
`;
