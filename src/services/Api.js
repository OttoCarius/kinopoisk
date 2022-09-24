import axios from 'axios';

const API_KEY = '8b9b90eab4f34348a4bd4775afa7ecfd';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Фетч трендов
export async function fetchPopularFilms() {
  const response = await axios.get(
    `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}

//  Фетч по поиску по имени

export async function fetchSearchFilmByName(filmName) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${filmName}&page=1&include_adult=false`
  );
  return response.data.results;
}

// Фетч фильма по id
export async function fetchFilmInfo(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=8b9b90eab4f34348a4bd4775afa7ecfd&language=en-US`
  );
  return response.data;
}

// Фетч отзывов на фильм
export async function fetchMovieReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
}

export async function fetchMovieCast(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data.cast;
}
