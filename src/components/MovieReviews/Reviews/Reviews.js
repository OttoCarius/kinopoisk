import {
  ConteinerAvatar,
  AvatarName,
  //   ImageAvatar,
  ReviewsData,
  PanelInfo,
  ContainerReviews,
} from './Reviews.styled';

const Reviews = ({ data }) => {
  const { author, created_at, content } = data;

  return (
    <ContainerReviews>
      <PanelInfo>
        <ConteinerAvatar>
          {/* <ImageAvatar
            src={
              data.author_details?.avatar_path?.includes('https:')
                ? author_details.avatar_path.slice(1)
                : `../../../../assets/Images/none.jpg${avatarPath}`
            }
            alt=""
          /> */}
          <AvatarName>{author}</AvatarName>
        </ConteinerAvatar>
        <span>{created_at}</span>
      </PanelInfo>
      <ReviewsData>
        <p>{content}</p>
      </ReviewsData>
    </ContainerReviews>
  );
};

export default Reviews;
