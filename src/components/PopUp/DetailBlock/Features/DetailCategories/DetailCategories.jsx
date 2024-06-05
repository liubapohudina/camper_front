import PropTypes from 'prop-types';
import { CategoriesList, CategoriesElement } from '../../../../../components/Catalog/CamperList/CamperItem/CategoriesItem.styled';
import { Icon, TextReview } from '../../../../../components/Catalog/CamperList/CamperItem/CamperItem.styled';
import icons from '../../../../../assets/icons/symbol-defs.svg'

const DetailCategories = ({categories}) => {

 const categoryMappingsModal = [
    { condition: categories.adults, icon: 'icon-Users', text: `${categories.adults} adults` },
    { condition: categories.transmission, icon: 'icon-Container', text: categories.transmission },
    { condition: categories.engine, icon: 'icon-Vertical-container', text: categories.engine },
    { condition: categories.details && categories.details.kitchen, icon: 'icon-Horizontal-container', text: "Kitchen"},
    { condition: categories.details && categories.details.beds, icon: 'icon-Container-1', text: `${categories.adults} beds`},
    { condition: categories.details.airConditioner, icon: 'icon-ac', text: "AC"},
    { condition: categories.details.CD, icon: 'icon-icon-park-outline_cd', text: "CD"},
    { condition: categories.details.radio, icon: 'icon-solar_radio-linear', text: "Radio"},
    { condition: categories.details.toilet, icon: 'icon-mingcute_toilet-paper-line', text: "Toilet"},
    { condition: categories.details.shower, icon: 'icon-Rating-1', text: "Shower"},
    { condition: categories.details.freezer, icon: 'icon-arcticons_freezer', text: "Freezer"},
    { condition: categories.details.hob, icon: 'icon-icon-park-outline_hand-painted-plate', text: `${categories.details.hob} hob`},
    { condition: categories.details.TV, icon: 'icon-Vertical-container-2', text: "TV"},
    { condition: categories.details.gas, icon: 'icon-mdi_gas', text: "Gas"},
    { condition: categories.details.water, icon: 'icon-ion_water-outline', text: "Water"},
  ];


    return (
      <CategoriesList>
        {categoryMappingsModal.map(({ condition, icon, text }, index) => (
          condition ? (
            <CategoriesElement key={index}>
              <Icon size={20} fill={icon === 'icon-Users' || icon === 'icon-ac' || icon === 'icon-mdi_gas'
              || icon === 'icon-Vertical-container' || icon === 'icon-mingcute_toilet-paper-line' ? 'var(--main-text-color)' : 'aliceblue'} stroke="var(--main-text-color)">
                <use href={`${icons}#${icon}`} />
              </Icon>
              <TextReview fontWeight="var(--medium)">{text}</TextReview>
            </CategoriesElement>
          ) : null
        ))}
      </CategoriesList>
   )
}

DetailCategories.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default DetailCategories;