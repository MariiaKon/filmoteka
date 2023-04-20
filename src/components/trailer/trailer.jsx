import { Video } from './trailer.styled';

function Trailer({ trailerSrc }) {
  return <>{trailerSrc && <Video title="trailer" src={trailerSrc}></Video>}</>;
}

export default Trailer;
