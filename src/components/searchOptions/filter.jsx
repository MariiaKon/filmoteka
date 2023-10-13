import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModalClose from 'hooks/useModalClose';
import { Radio } from 'components/searchbar/searchbar.styled';
import {
  SearchOptionsBox,
  OptionsList,
  Label,
  SubmitBtn, Title
} from './searchOptions.styled';
import { Overlay } from 'components/modal/modal.styled'
import { setSorter } from 'store/reducers/sorterSlice';

function Filter({ onFilterHide }) {
  const dispatch = useDispatch();
  const filteredGenresPrev = useSelector(state => state.sorter.with_genres);
  const [filteredGenres, setFilteredGenres] = useState(filteredGenresPrev.split(',').filter(g => g !== ''));
  const genres = useSelector(state => state.genresList.genres);

  const handlerOnChange = e => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name === e.target.value) {
        genres[i].checked = !genres[i].checked;
      }
    }

    if (!filteredGenres.includes(e.target.value)) {
      setFilteredGenres(prev => [...filteredGenres, e.target.value]);
      return;
    }

    setFilteredGenres(prev => [...filteredGenres].filter(g => g !== e.target.value));
    return;
  };

  const handlerSubmit = (e) => {
    dispatch(setSorter({ [e.target.name]: filteredGenres }));
  };

  const handlerOnFilterHide = () => {
    onFilterHide(false)
  }

  useModalClose(handlerOnFilterHide);

  return (
    <Overlay>
      <SearchOptionsBox>
        <Title>Genres:</Title>
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
                      onChange={handlerOnChange}
                      value={genre.name}
                      checked={genre.checked}
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
    </Overlay>
  );
}

export default Filter;
