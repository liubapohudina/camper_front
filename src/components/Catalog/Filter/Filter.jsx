import { useForm } from 'react-hook-form';
import { getFilteredCampers } from '../../../redux/camper/camper-operations';
import { useDispatch } from 'react-redux';
import { Input } from '../../PopUp/DetailBlock/Features/Form/BookingForm.styled';
import { HeadernpopUp } from '../../PopUp/DetailBlock/DetailBlock.styled';
import { Label, FilterForm, BoxSearchLocation, TextFilter } from './Filter.styled';
import { Icon } from '../CamperList/CamperItem/CamperItem.styled';
import icons from './../../../assets/icons/symbol-defs.svg';
import FilterIcon from './FilterIcon/FilterIcon';

const Filter = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data)
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
      <TextFilter>Filters</TextFilter>
      <HeadernpopUp>Vehicle equipment</HeadernpopUp>

      <FilterIcon register={register}/>

      {/* <div>
        <label>Equipment:</label>
        <label>
          <input type="checkbox" value="GPS" {...register('equipment')} /> GPS
        </label>
        <label>
          <input type="checkbox" value="Kitchen" {...register('equipment')} /> Kitchen
        </label>
        <label>
          <input type="checkbox" value="Shower" {...register('equipment')} /> Shower
        </label>
      </div> */}

      <div>
        <label>Type:</label>
        <label>
          <input type="radio" value="alcove" {...register('form')} /> Alcove
        </label>
        <label>
          <input type="radio" value="integrated" {...register('form')} /> Integrated
        </label>
        <label>
          <input type="radio" value="semi-integrated" {...register('form')} /> Semi-integrated
        </label>
      </div>

      <button type="submit">Filter</button>
    </FilterForm>
  );
};

export default Filter;

