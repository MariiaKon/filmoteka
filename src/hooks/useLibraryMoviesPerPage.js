import varsCss from 'components/commonCss/varsCss';
import { useState, useEffect } from 'react';

function useLibraryMoviesPerPage() {
  const [perPage, setPerPage] = useState(8);

  useEffect(() => {
    if (document.documentElement.clientWidth < `${varsCss.tablet}`) {
      setPerPage(4);
      return;
    } else if (document.documentElement.clientWidth >= `${varsCss.desktop}`) {
      setPerPage(9);
      return;
    }
    setPerPage(8);
  }, []);

  return perPage;
}

export default useLibraryMoviesPerPage;
