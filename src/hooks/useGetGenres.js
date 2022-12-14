import * as API from 'api/filmotekaApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from 'redux/reducers/genresSlice';

function useGetGenres() {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genresList.genres);

  try {
    useEffect(() => {
      if (genres.length !== 0) {
        return;
      }

      API.getGenres().then(response => {
        dispatch(setGenres(response.genres));
      });
    }, [dispatch, genres.length]);
  } catch (error) {}
}

export default useGetGenres;
