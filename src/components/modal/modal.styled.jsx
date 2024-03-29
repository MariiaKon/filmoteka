import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  overflow-y: ${props => (props.video ? 'clip' : 'scroll')};
  z-index: 1000;
  scrollbar-color: rgba(255, 107, 1, 0.5) #f7f7f73b;
  scrollbar-width: thin;

  @media screen and (orientation: landscape) {
    overflow-y: scroll;
  }
`;

export const ModalFrame = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 240px;
  grid-template-rows: repeat(2, fit-content);
  gap: 30px;
  border-radius: 2px;
  background: ${varsCss.primaryColor};
  width: 280px;
  height: fit-content;
  padding: 48px 20px 40px;
  margin: 20px auto;

  @media screen and (orientation: landscape) {
    width: ${props => props.video && '80%'};
    grid-template-columns: ${props => props.video && '1fr'};
  }

  @media screen and (min-width: ${varsCss.tablet}px) {
    grid-template-columns: repeat(2, 264px);
    gap: 32px;
    width: 618px;
    margin: 230px auto;
    padding: 42px 30px 40px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    grid-template-columns: repeat(2, 396px);
    gap: 30px;
    width: 882px;
    margin: 100px auto;
  }
`;

export const CloseBtn = styled(Btn)`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  color: ${varsCss.textColor};

  :hover,
  :focus,
  :active {
    color: ${varsCss.accentColor};
    scale: 1.3;
  }
`;
