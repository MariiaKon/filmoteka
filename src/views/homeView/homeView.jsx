import { useOutletContext } from 'react-router-dom';
import List from 'components/list/list';
import Pages from 'components/pagination/pagination';

function HomeView() {
  const { movies, actors, error, totalResults } = useOutletContext();

  return (
    <>
      <List items={movies.length !== 0 ? movies : actors} />
      {!error && <Pages totalResults={totalResults} perPage={20} />}
    </>
  );
}

export default HomeView;
