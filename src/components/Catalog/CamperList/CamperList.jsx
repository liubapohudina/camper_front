import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../../redux/camper/camper-operations';
import { selectAllProducts } from '../../../redux/camper/camper-selector';
import CamperItem from './CamperItem/CamperItem';

const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectAllProducts);
  console.log(campers)

  useEffect(() => {
    dispatch(getCampers(1));
  }, [dispatch]);

  return (
    <div>
      {campers.map((camper) => (
        <CamperItem key={camper._id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
