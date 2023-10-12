import { useDispatch, useSelector } from 'react-redux';
import { setSorter } from 'store/reducers/sorterSlice';
import { SearchOptionsBox, OptionsList, Label } from './searchOptions.styled';
import { Radio } from 'components/searchbar/searchbar.styled';

function Sorter({ onSorterHide }) {
  const dispatch = useDispatch();
  const sorter = useSelector(store => store.sorter.sort_by);
  const sorterValues = [{name: 'default', value: ''}, {name: 'popularity desc.', value: 'popularity.desc'}, {name: 'popularity asc.', value: 'popularity.asc'}, {name: 'vote average desc.', value: 'vote_average.desc'}, {name: 'vote average asc.', value: 'vote_average.asc'}];

  const handlerOnChange = e => {
    dispatch(setSorter({ [e.target.name]: e.target.value }));
    onSorterHide(false);
  };

  return (
    <SearchOptionsBox>
      Sort by:
      <OptionsList> {
        sorterValues.map(({name, value}) => {
          return (
            <Label key={name}>
              {name}
              <Radio
                type="radio"
                name="sort_by"
                value={value}
                onChange={handlerOnChange}
                checked={sorter === value}
              />
            </Label>)
          })
        }
      </OptionsList>
    </SearchOptionsBox>
  );
}

export default Sorter;
