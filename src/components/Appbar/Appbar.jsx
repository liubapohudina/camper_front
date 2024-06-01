import { Outlet } from 'react-router-dom';

const Appbar = () => {
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