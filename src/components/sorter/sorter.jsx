import { useDispatch, useSelector } from 'react-redux';
import { setSorter } from 'store/reducers/sorterSlice';
import { SorterBox, Label } from './sorter.styled';
import { Radio } from 'components/searchbar/searchbar.styled';

function Sorter({ onSorterHide }) {
  const dispatch = useDispatch();
  const sorter = useSelector(store => store.sorter.sort_by);

  const handlerOnChange = e => {
    dispatch(setSorter({ [e.target.name]: e.target.value }));
    onSorterHide(false);
  };

  return (
    <SorterBox>
      <Label>
        popularity desc.
        <Radio
          type="radio"
          name="sort_by"
          value="popularity.desc"
          onChange={handlerOnChange}
          checked={sorter === 'popularity.desc'}
        />
      </Label>
      <Label>
        popularity asc.
        <Radio
          type="radio"
          name="sort_by"
          value="popularity.asc"
          onChange={handlerOnChange}
          checked={sorter === 'popularity.asc'}
        />
      </Label>
      <Label>
        vote average desc.
        <Radio
          type="radio"
          name="sort_by"
          value="vote_average.desc"
          onChange={handlerOnChange}
          checked={sorter === 'vote_average.desc'}
        />
      </Label>
      <Label>
        vote average asc.
        <Radio
          type="radio"
          name="sort_by"
          value="vote_average.asc"
          onChange={handlerOnChange}
          checked={sorter === 'vote_average.asc'}
        />
      </Label>
    </SorterBox>
  );
}

export default Sorter;
