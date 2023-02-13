import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';

export const Btn = styled.button`
  min-height: 40px;
  height: fit-content;
  max-height: 44px;
  min-width: 40px;
  width: fit-content;
  background: transparent;
  color: ${varsCss.primaryColor};
  border-radius: 5px;
  border: 1px solid;
  border-color: ${varsCss.primaryColor};
  text-transform: uppercase;
  transition: ${varsCss.transition};
`;
