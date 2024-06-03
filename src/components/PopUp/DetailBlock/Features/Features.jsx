import PropTypes from 'prop-types';
import { NavBtnpopUp } from "../DetailBlock.styled";

const Features = ({isActive, onClick}) => {
  return (
    <li>
      <NavBtnpopUp type='button' $active={isActive} onClick={onClick}>Features</NavBtnpopUp>
    </li>
  );
};

Features.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Features;
