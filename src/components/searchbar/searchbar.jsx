import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'store/reducers/querySlice';
import { setPage } from 'store/reducers/pageSlice';
import { setSearchPath } from 'store/reducers/searchPathSlice';
import { ReactComponent as SearchSvg } from 'assets/icons/search.svg';
import {
  Form,
  Input,
  Label,
  Radio,
  SubmitBtn,
  SearchPathBox,
  CustomRadio,
} from './searchbar.styled';

function Searchbar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const searchPath = useSelector(store => store.searchPath);
  const query = useSelector(store => store.query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setQuery(e.target.elements.searchbar.value.trim()));
    dispatch(setPage(1));
  };

  const onChange = e => {
    dispatch(setSearchPath(e.target.value));
    dispatch(setPage(1));
    e.target.checked = true;
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchbar"
        autoComplete="off"
        placeholder="Search movie"
        value={value}
        onChange={e => {
          setValue(e.currentTarget.value);
        }}
      />
      <SearchPathBox>
        <Label>
          Movies
          <Radio
            type="radio"
            value="movie"
            name="searchGroup"
            onChange={onChange}
            checked={
              searchPath === '' ? true : searchPath === 'movie' ? true : false
            }
          />
          <CustomRadio />
        </Label>
        <Label>
          Series
          <Radio
            type="radio"
            value="tv"
            name="searchGroup"
            onChange={onChange}
            checked={searchPath === 'tv' ? true : false}
          />
          <CustomRadio />
        </Label>
        <Label>
          Actors
          <Radio
            type="radio"
            value="person"
            name="searchGroup"
            onChange={onChange}
            checked={searchPath === 'person' ? true : false}
          />
          <CustomRadio />
        </Label>
      </SearchPathBox>
      <SubmitBtn type="submit" children={<SearchSvg />} />
    </Form>
  );
}

export default Searchbar;
