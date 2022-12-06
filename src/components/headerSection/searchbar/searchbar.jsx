import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/reducers/querySlice';
import { setPage } from 'redux/reducers/pageSlice';
import { ReactComponent as SearchSvg } from 'icons/search.svg';
import { Form, Input, SubmitBtn } from './searchbar.styled';

function Searchbar() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setQuery(e.target.elements.searchbar.value.trim()));
    dispatch(setPage(1));

    e.target.elements.searchbar.value = '';
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchbar"
        autoComplete="off"
        placeholder="Search movie"
      />
      <SubmitBtn type="submit">
        <SearchSvg />
      </SubmitBtn>
    </Form>
  );
}

export default Searchbar;
