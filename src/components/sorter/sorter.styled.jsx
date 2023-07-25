import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';

export const SorterBox = styled.div`
  position: absolute;
  top: 26px;
  display: flex;
  flex-direction: column;
  width: max-content;
  background: ${varsCss.primaryColor};
  color: ${varsCss.textColor};
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 ${varsCss.textSecondary};
  padding: 2px;
  z-index: 100;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizePrimary};
  line-height: 16px;
  padding: 2px 4px;
  cursor: pointer;

  :hover {
    color: ${varsCss.primaryColor};
    background: ${varsCss.textSecondary};
  }

  :has(input:checked) {
    color: ${varsCss.primaryColor};
    background: ${varsCss.accentColor};
  }
`;
