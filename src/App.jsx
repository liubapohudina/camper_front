import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite'));
const Appbar = lazy(() => import('./components/Appbar/Appbar'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;



