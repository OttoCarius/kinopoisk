import { Link, StyledNav, Header, Logo } from './Navigation.styled';
import { FcFilmReel } from 'react-icons/fc';

const Navigation = () => {
  return (
    <Header>
      <Logo>
        kIN
        <FcFilmReel />
        PoiSK
      </Logo>
      <StyledNav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </StyledNav>
    </Header>
  );
};

export default Navigation;
