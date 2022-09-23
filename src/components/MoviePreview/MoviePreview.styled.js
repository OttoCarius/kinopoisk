import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  border-radius: 5px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const StyledThumb = styled.div`
  height: 100%;

  @media screen and (min-width: 370px) and (max-width: 767px) {
    height: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1169px) {
    height: 100%;
  }

  @media screen and (min-width: 1170px) {
    height: 100%;
  }
`;

export const StyledPoster = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 0%;
`;

export const Styledtext = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px;

  font-size: 18px;
`;

export const StyledFilmName = styled.span`
  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;

  &:hover,
  &:focus {
    color: #003333;

    opacity: 0.8;

    transition: all $transition-duration $transition-timing;
  }
`;

// export const StyledVote = styled.vote`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   padding: 5px;
//   border-radius: 5px;

//   color: #ffffff;
//   background-color: $secondary-color;

//   &--top {
//     @extend .vote;
//     background-color: $base-color;
//   }

//   &--low {
//     @extend .vote;
//     background-color: tomato;
//   }
// `;

// .vote {
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   padding: 5px;
//   border-radius: 5px;

//   color: #ffffff;
//   background-color: $secondary-color;

//   &--top {
//     @extend .vote;
//     background-color: $base-color;
//   }

//   &--low {
//     @extend .vote;
//     background-color: tomato;
//   }
// }
