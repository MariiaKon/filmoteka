import { useState } from 'react';
import useModalClose from 'hooks/useModalClose';
import { base_url, file_size_modal } from 'api/filmotekaApi';
// import useCreateLibraryLists from 'hooks/useCreateLibraryLists';
import { ReactComponent as CrossSvg } from './cross.svg';
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

function Modal({ movie, isOpen, onClick }) {
  const [watched, setWatched] = useState(false);
  const [queue, setQueue] = useState(false);

  useModalClose(onClick);

  // const { watchedList } = useCreateLibraryLists(movie, watched, queue);
  // console.log(watchedList);

  const onClickHandler = e => {
    switch (e.target.id) {
      case 'watched':
        setWatched(prevState => !watched);
        break;

      case 'queue':
        setQueue(prevState => !queue);
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
            <CloseBtn type="button" onClick={onClick}>
              <CrossSvg />
            </CloseBtn>
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
                        <Genres ids={movie.genre_ids} />
                      </DescrItem>
                    </Descr>
                  </DescrBox>
                  <About>About</About>
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
