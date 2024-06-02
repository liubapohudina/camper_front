import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Appbar = () => {
    return (
        <>
            <Header/>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Appbar;