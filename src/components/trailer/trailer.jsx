import { Video } from './trailer.styled';

function Trailer({ movie, trailerSrc }) {
  return <>{movie && <Video title="trailer" src={trailerSrc}></Video>}</>;
}

export default Trailer;
