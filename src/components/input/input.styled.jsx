import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';

export const Field = styled.input`
  width: 100%;
  height: 20px;
  padding: 4px 1px;
  background: transparent;
  color: ${varsCss.primaryColor};
  font-size: ${varsCss.fontSizePrimary};
  border: 1px solid transparent;
  border-bottom: 1px solid ${varsCss.primaryColor};
  transition: ${varsCss.transition};
  outline: none;

  ::placeholder {
    font-size: ${varsCss.fontSizeSecondary};
    line-height: ${varsCss.fontSizeSecondary};
    font-weight: 400;
  }
`;
