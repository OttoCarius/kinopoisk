import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { MainContainer, Main } from './SharedLayout.styled';

const Container = () => (
  <MainContainer>
    <Navigation />
    <Main>
      <Outlet />
    </Main>
  </MainContainer>
);

export default Container;
