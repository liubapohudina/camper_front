import PropTypes from 'prop-types';
import { Li, Pvehincle, UlVehincle } from './DetailVehincleList.styled';

const DetailVenicleList  = ({categories}) => {
    
    const keyMappings = {
        form: 'Form',
        length: 'Length',
        width: 'Width',
        height: 'Height',
        tank: "Tank",
        consumption: "Consumption",
    }
    return (
          <UlVehincle>
        {Object.keys(keyMappings).map((key) => (
          <Li key={key}>
            <Pvehincle>{keyMappings[key]}</Pvehincle>
            <Pvehincle>{categories[key]}</Pvehincle>
          </Li>
        ))}
      </UlVehincle>
    )
};

DetailVenicleList.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default DetailVenicleList;