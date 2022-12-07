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

  const handleClick = e => {
    if (location.pathname.includes('library')) {
      cb(e.selected);
      return;
    }

    dispatch(setPage(e.selected + 1));
  };

  return totalPages > 1 && document.documentElement.clientWidth < 768 ? (
    <Pagination
      pageCount={totalPages}
      previousLabel={<ArrowLeft />}
      nextLabel={<ArrowRight />}
      breakLabel={null}
      marginPagesDisplayed={0}
      pageRangeDisplayed={5}
      pageLinkClassName={'link'}
      activeLinkClassName={'current'}
      previousLinkClassName={'arrows'}
      nextLinkClassName={'arrows'}
      disabledLinkClassName={'disabled'}
      onPageChange={handleClick}
      forcePage={location.pathname.includes('library') ? 0 : page - 1}
    />
  ) : totalPages > 1 ? (
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
      forcePage={location.pathname.includes('library') ? 0 : page - 1}
    />
  ) : null;
}

export default Pages;
