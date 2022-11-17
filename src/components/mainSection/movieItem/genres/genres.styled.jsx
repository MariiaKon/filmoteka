import styled from 'styled-components';

export const GenreList = styled.ul`
  display: flex;

  & > li {
    line-height: 16px;
  }

  & > li:not(:last-child):after {
    display: inline-block;
    content: ',';
    margin-right: 2px;
  }
`;
