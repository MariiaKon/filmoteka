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
  ArrowIcon,
  SortIcon,
  FilterIcon,
  IconDescr,
} from './searchbar.styled';
import Sorter from 'components/sorter/sorter';
import Filter from 'components/filter/filter';

function Searchbar() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [showSortList, setShowSortList] = useState(false);
  const [showFilterList, setShowFilterList] = useState(false);
  const searchPath = useSelector(store => store.searchPath);
  const query = useSelector(store => store.query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(setQuery(e.target.elements.searchbar.value.trim()));
    dispatch(setPage(1));
  };

  const handlerOnChange = e => {
    e.target.checked = true;

    switch (e.target.value) {
      case 'sort':
        setShowSortList(prev => !prev);
        break;

      case 'filter':
        setShowFilterList(prev => !prev);
        break;

      default:
        dispatch(setSearchPath(e.target.value));
        dispatch(setPage(1));
        break;
    }
  };

  return (
    <Form action="" onSubmit={handlerSubmit}>
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
        <Label searchpath={searchPath}>
          <FilterIcon />
          <IconDescr>Filter</IconDescr>
          <Radio
            type="radio"
            value="filter"
            name="filter"
            onClick={handlerOnChange}
            checked={showFilterList}
            readOnly={true}
            disabled={searchPath === 'person'}
          />
          <ArrowIcon
            searchpath={searchPath}
            deg={showFilterList ? '360deg' : '180deg'}
          />
          {showFilterList && searchPath !== 'person' && (
            <Filter onFilterHide={setShowFilterList} />
          )}
        </Label>
        <Label searchpath={searchPath}>
          <SortIcon />
          <IconDescr>Sort</IconDescr>
          <Radio
            type="radio"
            value="sort"
            name="sort"
            onClick={handlerOnChange}
            checked={showSortList}
            readOnly={true}
            disabled={searchPath === 'person'}
          />
          <ArrowIcon
            searchpath={searchPath}
            deg={showSortList ? '360deg' : '180deg'}
          />
          {showSortList && searchPath !== 'person' && (
            <Sorter onSorterHide={setShowSortList} />
          )}
        </Label>
        <Label>
          Movies
          <Radio
            type="radio"
            value="movie"
            name="searchGroup"
            onChange={handlerOnChange}
            checked={searchPath === 'movie'}
          />
          <CustomRadio />
        </Label>
        <Label>
          Series
          <Radio
            type="radio"
            value="tv"
            name="searchGroup"
            onChange={handlerOnChange}
            checked={searchPath === 'tv'}
          />
          <CustomRadio />
        </Label>
        <Label>
          Actors
          <Radio
            type="radio"
            value="person"
            name="searchGroup"
            onChange={handlerOnChange}
            checked={searchPath === 'person'}
          />
          <CustomRadio />
        </Label>
      </SearchPathBox>
      <SubmitBtn type="submit" children={<SearchSvg />} />
    </Form>
  );
}

export default Searchbar;
