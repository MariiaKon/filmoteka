import varsCss from 'components/varsCss';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  cursor: pointer;

  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: ${varsCss.secondaryColor};
    color: ${varsCss.textColor};
    border-radius: 5px;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 5px;
    border: none;
    transition: ${varsCss.transition};

    :focus,
    :hover {
      box-shadow: 0px 0px 5px ${varsCss.accentColor} inset;
    }
  }

  .current {
    border-radius: 5px;
    color: ${varsCss.primaryColor};
    background: ${varsCss.accentColor};
  }

  .ellipsis {
    display: flex;
    align-items: center;
    height: 40px;
  }

  .disabled {
    color: #b3b3b3;
  }
`;
