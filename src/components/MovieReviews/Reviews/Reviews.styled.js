import styled from 'styled-components';

export const List = styled.ul``;

export const ContainerReviews = styled.li`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  line-height: 1.5;
  @media screen and (max-width: 480px) {
    max-width: 300px;
  }
`;

export const PanelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ebeaea;
`;

export const ConteinerAvatar = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageAvatar = styled.img`
  width: 30px;
`;

export const AvatarName = styled.span`
  font-family: Georgia, serif;
  font-size: 16px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;

  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;

  margin-left: 10px;
`;

export const ReviewsData = styled.div`
  background-color: #006666;
  padding: 20px;
  color: white;
`;
