import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { AuthProvider } from 'context/authContext';
import useGetGenres from 'hooks/useGetGenres';
import Loader from 'components/loader/loader';
import PrivateRoute from 'components/PrivateRoute.js';
import PublicRoute from 'components/PublicRoute.js';
const Layout = lazy(() => import('views/layout/layout'));
const AuthView = lazy(() => import('views/authView/authView'));
const HomeView = lazy(() => import('views/homeView/homeView'));
const LibraryView = lazy(() => import('views/libraryView/libraryView'));

function App() {
  useGetGenres();
  const watchedList = useSelector(state => state.libraryLists.watchedList);
  const queueList = useSelector(state => state.libraryLists.queueList);

  return (
    <AuthProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute>
                  <Layout />
                </PublicRoute>
              </Suspense>
            }
          >
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <PublicRoute>
                    <HomeView />
                  </PublicRoute>
                </Suspense>
              }
            />
            <Route
              path="auth/*"
              element={
                <Suspense fallback={<Loader />}>
                  <PublicRoute restricted>
                    <AuthView />
                  </PublicRoute>
                </Suspense>
              }
            />
            <Route
              path="library/watched"
              element={
                <Suspense fallback={<Loader />}>
                  <PrivateRoute>
                    <LibraryView movies={watchedList} />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="library/queue"
              element={
                <Suspense fallback={<Loader />}>
                  <PrivateRoute>
                    <LibraryView movies={queueList} />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
