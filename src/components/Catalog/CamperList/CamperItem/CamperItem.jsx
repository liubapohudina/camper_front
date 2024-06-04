import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
import MainBtn from "../../../../components/MainBtn/MainBtn";
import Modal from "../../../PopUp/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../../../redux/favorite/favorite-slice";
import { selectFavorite } from "../../../../redux/favorite/favorite-selector";

const CamperItem = ({ camper, ...rest}) => {
  const [showModal, setShowModal] = useState(false);
  const [favoriteCamper, setFavoriteCamper] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);
  console.log(favorites)

  useEffect(() => {
    const isFavorite = favorites.some(item => item._id === camper._id);
    if(isFavorite) {
      setFavoriteCamper(true)
    }
  }, [camper._id, favorites])

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(camper.price / 100);

  const handleShowMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFavorite = (camper) => {
    console.log(camper)
    const isFavorite = favorites.some(item => item._id === camper._id);
    if (isFavorite) {
      dispatch(removeFavorite(camper));
      setFavoriteCamper(false);
    } else {
      dispatch(addFavorite(camper));
      setFavoriteCamper(true);
    }
  };

  return (
    <CamperItemWrapper key={camper._id} id={camper._id} {...rest}>
      <Img src={camper.gallery[0]} alt={camper.name} {...rest}></Img>
      <div>
        <Wrap1>
          <Name>{camper.name}</Name>
          <Wrap2>
            <Price>{formattedPrice}</Price>
            <button type="button" onClick={() => handleFavorite(camper)}>
            <Icon size={24} fill={!favoriteCamper ? "white" : "#E44848"} stroke={!favoriteCamper ? "var(--main-text-color)" : "#E44848"} cursor='pointer' >
              <use href={`${icons}#icon-Vector-1`}></use>
            </Icon>
            </button>
          </Wrap2>
        </Wrap1>
        <RewieBox>
            <LocationBox>
            <Icon size={16} fill="#FFC531" stroke="#FFC531">
                <use href={`${icons}#icon-star`}></use>
            </Icon>
            <TextReview color="var(--main-text-color)" fontWeight="var(--regular)" $borderbottom='2px solid var(--main-text-color)'>
                {camper.rating}
            </TextReview>
            <TextReview fontWeight="var(--regular)" $borderbottom='2px solid var(--main-text-color)'>({camper.reviews.length} Reviews)</TextReview>
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
        <MainBtn text={'Show more'} onClick={handleShowMore}/>
        <Modal show={showModal} onClose={handleCloseModal} details={camper} id={camper._id}></Modal>
      </div>
    </CamperItemWrapper>
  );
};
CamperItem.propTypes = {
  camper: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
