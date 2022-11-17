import varsCss from 'components/varsCss';
import styled from 'styled-components';

export const ErrorMsg = styled.p`
  grid-area: 3 / 1 / 4 / 3;
  display: flex;
  justify-content: center;
  color: ${varsCss.textErrorColor};
  font-weight: 400;
  font-size: ${varsCss.fontSizeSecondary};
  margin-top: 22px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
