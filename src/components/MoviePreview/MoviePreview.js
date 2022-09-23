import PropTypes from 'prop-types';
import {
  StyledCard,
  StyledThumb,
  StyledPoster,
  Styledtext,
  StyledFilmName,
} from './MoviePreview.styled';

import placeholder from '../../components/images/placeholder.png';

// Компонент превью фильма в общем списке фильмов
const MoviePreview = ({ title, poster }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : placeholder;
  //   const voteStyle = vote > 5 ? ['vote--top'] : ['vote--low'];

  return (
    <StyledCard>
      <StyledThumb>
        <StyledPoster src={posterUrl} alt={title} title={title} />
      </StyledThumb>

      <Styledtext>
        <StyledFilmName>{title}</StyledFilmName>
        {/* {vote ? <StyledVote>{vote}</StyledVote> : null} */}
      </Styledtext>
    </StyledCard>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number,
};

export default MoviePreview;
