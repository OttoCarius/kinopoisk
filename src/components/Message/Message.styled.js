import styled from 'styled-components';

export const BoxMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  margin-top: 150px;
`;

// export const MessageTitle = styled.h2`
//   color: 00563F;
//   /* text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 10px #33ffff,
//     0 0 12px #33ffff, 0 0 15px #33ffff, 0 0 15px #33ffff, 0 0 20px #33ffff; */
//   font-size: ${p => p.theme.fontSizes.xxl};
//   font-weight: ${p => p.theme.fontWeights.semiBold};
//   text-transform: ${p => p.theme.textTransform.upCase};
//   font-family: ${p => p.theme.fonts.monospace};
//   font-family: Georgia, serif;
//   text-decoration: none solid rgb(68, 68, 68);
//   font-style: italic;
//   font-variant: normal;
//   margin-bottom: 3px;
// `;

export const MessageText = styled.p`
  color: 00563F;
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: ${p => p.theme.textTransform.upCase};
  font-family: ${p => p.theme.fonts.monospace};
  font-family: Georgia, serif;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 10px 10px rgba(255, 255, 255, 0.3);

  @media (max-width: 770px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (max-width: 450px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media (max-width: 360px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
