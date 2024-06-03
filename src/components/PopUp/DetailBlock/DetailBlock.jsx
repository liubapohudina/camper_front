import { useState } from "react";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import { DetailBox } from "./DetailBlock.styled";
import FeaturesBlock from "./Features/FeaturesBlock/FeaturesBlick";
import PropTypes from 'prop-types';


const DetailBlock = ({categories}) => {
  const [activeSection, setActiveSection] = useState("features");

  const toggleSection = (section) => {
    setActiveSection(section === activeSection ? activeSection : section);
  };

  return (
    <div>
    <DetailBox>
      <Features
        isActive={activeSection === "features"}
        onClick={() => toggleSection("features")}
      />
      <Reviews
        isActive={activeSection === "reviews"}
        onClick={() => toggleSection("reviews")}
      />
    </DetailBox>
    {activeSection === "features" ? (<FeaturesBlock categories={categories}/>) : (<div>r block</div>)}
    </div>
  );
};

DetailBlock.propTypes = {
    categories: PropTypes.object.isRequired,
  };

export default DetailBlock;

