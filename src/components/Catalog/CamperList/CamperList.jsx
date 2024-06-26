import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../../redux/camper/camper-operations';
import { selectcampers } from '../../../redux/camper/camper-selector';
import CamperItem from './CamperItem/CamperItem';
import MainBtn from '../../MainBtn/MainBtn';
import {BoxList} from './CamperList.styled';
import { Name } from './CamperItem/CamperItem.styled';
import Loader from '../../../components/Loader/Loader';

const CamperList = () => {
  const dispatch = useDispatch();
  const {products, isLoadMore, isLoading, isError} = useSelector(selectcampers);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    dispatch(getCampers(currentPage));
  }, [dispatch, currentPage]);

  return (
    <BoxList>
      {isError ? (
        <Name>{isError}</Name>
      ) : (
        <>
          <ul>
            {products.map((camper) => (
              <CamperItem key={camper._id} camper={camper} id={camper._id} />
            ))}
          </ul>
          {isLoadMore && !isLoading && (
            <MainBtn
              onClick={handleLoadMore}
              text="Load more"
              type='submit'
              $bgcolor='inherit'
              $textcolor='var(--main-text-color)'
              $border='solid 1px #47546733'
              $bgcolorhover='inherit'
              $borderhover='solid 1px var(--main-btn-bg-color)'
            />
          )}
          {isLoading && <Loader />}
        </>
      )}
    </BoxList>
  );
};

export default CamperList;
