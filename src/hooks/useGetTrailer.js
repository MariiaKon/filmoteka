import * as API from 'api/tmdbApi';
import { useEffect, useState } from 'react';

function useGetTrailer(id, searchPath) {
  const [trailerSrc, setTrailerSrc] = useState('');

  try {
    useEffect(() => {
      if (!id) {
        return;
      }

      const path = searchPath === '' ? 'movie' : searchPath;

      API.getTrailers(id, path)
        .then(response => {
          let trailer = null;

          if (response.results.length === 0) {
            return (trailer = null);
          } else if (response.results.length === 1) {
            return (trailer = response.results[0]);
          } else if (!trailer) {
            return (trailer = response.results.find(
              video =>
                video.official === true &&
                video.name.includes('Official') &&
                video.type === 'Trailer'
            ));
          }

          return trailer;
        })
        .then(trailer => {
          if (trailer) {
            setTrailerSrc(
              `https://www.youtube.com/embed/${trailer.key}?enablejsapi=1`
            );
          }
        });
    }, [id, searchPath]);
  } catch (error) {}

  return trailerSrc;
}

export default useGetTrailer;
