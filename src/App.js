import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'components/loader/loader';
const Layout = lazy(() => import('views/layout/layout'));
const HomeView = lazy(() => import('views/homeView/homeView'));
const WatchedView = lazy(() => import('views/library/watchedView/watchedView'));
const QueueView = lazy(() => import('views/library/queueView/queueView'));

function App() {
  return (
    <BrowserRouter basename="/filmoteka">
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
                <WatchedView />
              </Suspense>
            }
          />
          <Route
            path="library/queue"
            element={
              <Suspense fallback={<Loader />}>
                <QueueView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
