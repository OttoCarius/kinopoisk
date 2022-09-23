import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview/MoviePreview';

import { StyledImageGallery, StyledImageItem } from './MoviesList.styled';

const MovieList = ({ movies, location }) => {
  return (
    <StyledImageGallery>
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <StyledImageItem key={id}>
          <Link
            to={{
              pathname: `${movies}/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview
              title={title}
              poster={poster_path}
              vote={vote_average}
            />
          </Link>
        </StyledImageItem>
      ))}
    </StyledImageGallery>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};

export default MovieList;
