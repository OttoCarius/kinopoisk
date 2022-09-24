import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div``;

export const ButtonSubmit = styled.button`
  display: inline-block;
  width: 60px;
  margin-left: 20px;
  border-radius: 10px;
  height: 50px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background: #ffffff;
  -webkit-box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  :hover {
    background-color: white;
  }
`;

export const Input = styled.input`
  align-content: center;
  width: 500px;
  height: 50px;
  text-align: center;
  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  border-radius: 20px;
  background: #ffffff;
  -webkit-box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -9px 5px 15px 5px #ffe488, -7px -5px 15px 5px #8cff85,
    12px -5px 15px 5px #80c7ff, 12px 10px 15px 7px #e488ff,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;
