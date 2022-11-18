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
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 294px;
    height: 398px;
  }

  @media screen and (min-width: 1024px) {
    width: 274px;
  }
`;

export const Title = styled.h2`
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
  position: relative;
  line-height: 16px;
  margin-left: 8px;

  ::before {
    position: absolute;
    display: inline-block;
    content: '';
    height: 12px;
    width: 1px;
    background: ${varsCss.textAccentColor};
    top: 2px;
    left: -4px;
  }
`;
