// import { useState } from 'react';
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

function Modal({ movie, base_url, file_size, isOpen, onClick }) {
  // const [watched, setWatched] = useState(false);
  // const [queue, setQueue] = useState(false);
  const lists = ['watched', 'queue'];

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
    <>
      {isOpen && (
        <Overlay>
          <ModalFrame>
            <CloseBtn type="button" onClick={onClick}>
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
      )}
    </>
  );
}

export default Modal;
