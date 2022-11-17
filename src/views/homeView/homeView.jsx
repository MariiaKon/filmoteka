import MovieList from 'components/mainSection/movieList/movieList';
import Pages from 'components/mainSection/pagination/pagination';
import { useOutletContext } from 'react-router-dom';

function HomeView() {
  const { query } = useOutletContext();

  return (
    <>
      <MovieList query={query} />
      <Pages />
    </>
  );
}

export default HomeView;
