import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 50px;
  top: 0;
  left: 0;
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
  @media screen and (min-width: 480px) {
    width: 480px;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

// export const StyledCont = styled.div`
//   max-width: 1240px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

export const StyledNav = styled.nav``;

export const Logo = styled.p`
  font-family: Georgia, serif;
  font-size: 30px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  font-weight: 900;
  margin: 0;
  color: #ffffff;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    text-decoration: underline;
    color: white;
    font-size: 24px;
    /* background-color: #ffaa00; */
  }

  :hover,
  :focus {
    opacity: 0.8;

    transition: all $transition-duration $transition-timing;
  }
`;
