import * as API from 'api/tmdbApi';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres } from 'store/reducers/genresSlice';
import { setSorter } from 'store/reducers/sorterSlice'

function useGetGenres() {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genresList.genres);

  try {
    useEffect(() => {
      if (genres.length !== 0) {
        const with_genresArr = [...genres].filter(g => g.checked === true).map(g => {return g.name});
        dispatch(setSorter({ with_genres: with_genresArr.toString() }))
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
    }, [dispatch, genres]);
  } catch (error) {}
}

export default useGetGenres;
