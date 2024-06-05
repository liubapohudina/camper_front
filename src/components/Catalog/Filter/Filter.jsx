import { useForm } from 'react-hook-form';
import { getFilteredCampers } from '../../../redux/camper/camper-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectcampers } from '../../../redux/camper/camper-selector';
import { Input } from '../../PopUp/DetailBlock/Features/Form/BookingForm.styled';
import { HeadernpopUp } from '../../PopUp/DetailBlock/DetailBlock.styled';
import { Label, FilterForm, BoxSearchLocation, TextFilter } from './Filter.styled';
import { Icon } from '../CamperList/CamperItem/CamperItem.styled';
import icons from './../../../assets/icons/symbol-defs.svg';
import FilterIcon from './FilterIcon/FilterIcon';
import MainBtn from '../../MainBtn/MainBtn';

const Filter = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { isError } = useSelector(selectcampers);

  const onSubmit = (data) => {
    if (data.transmission === false) {
      data.transmission = null;
    }
    dispatch(getFilteredCampers(data));
  };


  return (
    <FilterForm onSubmit={handleSubmit(onSubmit)}>

      <BoxSearchLocation>
        <Label htmlFor="location">Location:</Label>
        <Input id="location" {...register('location')} $margintop='10px' $paddingleft='true' width='300px'/>
        <Icon size={18} fill="white" stroke="var(--main-text-color)" $absolute='absolute' $top='51' $left='19'>
                <use href={`${icons}#icon-map-pin`}></use>
            </Icon>
      </BoxSearchLocation>
      {isError && <TextFilter>{isError}</TextFilter>}

      <TextFilter>Filters</TextFilter>

      <HeadernpopUp>Vehicle equipment</HeadernpopUp>

      <FilterIcon register={register} type='checkbox'/>

      <HeadernpopUp>Vehicle type</HeadernpopUp>

      <FilterIcon register={register} type='radio'/>

      <MainBtn type='submit' text={'Search'}/>
    </FilterForm>
  );
};

export default Filter;

