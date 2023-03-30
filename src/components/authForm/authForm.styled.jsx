import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Btn } from 'components/button/button.styled';
import { ErrorMsg } from 'components/error/error.styled';
import { Field } from 'components/input/input.styled';

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px ${varsCss.textSecondary};
  border-radius: 5px;
  font-size: ${varsCss.fontSizeSecondary};
  gap: 30px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 30px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${varsCss.fontSizePrimary};
  text-transform: none;

  :focus-within {
    color: ${varsCss.accentColor};
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Input = styled(Field)`
  margin-top: 4px;
  height: 40px;
  border-bottom: 1px solid ${varsCss.textSecondary}80;
  font-size: ${varsCss.fontSizeSecondary};
  caret-color: ${varsCss.accentColor};
  color: ${varsCss.textColor};

  ::placeholder {
    color: ${varsCss.textSecondary};
  }

  :hover {
    border-bottom: 1px solid ${varsCss.accentColor};
  }

  :focus,
  :active {
    border: 1px solid ${varsCss.accentColor};
    border-radius: 5px;
  }
`;

export const EyeBtn = styled(Btn)`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  outline: none;
  color: ${varsCss.textSecondary}90;
`;

export const SubmitBtn = styled(Btn)`
  align-self: center;
  width: 40%;
  margin-top: 10px;
  color: ${varsCss.textColor};
  border-color: ${varsCss.textColor};

  :hover,
  :active,
  :focus {
    color: ${varsCss.primaryColor};
    background: ${varsCss.accentColor};
    border: none;
  }
`;

export const Error = styled(ErrorMsg)`
  margin-top: -20px;
  text-shadow: none;
  text-transform: none;
`;

export const AltEnterMsg = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizeSecondary};
  font-weight: 600;
`;

export const AltEnterLink = styled(Link)`
  display: inline-flex;
  align-items: stretch;
  margin-left: 4px;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizeSecondary};
  font-weight: 700;
  transition: ${varsCss.transition};

  svg {
    margin-left: 4px;
  }

  :hover,
  :active,
  :focus {
    color: ${varsCss.accentColor};
  }
`;
