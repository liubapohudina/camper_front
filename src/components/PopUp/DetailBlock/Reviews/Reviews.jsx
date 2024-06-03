import PropTypes from 'prop-types';
import { NavBtnpopUp } from "../DetailBlock.styled";

const Reviews = ({isActive, onClick}) => {
  return (
    <li>
      <NavBtnpopUp type='button' $active={isActive} onClick={onClick}>Reviews</NavBtnpopUp>
    </li>
  );
};

Reviews.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default Reviews;