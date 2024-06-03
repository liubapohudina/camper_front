import DetailCategories from "../DetailCategories/DetailCategories";
import PropTypes from 'prop-types';

const FeaturesBlock = ({categories}) => {
 
  return (
    <div>
        <DetailCategories key={categories._id} categories={categories} id={categories._id}/>
    </div>
  );
};

FeaturesBlock.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default FeaturesBlock;
