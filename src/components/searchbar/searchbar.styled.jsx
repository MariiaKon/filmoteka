import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';
import { Field } from 'components/input/input.styled';

export const Form = styled.form`
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  margin-top: 40px;
`;

export const Input = styled(Field)`
  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: ${varsCss.fontSizeSecondary};
  }

  ::placeholder {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${varsCss.primaryColor};

    @media screen and (min-width: ${varsCss.tablet}px) {
      font-size: ${varsCss.fontSizeSecondary};
      line-height: 16px;
    }
  }
`;

export const SubmitBtn = styled(Btn)`
  position: absolute;
  top: -10px;
  right: -15px;
  border: none;
`;
