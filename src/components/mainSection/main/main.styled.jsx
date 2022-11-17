import styled from 'styled-components';

export const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 40px;

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }
`;
