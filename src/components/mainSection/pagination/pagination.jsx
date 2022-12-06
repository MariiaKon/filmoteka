import { useSelector, useDispatch } from 'react-redux';
import { setPage } from 'redux/reducers/pageSlice';
import { ReactComponent as ArrowLeft } from 'icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'icons/arrow_right.svg';
import { ReactComponent as Elipsis } from 'icons/elipsis.svg';
import { Pagination } from './pagination.styled';

function Pages({ totalResults, perPage, cb }) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);
  const totalPages = Math.ceil(totalResults / perPage);

  const handleClick = e => {
    dispatch(setPage(e.selected + 1));
    cb(e.selected);
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
