// import { lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';

// import SharedLayout from './SharedLayout/SharedLayout';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

// const MoviePage = lazy(() => import('../pages/MoviesPage/MoviesPage'));

// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage')
// );

// const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="movies" element={<MoviePage />} />
//           <Route path="movies/:movieId" element={<MovieDetailsPage />}></Route>
//           <Route path="*" element={<PageNotFound />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
