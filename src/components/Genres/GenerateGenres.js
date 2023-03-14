import { genresInfo } from './genresInfo';
import styled from 'styled-components';

export const GenerateGenres = genresId => {
  const id = Object.values(genresId);
  const listGenres = [];

  genresInfo.forEach(el => {
    if (id[0].includes(el.id)) {
      listGenres.push(el.name);
    }
  });
  return <Genres>{listGenres.slice(0, 2).join(', ') + ', Other'}</Genres>;
};

const Genres = styled.span`
  padding: 6px 0;
  color: #ff6b01;

  @media screen and (max-width: 770px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
