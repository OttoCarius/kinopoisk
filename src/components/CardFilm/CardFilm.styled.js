import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const Item = styled.li`
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.75);
  background-color: #00151a;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px 10px;
  &:hover,
  :focus {
    color: #33ffff;
    box-shadow: 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff,
      0 0 25px #33ffff, 0 0 35px #33ffff;
    opacity: 0.8;
    transition: 0.5s;
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    width: 400px;
  }

  @media screen and (max-width: 420px) {
    width: 280px;
  }
`;

export const Title = styled.p`
  color: white;
  font-family: Georgia, serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  word-spacing: 1.2px;
  font-weight: 500;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  padding: 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    color: #003333;
    opacity: 0.8;
    transition: 0.3s;
  }
`;
export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
`;
