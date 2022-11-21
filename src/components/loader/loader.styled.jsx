import varsCss from 'components/varsCss';
import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { rotate: 45deg }
 100% { rotate: 405deg  }
`;

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 150px;
  height: 150px;
  border: 15px solid ${varsCss.secondaryColor};
  border-top-color: ${varsCss.accentColor};
  border-radius: 50%;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transition-timing-function: ease-in-out;
`;
