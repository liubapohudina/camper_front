import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import HomeWrapper from '../HomeWrapper/HomeWrapper.jsx';

const Appbar = () => {
    const location = useLocation();
    return (
        <>
        {location.pathname === '/' ? (
          <HomeWrapper />
        ) : (
          <>
            <Header />
            <main>
              <Outlet />
            </main>
          </>
        )}
      </>
    );
};

export default Appbar;