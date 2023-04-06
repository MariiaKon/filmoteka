import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import { Btn } from 'components/button/button.styled';
import { ButtonBar } from 'components/buttonbar/buttonbar.styled';
import { Poster, Title } from 'components/movieItem/movieItem.styled';

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

export const ModalButtons = styled(ButtonBar)`
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

export const WatchTrailerBtn = styled(Btn)`
  position: absolute;
  top: 220px;
  left: calc((${varsCss.mobile}px - 20px * 2) / 2);
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  max-height: fit-content;
  border: transparent;
  opacity: 0;

  @media screen and (min-width: ${varsCss.tablet}px) {
    left: calc((${varsCss.tablet}px / 2 - 30px * 2) / 2);
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    top: 280px;
    left: calc((${varsCss.desktop}px / 2 - 30px * 2) / 2);
    width: 120px;
    height: 120px;
  }

  :hover,
  :active,
  :focus {
    color: ${varsCss.accentColor};
    opacity: 1;
  }

  img:hover + & {
    opacity: 0.7;
  }
`;
