import PropTypes from "prop-types";
import { ModalBackground, ModalContent, CloseButton, ListImg } from "./PopUP.styled";
import {
  Name,
  RewieBox,
  LocationBox,
  Icon,
  TextReview,
  Description,
  Img,
} from "../../components/Catalog/CamperList/CamperItem/CamperItem.styled";
import DetailBlock from "./DetailBlock/DetailBlock";
import icons from "../../assets/icons/symbol-defs.svg";
import { useEffect } from "react";

const Modal = ({ show, onClose, details }) => {
    
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!show) return null;


  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Name>{details.name}</Name>
        <RewieBox>
          <LocationBox>
            <Icon size={16} fill="#FFC531" stroke="#FFC531">
              <use href={`${icons}#icon-star`}></use>
            </Icon>
            <TextReview
              color="var(--main-text-color)"
              fontWeight="var(--regular)"
              $borderbottom="2px solid var(--main-text-color)"
            >
              {details.rating}
            </TextReview>
            <TextReview
              fontWeight="var(--regular)"
              $borderbottom="2px solid var(--main-text-color)"
            >
              ({details.reviews.length} Reviews)
            </TextReview>
          </LocationBox>
          <LocationBox>
            <Icon size={16} fill="white" stroke="var(--main-text-color)">
              <use href={`${icons}#icon-map-pin`}></use>
            </Icon>
            <TextReview color="var(--main-text-color)">
              {details.location}
            </TextReview>
          </LocationBox>
        </RewieBox>
        <Description $wrap="wrap" $maxwidth="100%">
          {details.description}
        </Description>
        <ListImg>
          {details.gallery.map((imgSrc, index) => (
            <li key={index}>
              <Img src={imgSrc} alt={`${details.name} ${index + 1}`} />
            </li>
          ))}
        </ListImg>
        <DetailBlock categories={details}/>
      </ModalContent>
    </ModalBackground>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
};

export default Modal;
