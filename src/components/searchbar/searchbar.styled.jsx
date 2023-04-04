import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';
import { Field } from 'components/input/input.styled';
import { Container } from 'components/header/header.styled';

export const Form = styled.form`
  grid-area: 2 / 1 / 3 / 3;
  position: relative;
  margin-top: 40px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${varsCss.primaryColor};
  cursor: pointer;

  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: ${varsCss.fontSizeSecondary};
    line-height: 16px;
    margin-right: 36px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Radio = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;
`;

export const CustomRadio = styled.span`
  display: block;
  margin-left: 6px;
  background: ${varsCss.primaryColor};
  height: 12px;
  width: 12px;
  transition: ${varsCss.transition};
  border-radius: 2px;

  Input:checked ~ & {
    background: ${varsCss.accentColor};
    border: 2px solid ${varsCss.primaryColor};
  }
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

export const SearchPathBox = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    justify-content: flex-end;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    justify-content: flex-start;
  }
`;
