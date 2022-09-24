import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

// const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export default function App() {
  return (
    <Suspense
      fallback={Loading.circle({
        svgColor: '#33ffff',
        cssAnimationDuration: 800,
        height: '200',
        width: '200',
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
