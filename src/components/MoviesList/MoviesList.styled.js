import styled from 'styled-components';

export const StyledImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 40px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledImageItem = styled.li`
  flex-basis: calc(100% / 2 - 20px);
  margin-left: 20px;
  margin-top: 20px;

  opacity: 1;

  transition: 0.5s;

  &:hover,
  &:focus {
    color: #33ffff;
    box-shadow: 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff,
      0 0 25px #33ffff, 0 0 35px #33ffff;

    opacity: 0.8;

    transition: 0.3s;
  }

  @media screen and (min-width: 768px) and (max-width: 1169px) {
    flex-basis: calc(100% / 3 - 20px);
  }

  @media screen and (min-width: 1170px) {
    flex-basis: calc(100% / 4 - 20px);
  }

  .link {
    color: inherit;

    text-decoration: none;
  }
`;
