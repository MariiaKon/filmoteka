import * as API from 'api/filmotekaApi';
import { useEffect, useState } from 'react';

function useGetGenres() {
  const [genres, setGenres] = useState([]);

  try {
    useEffect(() => {
      API.getGenres().then(response => {
        setGenres(prevState => [...response.genres]);
      });
    }, []);
  } catch (error) {}

  return genres;
}

export default useGetGenres;
