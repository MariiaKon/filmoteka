import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';

export const Form = styled.form`
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  padding: 4px 1px;
  background: transparent;
  color: ${varsCss.primaryColor};
  font-size: ${varsCss.fontSizePrimary};
  border: none;
  border-bottom: 1px solid ${varsCss.primaryColor};

  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: ${varsCss.fontSizeSecondary};
  }

  ::placeholder {
    font-size: ${varsCss.fontSizeSecondary};
    line-height: 14px;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${varsCss.primaryColor};

    @media screen and (min-width: ${varsCss.tablet}px) {
      font-size: ${varsCss.fontSizeSecondary};
      line-height: 16px;
    }
  }

  :active,
  :focus {
    outline: none;
    border-bottom: 1px solid ${varsCss.primaryColor};
  }
`;

export const SubmitBtn = styled(Btn)`
  position: absolute;
  top: -10px;
  right: -15px;
  border: none;
  cursor: pointer;
`;
