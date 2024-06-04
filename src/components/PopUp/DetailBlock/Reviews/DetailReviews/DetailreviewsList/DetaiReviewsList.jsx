import PropTypes from "prop-types";
import {
  Item,
  IconName,
  BlockName,
  UserName
} from "./DetailReviewsList.styled";
import { TextForm } from "../../../Features/Form/BookingForm.styled";
import { Icon } from "../../../../../Catalog/CamperList/CamperItem/CamperItem.styled";
import icons from "../../../../../../assets/icons/symbol-defs.svg";

const DetailReviewsList = ({ categories }) => {
  const getFirstLetter = (string) => string.charAt(0).toUpperCase();

  const renderIcons = (rating) => {
    const roundedRating = Math.ceil(rating);
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        size={24}
        fill={index < roundedRating ? "#FFC531" : "var(--bg-categories)"}
        stroke={index < roundedRating ? "#FFC531" : "var(--bg-categories)"}
      >
        <use href={`${icons}#icon-star`}></use>
      </Icon>
    ));
  };

  return (
    <ul>
      {categories.reviews.map((review, index) => (
        <Item key={index}>
          <BlockName>
            <IconName>
              <p>{getFirstLetter(review.reviewer_name)}</p>
            </IconName>
            <div>
              <UserName>{review.reviewer_name}</UserName>
              {renderIcons(review.reviewer_rating)}
            </div>
          </BlockName>
          <TextForm>Comment: {review.comment}</TextForm>
        </Item>
      ))}
    </ul>
  );
};

DetailReviewsList.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default DetailReviewsList;

