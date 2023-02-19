import { useDispatch } from 'react-redux';
import { setQuery } from 'store/reducers/querySlice';
import { setPage } from 'store/reducers/pageSlice';
import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
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
      <SubmitBtn type="submit" children={<SearchSvg />} />
    </Form>
  );
}

export default Searchbar;
