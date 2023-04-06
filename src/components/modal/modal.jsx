import { useState } from 'react';
import { useSelector } from 'react-redux';
import useGetTrailer from 'hooks/useGetTrailer';
import useModalClose from 'hooks/useModalClose';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import MovieDetails from 'components/movieDetails/movieDetails';
import Trailer from 'components/trailer/trailer';
import { Overlay, ModalFrame, CloseBtn } from './modal.styled';

function Modal({ movie, isOpen, onClick, inWatched, inQueue }) {
  const [video, setVideo] = useState(false);
  const searchPath = useSelector(state => state.searchPath);
  const trailerSrc = useGetTrailer(movie?.id, searchPath);

  useModalClose(onClick);

  return (
    <>
      {isOpen && (
        <Overlay id="overlay">
          <ModalFrame>
            <CloseBtn
              type="button"
              onClick={() => {
                onClick();
                setVideo(false);
              }}
              children={<CrossSvg />}
            />

            {!video ? (
              <MovieDetails
                movie={movie}
                isOpen={isOpen}
                inWatched={inWatched}
                inQueue={inQueue}
                onClick={setVideo}
                trailerSrc={trailerSrc}
              />
            ) : (
              <Trailer movie={movie} trailerSrc={trailerSrc} />
            )}
          </ModalFrame>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
