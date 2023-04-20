import { useState } from 'react';
import useGetTrailer from 'hooks/useGetTrailer';
import useModalClose from 'hooks/useModalClose';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import MovieDetails from 'components/movieDetails/movieDetails';
import Trailer from 'components/trailer/trailer';
import { Overlay, ModalFrame, CloseBtn } from './modal.styled';

function Modal({ movie, isOpen, onModalClose, inWatched, inQueue }) {
  const [video, setVideo] = useState(false);
  const trailerSrc = useGetTrailer(movie?.id);

  const closeModalHandler = () => {
    document.body.classList.remove('isModalOpen');
    onModalClose();
    setVideo(false);
  };

  useModalClose(closeModalHandler);

  return (
    <>
      {isOpen && (
        <Overlay id="overlay" video={video}>
          <ModalFrame video={video}>
            <CloseBtn
              type="button"
              onClick={closeModalHandler}
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
              <Trailer trailerSrc={trailerSrc} />
            )}
          </ModalFrame>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
