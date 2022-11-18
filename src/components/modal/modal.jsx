import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { ReactComponent as CrossSvg } from './cross.svg';
import {
  Overlay,
  ModalFrame,
  CloseBtn,
  MoviePoster,
  MovieTitle,
  DescrBox,
  Descr,
  DescrItem,
  Genre,
  About,
  Owerview,
  Buttons,
  Button,
} from './modal.styled';

const base_url = 'https://image.tmdb.org/t/p';
const file_size = '/w400';

function Modal({ movie }) {
  const [watched, setWatched] = useState(false);
  const [queue, setQueue] = useState(false);
  const navigate = useNavigate();
  const lists = ['watched', 'queue'];

  // const movie = {
  //   adult: false,
  //   backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
  //   genre_ids: [28, 14, 878],
  //   id: 436270,
  //   media_type: 'movie',
  //   original_language: 'en',
  //   original_title: 'Black Adam',
  //   overview:
  //     'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
  //   popularity: 6202.882,
  //   poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
  //   release_date: '2022-10-19',
  //   title: 'Black Adam',
  //   video: false,
  //   vote_average: 6.863,
  //   vote_count: 1143,
  // };

  const closeModal = () => {
    navigate('/');
  };

  const onClickHandler = e => {
    const cls = e.target.className;

    cls.split(' ').includes('active')
      ? (e.target.className = cls
          .split(' ')
          .filter(cls => cls !== 'active')
          .join(' '))
      : (e.target.className = `${cls} ${'active'}`);
  };

  return (
    <Overlay>
      <ModalFrame>
        <CloseBtn type="button" onClick={closeModal}>
          <CrossSvg />
        </CloseBtn>
        {movie && (
          <>
            <MoviePoster
              src={
                movie.poster_path
                  ? `${base_url}${file_size}${movie.poster_path}`
                  : `${process.env.PUBLIC_URL + '/no_poster.jpg'}`
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
                  <DescrItem>{`${movie.vote_average} / ${movie.vote_count}`}</DescrItem>
                  <DescrItem>{movie.popularity}</DescrItem>
                  <DescrItem>{movie.original_title}</DescrItem>
                  <Genre>
                    {movie.genre_ids.length > 0 ? (
                      movie.genre_ids.map(id => {
                        return <li key={id}>{id}</li>;
                      })
                    ) : (
                      <li>Other</li>
                    )}
                  </Genre>
                </Descr>
              </DescrBox>
              <About>About</About>
              <Owerview>{movie.overview}</Owerview>
              <Buttons>
                {lists.map(list => {
                  return (
                    <li key={list}>
                      <Button type="button" onClick={onClickHandler}>
                        {`Add to ${list}`}
                      </Button>
                    </li>
                  );
                })}
              </Buttons>
            </div>
          </>
        )}
      </ModalFrame>
    </Overlay>
  );
}

export default Modal;
