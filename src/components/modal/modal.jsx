import { useState } from 'react';
import useModalClose from 'hooks/useModalClose';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import MovieDetails from 'components/movieDetails/movieDetails';
import Trailer from 'components/trailer/trailer';
import { Overlay, ModalFrame, CloseBtn } from './modal.styled';

function Modal({ movie, isOpen, onClick, inWatched, inQueue }) {
  const [video, setVideo] = useState(false);

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
              />
            ) : (
              <Trailer movie={movie} onClick={setVideo} />
            )}
          </ModalFrame>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
