import * as API from 'api/filmotekaApi';
import { useEffect, useState } from 'react';

function useGetGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    API.getGenres().then(response => {
      setGenres(prevState => [...response.genres]);
    });
  }, []);

  return genres;
}

export default useGetGenres;
