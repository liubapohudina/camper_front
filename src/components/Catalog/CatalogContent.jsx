import Filter from "./Filter/Filter";
import CamperList from "./CamperList/CamperList";
import { CatalogBox } from "./CatalogContent.styled";

const Catalogcontent = () => {
  return (
    <CatalogBox>
      <Filter />
      <CamperList />
    </CatalogBox>
  );
};
export default Catalogcontent;
