import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Portal from '@mui/base/Portal';
import { base_url, poster_size } from 'api/tmdbApi';
import Genres from 'components/genres/genres';
import Rating from 'components/rating/rating';
import Modal from 'components/modal/modal';
import { Movie, Poster, Title, Info, Release } from './movieItem.styled';

function MovieItem({ movie }) {
  const watchedList = useSelector(state => state.libraryLists.watchedList);
  const queueList = useSelector(state => state.libraryLists.queueList);
  const inWatched = watchedList.some(mv => mv.id === movie.id);
  const inQueue = queueList.some(mv => mv.id === movie.id);
  const [movieInfo, setMovieInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setIsOpen(true);
    setMovieInfo(movie);
  };

  const closeModal = () => {
    setIsOpen(false);
    setMovieInfo(null);
  };

  return (
    <>
      {movie && (
        <Movie onClick={openModal}>
          <Poster
            src={
              movie.poster_path
                ? `${base_url}${poster_size}${movie.poster_path}`
                : `${process.env.PUBLIC_URL + '/no_poster.webp'}`
            }
            alt={movie.title ? movie.title : movie.name}
            loading="lazy"
          />
          <Title>{movie.title ? movie.title : movie.name}</Title>
          <Info>
            {movie.genre_ids && <Genres ids={movie.genre_ids} isOpen={false} />}
            {movie.release_date && <Release>{movie.release_date}</Release>}
            {location.pathname.includes('library') ? (
              <Rating rating={movie.vote_average} />
            ) : !location.search.includes('trendings') ? (
              <Rating rating={movie.vote_average} />
            ) : (
              false
            )}
          </Info>
        </Movie>
      )}

      <Portal
        children={
          <Modal
            movie={movieInfo}
            isOpen={isOpen}
            onClick={closeModal}
            inWatched={inWatched}
            inQueue={inQueue}
          />
        }
        container={document.getElementById('modal-root')}
      />
    </>
  );
}

export default MovieItem;
