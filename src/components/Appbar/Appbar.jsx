import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Main } from './Appbar.styled.jsx';

const Appbar = () => {
    return (
        <>
            <Header/>

            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default Appbar;