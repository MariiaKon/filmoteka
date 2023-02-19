import styled from 'styled-components';

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const GenreItem = styled.li`
  line-height: 16px;

  &::after {
    content: ',';
    margin-right: 2px;
  }

  &:last-child::after {
    content: '';
    margin-right: 10px;
  }
`;
