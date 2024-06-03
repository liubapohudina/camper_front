import DetailCategories from "../DetailCategories/DetailCategories";
import DetailVehincle from "../DetailVehincle/DetailVaehincle";
import PropTypes from 'prop-types';
import { FeatureContent, BoxContent } from "./FeaturesBlock.styled";
import BookingForm from "../Form/BookingForm";

const FeaturesBlock = ({categories}) => {
  console.log(categories)
 
  return (
    <FeatureContent>
      <BoxContent>
        <DetailCategories key={categories._id} categories={categories} id={categories._id}/>
        <DetailVehincle categories={categories}/>
        </BoxContent>  
        <BookingForm/>
    </FeatureContent>
  );
};

FeaturesBlock.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default FeaturesBlock;
