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

export const StyledNav = styled.nav``;

export const Logo = styled.p`
  font-family: Georgia, serif;
  font-size: 30px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  font-weight: 900;
  margin: 0;
  color: #ffffff;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

  @media screen and (max-width: 560px) {
    font-size: 24px;
    letter-spacing: 0.6px;
    word-spacing: 3.2px;
    font-weight: 600;
    margin: 0 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #ffffff;
    text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
    font-size: 32px;
    @media screen and (max-width: 1280px) {
      font-size: 26px;
    }

    @media screen and (max-width: 600px) {
      margin-right: 20px;
    }

    @media screen and (max-width: 560px) {
      font-size: 24px;
    }
  }

  :hover,
  :focus {
    transition: 0.5s;
    transform: scale(1.02);
  }
`;
