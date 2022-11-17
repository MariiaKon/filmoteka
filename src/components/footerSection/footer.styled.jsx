import varsCss from 'components/varsCss';
import styled from 'styled-components';

export const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 30px;
  background: ${varsCss.secondaryColor};
  color: ${varsCss.textSecondary};
  font-size: ${varsCss.fontSizeSecondary};
  font-weight: 400;

  & > p:first-child {
    position: relative;
    margin-right: 20px;
  }

  & > p:first-child::after {
    position: absolute;
    display: block;
    content: '';
    width: 1px;
    height: 12px;
    background: ${varsCss.textSecondary};
    bottom: 0;
    right: -10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    & > p,
    a {
      font-size: inherit;
    }

    & > p:first-child::after {
      height: 14px;
    }
  }
`;
