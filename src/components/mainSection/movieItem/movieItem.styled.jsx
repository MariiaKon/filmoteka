import varsCss from 'components/varsCss';
import styled from 'styled-components';

export const Movie = styled.li`
  width: 280px;
  height: 443px;

  @media screen and (min-width: 768px) {
    width: 294px;
    height: 440px;
  }

  @media screen and (min-width: 1024px) {
    width: 274px;
  } ;
`;

export const Poster = styled.img`
  width: 280px;
  height: 402px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 294px;
    height: 398px;
  }

  @media screen and (min-width: 1024px) {
    width: 274px;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  line-height: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: ${varsCss.textAccentColor};
`;

export const Release = styled.span`
  line-height: 16px;

  ::before {
    display: inline-block;
    content: '|';
    margin-left: 2px;
    margin-right: 2px;
  }
`;
