import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function useSetQueryStr() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSelector(state => state.query);
  const page = useSelector(state => state.page);
  const searchPath = useSelector(store => store.searchPath);
  const { sort_by, with_genres } = useSelector(store => store.sorter)
  const [isInLibrary, setIsInLibrary] = useState(false);

  if (isInLibrary) {
    location.search = '';
  }

  useEffect(() => {
    setIsInLibrary(location.pathname.includes('library'));
  }, [location.pathname]);

  useEffect(() => {
    isInLibrary
      ? navigate(`${location.pathname}`)
      : query === '' && sort_by === '' && with_genres === ''
      ? navigate(`?${searchPath}&trendings&page=${page}`)
      : navigate(`?${searchPath}&query=${query.toLowerCase()}&page=${page}&sort_by=${sort_by === '' ? 'default' : sort_by}&with_genres=${with_genres}`);
  }, [query, page, navigate, isInLibrary, location.pathname, searchPath, sort_by, with_genres]);
}

export default useSetQueryStr;
