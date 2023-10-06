import { useState, /*useEffect*/ } from 'react';
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
  const [filteredGenres, setFilteredGenres] = useState(filteredGenresPrev.split(',').filter(g => g !== ''));
  const genres = useSelector(state => state.genresList.genres);

  const handlerClick = e => {
    if (![...filteredGenres].includes(e.target.value)) {
      setFilteredGenres(prev => [...filteredGenres, e.target.value]);
      return;
    }

    setFilteredGenres(prev => [...filteredGenres].filter(g => g !== e.target.value));
    return;

    // if (filteredGenres.length !== 0) {
    //   e.target.checked = filteredGenres.includes(e.target.value);
    // }

    // if (e.target.checked) {
    //   setFilteredGenres(prev => filteredGenres ? `${filteredGenres}, ${e.target.value}` : `${e.target.value}`);
    // } else if (!e.target.checked) {
    //   setFilteredGenres(prev =>
    //     [...filteredGenres].filter(g => g !== e.target.value)
    //   );
    // }
  };

  // useEffect(() => {
  //   console.log('onclick', filteredGenres);
  // }, [filteredGenres])

  const handlerSubmit = (e) => {
    console.log('submit', { [e.target.name]: filteredGenres.toString() });
    dispatch(setSorter({ [e.target.name]: filteredGenres.toString() }));
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
                    onChange={handlerClick}
                    value={genre.name.toLowerCase()}
                    checked={[...filteredGenres].includes(genre.name)}
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
