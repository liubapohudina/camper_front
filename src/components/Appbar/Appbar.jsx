import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { campersFetch } from '../../services/apiCamper.js';

import Header from '../Header/Header.jsx';

const Appbar = () => {

    useEffect(() => {
        campersFetch()
    }, [])
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