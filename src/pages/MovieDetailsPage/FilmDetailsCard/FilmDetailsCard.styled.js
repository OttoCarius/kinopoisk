import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerFilmDetails = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  border: 0.5px solid #fff;
  background-color: #006666;
  color: #fff;
  @media screen and (max-width: 600px) {
    max-width: 470px;
  }

  @media screen and (max-width: 480px) {
    max-width: 310px;
  }
`;

export const FilmContainer = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImagePoster = styled.img`
  border: 3px solid #fff;
  width: 320px;
  height: 460px;
  @media screen and (max-width: 600px) {
    width: 280px;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: 350px;
  }
`;

export const ContainerMeta = styled.div`
  margin-left: 20px;
`;

export const Title = styled.h1``;

export const PreTitle = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ccffff;
`;

export const AdditionalInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Cast = styled(Link)`
  padding: 10px 50px;
  background-color: #fff;
  border-radius: 20px;
  margin-right: 30px;
  text-decoration: none;
  color: white;
  background-color: #00151a;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 0 0 10px #33ffff, 0 0 10px #33ffff, 0 0 10px #33ffff,
      0 0 15px #33ffff, 0 0 20px #33ffff;
    opacity: 0.8;
    transition: 0.5s;
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    padding: 10px 30px;
    margin-right: 10px;
  }
`;

export const Reviews = styled(Link)`
  padding: 10px 50px;
  background-color: #fff;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  background-color: #00151a;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 0 0 10px #33ffff, 0 0 10px #33ffff, 0 0 10px #33ffff,
      0 0 15px #33ffff, 0 0 20px #33ffff;
    opacity: 0.8;
    transition: 0.5s;
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    padding: 10px 30px;
  }
`;
