import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import useGetGenres from 'hooks/useGetGenres';
import Loader from 'components/loader/loader';
const Layout = lazy(() => import('views/layout/layout'));
const HomeView = lazy(() => import('views/homeView/homeView'));
const LibraryView = lazy(() => import('views/libraryView/libraryView'));

function App() {
  useGetGenres();
  const watchedList = useSelector(state => state.libraryLists.watchedList);
  const queueList = useSelector(state => state.libraryLists.queueList);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomeView />
              </Suspense>
            }
          />
          <Route
            path="library/watched"
            element={
              <Suspense fallback={<Loader />}>
                <LibraryView movies={watchedList} />
              </Suspense>
            }
          />
          <Route
            path="library/queue"
            element={
              <Suspense fallback={<Loader />}>
                <LibraryView movies={queueList} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
