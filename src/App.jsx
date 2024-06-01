import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorite = lazy(() => import('./pages/Favorite'));

import Appbar from 'components/Appbar/Appbar';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='favorite' element={<Favorite />} />
      </Routes>
    </Suspense>
  );
}

export default App;

