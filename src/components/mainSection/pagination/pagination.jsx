import varsCss from 'components/varsCss';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPage } from 'redux/reducers/pageSlice';
import { ReactComponent as ArrowLeft } from 'icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow_right.svg';
import { ReactComponent as Elipsis } from 'icons/elipsis.svg';
import { Pagination } from './pagination.styled';

function Pages({ totalResults, perPage, cb }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = useSelector(state => state.page);
  const totalPages = Math.ceil(totalResults / perPage);
  const initTotalPages = useRef(totalPages);
  const isMobile = document.documentElement.clientWidth < `${varsCss.tablet}`;

  const handleClick = e => {
    window.scrollTo(0, 200);

    if (location.pathname.includes('library')) {
      cb(e.selected);
      return;
    }

    dispatch(setPage(e.selected + 1));
  };

  const currentPage = (() => {
    if (initTotalPages.current > totalPages) {
      return totalPages - 1;
    }
    return 0;
  })();

  return (
    totalPages > 1 && (
      <Pagination
        pageCount={totalPages}
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakLabel={isMobile ? null : <Elipsis />}
        marginPagesDisplayed={isMobile ? 0 : 1}
        pageRangeDisplayed={5}
        breakLinkClassName={!isMobile && 'ellipsis'}
        pageLinkClassName={'link'}
        activeLinkClassName={'current'}
        previousLinkClassName={'arrows'}
        nextLinkClassName={'arrows'}
        disabledLinkClassName={'disabled'}
        onPageChange={handleClick}
        forcePage={
          location.pathname.includes('library') ? currentPage : page - 1
        }
      />
    )
  );
}

export default Pages;
