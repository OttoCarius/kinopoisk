import styled from 'styled-components';

export const Container = styled.div``;

export const StyledInput = styled.input`
  margin: 50px 0;
  font-size: 16px;
  font-weight: 400;
  width: 532px;
  height: 50px;
  border-radius: 20px;
  box-shadow: 8px 9px 20px 10px rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(
    to right,
    #de9099 0%,
    #bff8ff 51%,
    #db8690 100%
  );
  text-align: center;
  display: flex;
  margin-bottom: 20px;

  ::placeholder {
    letter-spacing: 1.2em;
    font-size: 14px;
    text-align: center;
    color: #2f3232;

    @media (max-width: 420px) {
      letter-spacing: 0.7em;
      font-size: 14px;
    }
  }
  @media (max-width: 660px) {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.9em;
    font-size: 12px;
  }

  @media (max-width: 420px) {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.9em;
    font-size: 12px;
  }
`;

export const StyledSearch = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #100f0f;
`;
