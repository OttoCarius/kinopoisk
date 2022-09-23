import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

import {
  StyledHeader,
  StyledContainer,
  StyledLogo,
  StyledLink,
  StyledNav,
} from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo>
          kiN
          <FcFilmReel />
          PoiSk
        </StyledLogo>
        <StyledNav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </StyledContainer>
  );
}
