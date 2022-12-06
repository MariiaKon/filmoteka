import { useOutletContext } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from 'icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow_right.svg';
import { ReactComponent as Elipsis } from 'icons/elipsis.svg';
import { Pagination } from './pagination.styled';

function Pages({ totalResults, perPage }) {
  const { onPageClick, page } = useOutletContext();
  const totalPages = Math.ceil(totalResults / perPage);

  const handleClick = e => {
    onPageClick(e.selected + 1);
  };

  return (
    totalPages && (
      <Pagination
        pageCount={totalPages}
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakLabel={<Elipsis />}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        breakLinkClassName={'ellipsis'}
        pageLinkClassName={'link'}
        activeLinkClassName={'current'}
        previousLinkClassName={'arrows'}
        nextLinkClassName={'arrows'}
        disabledLinkClassName={'disabled'}
        onPageChange={handleClick}
        forcePage={page - 1}
      />
    )
  );
}

export default Pages;
