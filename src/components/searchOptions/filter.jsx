import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Radio } from 'components/searchbar/searchbar.styled';
import {
  SearchOptionsBox,
  OptionsList,
  Label,
  SubmitBtn,
} from './searchOptions.styled';
import { setSorter } from 'store/reducers/sorterSlice';

function Filter({ onFilterHide }) {
  const dispatch = useDispatch();
  const filteredGenresPrev = useSelector(state => state.sorter.with_genres);
  const [filteredGenres, setFilteredGenres] = useState(filteredGenresPrev);
  const genres = useSelector(state => state.genresList.genres);

  const handlerClick = e => {
    if (filteredGenresPrev.length !== 0) {
      e.target.checked = filteredGenresPrev.includes(e.target.value);
    }

    if (e.target.checked) {
      setFilteredGenres(prev => `${filteredGenres}, ${e.target.value}`);
    } else if (!e.target.checked) {
      setFilteredGenres(prev =>
        [...filteredGenres].filter(g => g !== e.target.value)
      );
    }
  };

  const handlerSubmit = e => {
    dispatch(setSorter({ [e.target.name]: `${filteredGenres.join(', ')}` }));
    onFilterHide(false);
  };

  return (
    <SearchOptionsBox>
      Genres:
      <OptionsList>
        {genres &&
          [...genres]
            .sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
            .map(genre => {
              return (
                <Label key={genre.id}>
                  <Radio
                    type="checkbox"
                    onClick={handlerClick}
                    value={genre.name.toLowerCase()}
                  />
                  {genre.name}
                </Label>
              );
            })}
      </OptionsList>
      <SubmitBtn
        type="button"
        children="Filter"
        name="with_genres"
        onClick={handlerSubmit}
      />
    </SearchOptionsBox>
  );
}

export default Filter;
