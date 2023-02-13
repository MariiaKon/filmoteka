import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useModalClose from 'hooks/useModalClose';
import { base_url, file_size_modal } from 'api/filmotekaApi';
import {
  addToWatchedList,
  removeFromWatchedList,
  addToQueueList,
  removeFromQueueList,
} from 'redux/reducers/librarySlice';
import { ReactComponent as CrossSvg } from 'assets/icons/cross.svg';
import Genres from 'components/mainSection/movieItem/genres/genres';
import Rating from 'components/mainSection/movieItem/rating/rating';
import {
  Overlay,
  ModalFrame,
  CloseBtn,
  MoviePoster,
  MovieTitle,
  DescrBox,
  Descr,
  DescrItem,
  About,
  Owerview,
  Buttons,
  Button,
} from './modal.styled';

function Modal({ movie, isOpen, onClick, inWatched, inQueue }) {
  const dispatch = useDispatch();
  const [watched, setWatched] = useState(false);
  const [queue, setQueue] = useState(false);

  useEffect(() => {
    setWatched(inWatched);
    setQueue(inQueue);
  }, [inWatched, inQueue]);

  useModalClose(onClick);

  const onClickHandler = e => {
    switch (e.target.id) {
      case 'watched':
        setWatched(prevState => !prevState);
        !watched
          ? dispatch(addToWatchedList(movie))
          : dispatch(removeFromWatchedList(movie.id));
        break;

      case 'queue':
        setQueue(prevState => !prevState);
        !queue
          ? dispatch(addToQueueList(movie))
          : dispatch(removeFromQueueList(movie.id));
        break;

      default:
        break;
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay id="overlay">
          <ModalFrame>
            <CloseBtn type="button" onClick={onClick} children={<CrossSvg />} />
            {movie && (
              <>
                <MoviePoster
                  src={
                    movie.poster_path
                      ? `${base_url}${file_size_modal}${movie.poster_path}`
                      : `${process.env.PUBLIC_URL + '/no_poster.webp'}`
                  }
                  alt={movie.title}
                />
                <div>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <DescrBox>
                    <Descr>
                      <DescrItem>Vote / Votes:</DescrItem>
                      <DescrItem>Popularity:</DescrItem>
                      <DescrItem>Original Title:</DescrItem>
                      <DescrItem>Genre:</DescrItem>
                    </Descr>
                    <Descr>
                      <DescrItem>
                        <Rating rating={movie.vote_average} />
                        {`/ ${movie.vote_count}`}
                      </DescrItem>
                      <DescrItem>{movie.popularity}</DescrItem>
                      <DescrItem>{movie.original_title}</DescrItem>
                      <DescrItem>
                        <Genres ids={movie.genre_ids} isOpen={isOpen} />
                      </DescrItem>
                    </Descr>
                  </DescrBox>
                  {movie.overview && <About>About</About>}
                  <Owerview>{movie.overview}</Owerview>
                  <Buttons>
                    <li>
                      <Button
                        id="watched"
                        type="button"
                        onClick={onClickHandler}
                        children={!watched ? ['Add to ', 'watched'] : 'watched'}
                        className={watched && 'active'}
                      />
                    </li>
                    <li>
                      <Button
                        id="queue"
                        type="button"
                        onClick={onClickHandler}
                        children={!queue ? ['Add to ', 'queue'] : 'queue'}
                        className={queue && 'active'}
                      />
                    </li>
                  </Buttons>
                </div>
              </>
            )}
          </ModalFrame>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
