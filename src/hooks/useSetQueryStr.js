import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useSetQueryStr(query, page) {
  const navigate = useNavigate();
  const location = useLocation();
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
      ? navigate(`?trendings&page=${page}`)
      : navigate(`?query=${query.toLowerCase()}&page=${page}`);
  }, [query, page, navigate, isInLibrary, location.pathname]);
}

export default useSetQueryStr;
