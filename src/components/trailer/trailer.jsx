import { useSelector } from 'react-redux';
import useGetTrailer from 'hooks/useGetTrailer';
import { Video } from './trailer.styled';

function Trailer({ movie, onClick }) {
  const searchPath = useSelector(state => state.searchPath);
  const trailerSrc = useGetTrailer(movie?.id, searchPath);

  if (!trailerSrc) {
    onClick(false);
  }

  return <>{movie && <Video title="trailer" src={trailerSrc}></Video>}</>;
}

export default Trailer;
