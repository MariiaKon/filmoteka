import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function useSetQueryStr(query, page) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchPath = useSelector(store => store.searchPath);
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
      : query === ''
      ? navigate(`?${searchPath}&trendings&page=${page}`)
      : navigate(`?${searchPath}&query=${query.toLowerCase()}&page=${page}`);
  }, [query, page, navigate, isInLibrary, location.pathname, searchPath]);
}

export default useSetQueryStr;
