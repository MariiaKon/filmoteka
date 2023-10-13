import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useModalClose from 'hooks/useModalClose';
import { Radio } from 'components/searchbar/searchbar.styled';
import {
  SearchOptionsBox,
  OptionsList,
  Label,
  SubmitBtn,
  Title,
} from './searchOptions.styled';
import { Overlay } from 'components/modal/modal.styled';
import { setSorter } from 'store/reducers/sorterSlice';
import { setGenres } from 'store/reducers/genresSlice';

function Filter({ onFilterHide }) {
  const dispatch = useDispatch();
  const filteredGenresNamesPrev = useSelector(state => state.sorter.with_genres);
  const [filteredGenresNames, setFilteredGenresNames] = useState(filteredGenresNamesPrev.split(',').filter(g => g !== ''));
  const genres = useSelector(state => state.genresList.genres);
  const [filteredGenres, setFilteredGenres] = useState([...genres])

  const handlerOnChange = e => {
    for (let i = 0; i < filteredGenres.length; i++) {
      if (filteredGenres[i].name === e.target.value) {
        const newFilteredGenres = [...filteredGenres].filter(g => g.name !== e.target.value);

        setFilteredGenres(prev => [...newFilteredGenres, {...filteredGenres[i], checked: !filteredGenres[i].checked}])
      }
    }

    if (!filteredGenresNames.includes(e.target.value)) {
      setFilteredGenresNames(prev => [...filteredGenresNames, e.target.value]);
      return;
    }

    setFilteredGenresNames(prev => [...filteredGenresNames].filter(g => g !== e.target.value));
    return;
  };

  const handlerSubmit = (e) => {
    dispatch(setSorter({ [e.target.name]: filteredGenresNames }));
    dispatch(setGenres(filteredGenres))
  };

  const handlerOnFilterHide = () => {
    onFilterHide(false)
  };

  useModalClose(handlerOnFilterHide);

  return (
    <Overlay>
      <SearchOptionsBox>
        <Title>Genres:</Title>
        <OptionsList>
          {genres &&
            [...filteredGenres]
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
