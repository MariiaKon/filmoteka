import { useState } from 'react';
import { base_url, file_size } from 'api/filmotekaApi';
import Genres from './genres/genres';
import Rating from './rating/rating';
import Modal from 'components/modal/modal';
import { Movie, Poster, Title, Info, Release } from './movieItem.styled';
import { useLocation } from 'react-router-dom';

function MovieItem({ movie }) {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const openModal = () => {
    setIsOpen(true);
    setMovieInfo(movie);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {movie && (
        <Movie onClick={openModal}>
          <Poster
            src={
              movie.poster_path
                ? `${base_url}${file_size}${movie.poster_path}`
                : `${process.env.PUBLIC_URL + '/no_poster.jpg'}`
            }
            alt={movie.title}
          />
          <Title>{movie.title}</Title>
          <Info>
            <Genres ids={movie.genre_ids} />
            {movie.release_date && <Release>{movie.release_date}</Release>}
            {location.pathname.includes('library') ? (
              <Rating rating={movie.vote_average} />
            ) : location.search !== '' ? (
              <Rating rating={movie.vote_average} />
            ) : (
              false
            )}
          </Info>
        </Movie>
      )}

      <Modal
        movie={movieInfo}
        base_url={base_url}
        file_size={file_size}
        isOpen={isOpen}
        onClick={closeModal}
      />
    </>
  );
}

export default MovieItem;
