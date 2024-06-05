import { NavMenu, HeaderW, NavList } from "./Header.styled";
import { useSelector } from "react-redux";
import { selectFavorite  } from "../../redux/favorite/favorite-selector";
import { Amount } from "./Header.styled";

const Header = () => {
    const favoriteCamper = useSelector(selectFavorite);
    const amountFavoriteCamper = favoriteCamper.length;

    return (
        <HeaderW>
        <NavList>
            <NavMenu to='/'>Home</NavMenu>
            <NavMenu to='/catalog'>Catalog</NavMenu>
            <NavMenu to='/favorite'>Favorite</NavMenu>
        </NavList>
        <Amount>{amountFavoriteCamper}</Amount>
        </HeaderW>
    );
};

export default Header;
