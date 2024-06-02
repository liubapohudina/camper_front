import { Btn } from "./MainBtn.styled";
import PropTypes from 'prop-types';

const MainBtn = ({ type = 'button', text, href = null }) => {
    return href ? (
        <Btn as="a" href={href}>
            {text}
        </Btn>
    ) : (
        <Btn type={type}>
            {text}
        </Btn>
    );
};

MainBtn.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default MainBtn;

