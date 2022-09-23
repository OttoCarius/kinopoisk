import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: calc(480px - 18px);
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: calc(768px - 18px);
  }

  @media screen and (min-width: 1200px) {
    width: calc(1200px - 18px);
  }
`;

export default Box;
