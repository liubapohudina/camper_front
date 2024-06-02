import PropTypes from "prop-types";
import {
  CamperItemWrapper,
  Img,
  Description,
  Name,
  Price,
  Icon,
  Wrap1,
  Wrap2,
  RewieBox,
  TextReview,
  LocationBox
} from "./CamperItem.styled";
import CategoriesItem from "./CategoriesItem";
import icons from "../../../../assets/icons/symbol-defs.svg";

const CamperItem = ({ camper }) => {

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(camper.price / 100);

  return (
    <CamperItemWrapper>
      <Img src={camper.gallery[0]} alt={camper.name}></Img>
      <div>
        <Wrap1>
          <Name>{camper.name}</Name>
          <Wrap2>
            <Price>{formattedPrice}</Price>
            <Icon size={24} fill="white" stroke="var(--main-text-color)">
              <use href={`${icons}#icon-Vector-1`}></use>
            </Icon>
          </Wrap2>
        </Wrap1>
        <RewieBox>
            <LocationBox>
            <Icon size={16} fill="#FFC531" stroke="#FFC531">
                <use href={`${icons}#icon-star`}></use>
            </Icon>
            <TextReview color="var(--main-text-color)" fontWeight="var(--regular)">
                {camper.rating}
            </TextReview>
            <TextReview fontWeight="var(--regular)">({camper.reviews.length} Reviews)</TextReview>
            </LocationBox>
            <LocationBox>
            <Icon size={16} fill="white" stroke="var(--main-text-color)">
                <use href={`${icons}#icon-map-pin`}></use>
            </Icon>
            <TextReview color="var(--main-text-color)">
                {camper.location}
            </TextReview>
            </LocationBox>
        </RewieBox>
        <Description>{camper.description}</Description>
        <CategoriesItem categories={camper}/>
      </div>
    </CamperItemWrapper>
  );
};
CamperItem.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default CamperItem;
