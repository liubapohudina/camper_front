import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { campersFetch } from '../../services/apiCamper.js';

const Appbar = () => {

    useEffect(() => {
        campersFetch()
    }, [])
    return (
        <>
            <div>header</div>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Appbar;