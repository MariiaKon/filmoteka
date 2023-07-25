import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { CustomRadio } from 'components/searchbar/searchbar.styled';

export const GenresList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 8px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizePrimary};
  line-height: 16px;
  cursor: pointer;

  :hover {
    color: ${varsCss.primaryColor};
    background: ${varsCss.textSecondary};
  }
`;

export const CustomCheckbox = styled(CustomRadio)`
  margin-left: 0;
  margin-right: 6px;

  Input:checked ~ & {
    background: ${varsCss.accentColor};
    border: 2px solid ${varsCss.primaryColor};
  }
`;
