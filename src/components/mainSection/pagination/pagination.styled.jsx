import varsCss from 'components/varsCss';
import { Btn } from 'components/button/button.styled';
import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBtn = styled(Btn)`
  background: ${varsCss.secondaryColor};
`;

export const PagesQty = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.li`
  width: 40px;
  height: 40px;
`;

export const PageBtn = styled(Btn)`
  color: ${varsCss.textColor};
  transition: ${varsCss.transition};

  :focus,
  :hover {
    color: ${varsCss.primaryColor};
    background: ${varsCss.textAccentColor};
  }
`;
