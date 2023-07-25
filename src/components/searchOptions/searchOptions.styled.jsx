import varsCss from 'components/commonCss/varsCss';
import { Button } from 'components/movieDetails/movieDetails.styled';
import styled from 'styled-components';

export const SearchOptionsBox = styled.div`
  position: absolute;
  top: 26px;
  display: flex;
  flex-direction: column;
  width: max-content;
  background: ${varsCss.primaryColor};
  color: ${varsCss.textColor};
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 ${varsCss.textSecondary};
  padding: 4px;
  z-index: 100;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizePrimary};
  line-height: 16px;
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

export const SubmitBtn = styled(Button)`
  margin-top: 16px;
  width: 100%;
  height: 40px;

  :hover,
  :focus {
    background: ${varsCss.accentColor};
    color: ${varsCss.primaryColor};
    border: 1px solid transparent;
    scale: none;
  }
`