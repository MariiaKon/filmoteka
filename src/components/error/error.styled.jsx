import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Container } from 'components/header/header.styled';

export const ErrorBox = styled(Container)`
  grid-template-columns: 1fr 5fr;
  gap: 10px;

  background: ${varsCss.textErrorColor};
  color: ${varsCss.primaryColor};
  padding: 20px;
  border-radius: 5px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    grid-template-columns: 1fr 10fr;
    gap: 20px;
    padding: 30px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    grid-template-columns: 1fr 15fr;
  }
`;

export const ErrorMsg = styled.p`
  text-align: justify;
  font-size: ${varsCss.fontSizeSecondary};
  line-height: 1.3;

  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: 20px;
    line-height: 1.5;
  }
`;
