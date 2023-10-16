import varsCss from 'components/commonCss/varsCss';
import { Button } from 'components/movieDetails/movieDetails.styled';
import { ModalFrame } from 'components/modal/modal.styled';
import styled from 'styled-components';

export const SearchOptionsBox = styled(ModalFrame)`
  position: absolute;
  top: 186px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: max-content;
  box-shadow: 0 2px 4px 0 ${varsCss.textSecondary};
  padding: 4px;
  margin: 0;

  @media screen and (min-width: ${varsCss.desktop}px) {
    transform: translate(-85%);
  }
`;

export const Title = styled.h6`
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizePrimary};
  text-transform: uppercase;
  padding: 4px;
`;

export const OptionsList = styled.div`
  display: grid;
  grid-template-columns: 200px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    grid-template-columns: repeat(2, 150px);
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    grid-template-columns: repeat(3, 170px);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  color: ${varsCss.textColor};
  font-size: ${varsCss.fontSizePrimary};
  text-transform: capitalize;
  line-height: 16px;
  border-top: 1px solid transparent;
  cursor: pointer;

  @media screen and (min-width: ${varsCss.tablet}px) {
    font-size: ${varsCss.fontSizeSecondary};
    border-right: 1px solid transparent;
  }
  
  :hover {
    color: ${varsCss.primaryColor};
    background: ${varsCss.textSecondary};
  }

  :has(input:checked) {
    color: ${varsCss.primaryColor};
    background: ${varsCss.accentColor};
    border-top: 1px solid ${varsCss.primaryColor};

    @media screen and (min-width: ${varsCss.tablet}px) {
      border-right: 1px solid ${varsCss.primaryColor};
    }
  }
`;

export const SubmitBtn = styled(Button)`
  align-self: center;
  margin-top: 16px;
  width: 100%;
  height: 40px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    width: 50%;
  }

  :hover,
  :focus {
    background: ${varsCss.accentColor};
    color: ${varsCss.primaryColor};
    border: 1px solid transparent;
    scale: none;
  }
`