import CamperItem from "../../components/Catalog/CamperList/CamperItem/CamperItem";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/favorite-selector";
import { Section } from "../CustomComponents/Section.styled";
import { BoxFavovirePage } from "./FavoriteList.styled";
import { Name } from "../../components/Catalog/CamperList/CamperItem/CamperItem.styled";

const FavoriteList = () => {
    const products = useSelector(selectFavorite);
    return (
        <Section>
            <BoxFavovirePage>
              {products.length > 0 ?
        (<ul>
          {products.map((camper) => (
        <CamperItem key={camper._id} camper={camper} id={camper._id} $favoriteStyleLi='100%' $favoriteStyleImg='50%'/>
      ))}
    </ul>) : <Name>You don`t have any favorite offers</Name>}
    </BoxFavovirePage>
    </Section>
    )
};

export default FavoriteList;