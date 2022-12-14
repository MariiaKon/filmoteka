import varsCss from 'components/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';
import { ButtonBar } from 'components/headerSection/buttonbar/buttonbar.styled';
import {
  Poster,
  Title,
} from 'components/mainSection/movieItem/movieItem.styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  z-index: 1000;
`;

export const ModalFrame = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 240px;
  grid-template-rows: repeat(2, fit-content);
  gap: 30px;
  background: ${varsCss.primaryColor};
  width: 280px;
  height: fit-content;
  padding: 48px 20px 40px;
  margin: 20px auto;

  @media screen and (min-width: ${varsCss.tablet}px) {
    grid-template-columns: repeat(2, 264px);
    gap: 32px;
    width: 618px;
    margin: 230px auto auto;
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
`;

export const MoviePoster = styled(Poster)`
  width: 100%;
  height: 357px;
  margin-bottom: 0;

  @media screen and (min-width: ${varsCss.tablet}px) {
    height: 374px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    height: 478px;
  }
`;

export const MovieTitle = styled(Title)`
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  font-size: 20px;
  line-height: 20px;

  @media screen and (min-width: ${varsCss.desktop}px) {
    font-size: 30px;
    line-height: 31px;
  }
`;

export const DescrBox = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 40px;
  margin: 20px auto;

  @media screen and (min-width: ${varsCss.desktop}px) {
    gap: 80px;
  }
`;

export const Descr = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, max-content) 32px 1fr;
  gap: 10px;

  &:first-child {
    color: #8c8c8c;
  }
`;

export const DescrItem = styled.li`
  line-height: 16px;
`;

export const About = styled.h3`
  text-transform: uppercase;
  line-height: 16px;
  margin-bottom: 10px;
`;

export const Owerview = styled.p`
  line-height: 20px;
`;

export const Buttons = styled(ButtonBar)`
  gap: 15px;
  grid-area: auto;
  margin-top: 20px;

  @media screen and (min-width: ${varsCss.desktop}px) {
    justify-content: flex-start;
  }
`;

export const Button = styled(Btn)`
  color: ${varsCss.textColor};
  border-color: ${varsCss.textColor};
  height: 44px;
  width: 113px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    width: 125px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    width: 136px;
  }

  :hover {
    box-shadow: 0px 0px 5px ${varsCss.accentColor};
  }

  &.active {
    color: ${varsCss.primaryColor};
    background: ${varsCss.accentColor};
    border: none;
  }
`;
