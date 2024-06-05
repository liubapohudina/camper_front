import {
  FilterBtn,
  FilterInput,
  CustomCheckbox,
  BoxSearchVehincle,
} from "./FilterIcon.styled";
import icons from "../../../../assets/icons/symbol-defs.svg";
import { TextReview } from "../../CamperList/CamperItem/CamperItem.styled";
import PropTypes from "prop-types";
import { useState } from "react";

const FilterIcon = ({ register, type }) => {
  const checkIcons = [
    { icon: "icon-ac", text: "AC", values: "airConditioner" },
    { icon: "icon-Container", text: "Automatic", values: "automatic" },
    { icon: "icon-Horizontal-container", text: "Kitchen", values: "kitchen" },
    { icon: "icon-Vertical-container-2", text: "TV", values: "TV" },
    { icon: "icon-Rating-1", text: "Shower/WC", values: "shower" },
  ];

  const radioIcons = [
    { icon: "icon-Button-2", text: "Van", values: "panelTruck" },
    { icon: "icon-Button-1", text: "Fully Integrated", values: "fullyIntegrated" },
    { icon: "icon-camper", text: "Alcove", values: "alcove" },
  ];

  const [activeIcons, setActiveIcons] = useState([]);

  const handleIconClick = (icon) => {
    if (type === "radio") {
      setActiveIcons([icon]);
    } else {
      if (activeIcons.includes(icon)) {
        setActiveIcons(activeIcons.filter((item) => item !== icon));
      } else {
        setActiveIcons([...activeIcons, icon]);
      }
    }
  };
  

  const iconsToRender = type === "radio" ? radioIcons : checkIcons;
  const nowrap = type === "radio" ? 'nowrap' : 'wrap';

  return (
    <BoxSearchVehincle $nowrap={nowrap}>
      {iconsToRender.map(({ icon, text, values }) => (
        <CustomCheckbox
          key={values}
          onClick={() => handleIconClick(icon)}
          $isactive={activeIcons.includes(icon) && "true"}
        >
          <FilterInput
            type={type}
            value={values}
            {...register(
              type === "checkbox"
                ? icon === "icon-Container"
                  ? "transmission"
                  : "details"
                : type === "radio"
                ? "form"
                : "form"
            )}
          />
          <FilterBtn
            size={32}
            fill={
              icon === "icon-Users" ||
              icon === "icon-ac" ||
              icon === "icon-Vertical-container" ||
              icon === "icon-mingcute_toilet-paper-line"
                ? "var(--main-text-color)"
                : "aliceblue"
            }
            stroke="var(--main-text-color)"
          >
            <use href={`${icons}#${icon}`} />
          </FilterBtn>
          <TextReview color="var(--main-text-color)" fontWeight="var(--medium)">
            {text}
          </TextReview>
        </CustomCheckbox>
      ))}
    </BoxSearchVehincle>
  );
};

FilterIcon.propTypes = {
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterIcon;
