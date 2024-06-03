import { Btn } from "./MainBtn.styled";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const MainBtn = ({ type = 'button', text, href = null, onClick, ...rest }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return href ? (
        <Btn as={Link} to={href} {...rest}>
            {text}
        </Btn>
    ) : (
        <Btn type={type} onClick={handleClick} {...rest}>
            {text}
        </Btn>
    );
};

MainBtn.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    bgcolor: PropTypes.string,
    textcolor: PropTypes.string,
    padding: PropTypes.string,
    fontsize: PropTypes.string,
    bgcolorhover: PropTypes.string,
    borderhover: PropTypes.string,
};

export default MainBtn;


