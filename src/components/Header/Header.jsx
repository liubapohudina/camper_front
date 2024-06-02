import { NavMenu, HeaderW, NavList } from "./Header.styled";

const Header = () => {
    return (
        <HeaderW>
        <NavList>
            <NavMenu to='/'>Home</NavMenu>
            <NavMenu to='/catalog'>Catalog</NavMenu>
            <NavMenu to='/favorite'>Favorite</NavMenu>
        </NavList>
        </HeaderW>
    );
};

export default Header;
