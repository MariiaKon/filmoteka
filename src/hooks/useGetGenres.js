import * as API from 'api/tmdbApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from 'store/reducers/genresSlice';

function useGetGenres() {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genresList.genres);

  try {
    useEffect(() => {
      if (genres.length !== 0) {
        return;
      }

      API.getGenres().then(response => {
        dispatch(setGenres(response));
      });
    }, [dispatch, genres.length]);
  } catch (error) {}
}

export default useGetGenres;
