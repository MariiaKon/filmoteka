import { useDispatch } from 'react-redux';
import { setQuery } from 'store/reducers/querySlice';
import { setPage } from 'store/reducers/pageSlice';
import { setSearchPath } from 'store/reducers/searchPathSlice';
import { ReactComponent as LogoSvg } from 'assets/icons/logo.svg';
import { LogoTitle, Navlink } from './logo.styled';

function Logo() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setQuery(''));
    dispatch(setPage(1));
    dispatch(setSearchPath(''));
  };

  return (
    <Navlink to="/" onClick={handleClick}>
      <LogoSvg />
      <LogoTitle>Filmoteka</LogoTitle>
    </Navlink>
  );
}

export default Logo;
