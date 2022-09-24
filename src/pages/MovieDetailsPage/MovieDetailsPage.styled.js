import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonGoBackContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonGoBack = styled(Link)`
  padding: 5px 10px;
  border: none;
  text-decoration: none;
  color: #fff;
  background-color: #00151a;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 0 0 10px #33ffff, 0 0 10px #33ffff, 0 0 10px #33ffff,
      0 0 15px #33ffff, 0 0 20px #33ffff;

    opacity: 0.8;

    transition: 0.5s;
    transform: scale(1.02);
  }
`;
