import PropTypes from 'prop-types';
import icons from '../../../../assets/icons/symbol-defs.svg';
import { Icon, TextReview } from './CamperItem.styled';
import { CategoriesElement, CategoriesList } from './CategoriesItem.styled';

const CategoriesItem = ({ categories }) => {
  const categoryMappings = [
    { condition: categories.adults, icon: 'icon-Users', text: `${categories.adults} adults` },
    { condition: categories.transmission, icon: 'icon-Container', text: categories.transmission },
    { condition: categories.engine, icon: 'icon-Vertical-container', text: categories.engine },
    { condition: categories.details.kitchen, icon: 'icon-Horizontal-container', text:  "Kitchen"},
    { condition: categories.details.beds, icon: 'icon-Container-1', text: `${categories.adults} beds`},
    { condition: categories.details.airConditioner, icon: 'icon-ac', text: "AC"},
  ];

  return (
    <CategoriesList>
      {categoryMappings.map(({ condition, icon, text }, index) => (
        condition ? (
          <CategoriesElement key={index}>
            <Icon size={20} fill={icon === 'icon-Users' || icon === 'icon-ac'
              || icon === 'icon-Vertical-container' || icon === 'icon-mingcute_toilet-paper-line' ? 'var(--main-text-color)' : 'aliceblue'}  stroke="var(--main-text-color)">
              <use href={`${icons}#${icon}`} />
            </Icon>
            <TextReview fontWeight="var(--medium)">{text}</TextReview>
          </CategoriesElement>
        ) : null
      ))}
    </CategoriesList>
  );
};

CategoriesItem.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default CategoriesItem;


