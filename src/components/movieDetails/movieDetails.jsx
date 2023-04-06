import { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from 'context/authContext';
import { base_url, poster_size_modal } from 'api/tmdbApi';
import {
  addToWatchedList,
  removeFromWatchedList,
  addToQueueList,
  removeFromQueueList,
} from 'store/reducers/librarySlice';
import { ReactComponent as PlayVideo } from 'assets/icons/play_video.svg';
import Genres from 'components/genres/genres';
import Rating from 'components/rating/rating';
import {
  MoviePoster,
  MovieTitle,
  DescrBox,
  Descr,
  DescrItem,
  About,
  Owerview,
  ModalButtons,
  Button,
  WatchTrailerBtn,
} from './movieDetails.styled';

function MovieDetails({ movie, isOpen, onClick, inWatched, inQueue }) {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [watched, setWatched] = useState(false);
  const [queue, setQueue] = useState(false);

  useEffect(() => {
    setWatched(inWatched);
    setQueue(inQueue);
  }, [inWatched, inQueue]);

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
      {movie && (
        <>
          <MoviePoster
            src={
              movie.poster_path
                ? `${base_url}${poster_size_modal}${movie.poster_path}`
                : `${process.env.PUBLIC_URL + '/no_poster.webp'}`
            }
            alt={movie.title ? movie.title : movie.name}
          />
          <WatchTrailerBtn
            type="button"
            onClick={() => {
              onClick(true);
            }}
            children={<PlayVideo />}
          />
          <div>
            <MovieTitle>{movie.title ? movie.title : movie.name}</MovieTitle>
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
                <DescrItem>
                  {movie.original_title
                    ? movie.original_title
                    : movie.original_name}
                </DescrItem>
                <DescrItem>
                  {movie.genre_ids && (
                    <Genres ids={movie.genre_ids} isOpen={isOpen} />
                  )}
                </DescrItem>
              </Descr>
            </DescrBox>
            {movie.overview && <About>About</About>}
            <Owerview>{movie.overview}</Owerview>
            {user && (
              <ModalButtons>
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
              </ModalButtons>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetails;
