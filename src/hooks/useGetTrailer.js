import * as API from 'api/tmdbApi';
import { useEffect, useState } from 'react';

function useGetTrailer(id, searchPath) {
  const [trailerSrc, setTrailerSrc] = useState('');

  try {
    useEffect(() => {
      if (!id) {
        return;
      }

      API.getTrailers(id, searchPath)
        .then(response => {
          let trailer = null;

          if (response.results.length >= 1) {
            trailer =
              response.results.find(
                video =>
                  video.official === true &&
                  video.name.toLowerCase().includes('trailer' || 'official') &&
                  video.type === 'Trailer'
              ) || response.results[0];
            return trailer;
          } else if (response.results.length === 0) {
            return (trailer = null);
          }

          return trailer;
        })
        .then(trailer => {
          if (trailer) {
            setTrailerSrc(
              `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
            );
          }
        });
    }, [id, searchPath]);
  } catch (error) {}

  return trailerSrc;
}

export default useGetTrailer;
