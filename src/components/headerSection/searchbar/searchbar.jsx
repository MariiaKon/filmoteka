import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as SearchSvg } from './search.svg';
import { Form, Input, SubmitBtn } from './searchbar.styled';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const regex = new RegExp('[a-z0-9*]+$');
  const queryStr = regex.exec(location.search);

  const searchMovies = e => {
    e.preventDefault();

    const keyword = e.target.elements.searchbar.value.trim();

    setQuery(keyword);
    onSubmit(keyword);

    keyword === ''
      ? navigate('/')
      : navigate(`?query=${keyword.toLowerCase()}`);

    e.target.elements.searchbar.value = '';
  };

  useEffect(() => {
    onSubmit(query);
  }, [onSubmit, query]);

  useEffect(() => {
    if (queryStr === null) {
      setQuery('');
      return;
    }

    setQuery(queryStr[0]);
  }, [queryStr, location.search]);

  return (
    <Form action="" onSubmit={searchMovies}>
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
