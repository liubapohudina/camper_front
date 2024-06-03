import { HeadernpopUp } from "../../DetailBlock.styled";
import DetailVenicleList from "./DetailVehincleList/DetailVehincleList";
import PropTypes from 'prop-types';

const DetailVehincle = ({categories}) => {
    return (
        <div>
            <HeadernpopUp>Vehicle details</HeadernpopUp>
            <DetailVenicleList categories={categories}/>
        </div>
    )
};

DetailVehincle.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default DetailVehincle;