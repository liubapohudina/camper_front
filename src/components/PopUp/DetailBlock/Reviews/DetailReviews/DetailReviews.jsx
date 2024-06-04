import PropTypes from 'prop-types';
import { FeatureContent, BoxContent } from '../../Features/FeaturesBlock/FeaturesBlock.styled';
import BookingForm from '../../Features/Form/BookingForm';
import DetailReviewsList from './DetailreviewsList/DetaiReviewsList';

const DetailReviews = ({categories}) => {
    return (
        <FeatureContent>
        <BoxContent>
          <DetailReviewsList categories={categories}/>
          </BoxContent>  
          <BookingForm/>
      </FeatureContent>
    )
};

DetailReviews.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default DetailReviews;