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
        const uniqueGenres = response.reduce((acc, current) => {
          for (let i = 0; i < acc.length; i++) {
            if (acc[i].id === current.id) {
              return acc;
            }
          }

          current = {...current, name: current.name.toLowerCase(), checked: false}
          acc.push(current);
          return acc;
        }, []);

        dispatch(setGenres(uniqueGenres));
      });
    }, [dispatch, genres.length]);
  } catch (error) {}
}

export default useGetGenres;
