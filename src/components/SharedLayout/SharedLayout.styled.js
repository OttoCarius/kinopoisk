import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  margin-bottom: 50px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #ffffff;
  background-color: #33ffff;
  box-shadow: 0 0 20px #33ffff, 0 0 30px #33ffff, 0 0 25px #33ffff,
    0 0 55px #33ffff, 0 0 75px #33ffff;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1400px;
`;

export const StyledNav = styled.nav``;

export const StyledLogo = styled.p`
  font-family: Georgia, serif;
  font-size: 30px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  font-weight: 900;
  margin: 0;
  color: #ffffff;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  :hover,
  :focus {
    color: #003333;

    opacity: 0.8;

    transition: all $transition-duration $transition-timing;
  }
  &.active {
    color: white;
    background-color: #ffaa00;
  }
`;
