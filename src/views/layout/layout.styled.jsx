import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';

export const Button = styled(Btn)`
  cursor: pointer;

  &.up {
    position: fixed;
    bottom: 50px;
    right: 30px;
    width: 50px;
    max-height: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${varsCss.accentColor};
    opacity: 0.7;

    @media screen and (min-width: ${varsCss.desktop}px) {
      right: 50px;
      bottom: 150px;
    }
  }
`;
