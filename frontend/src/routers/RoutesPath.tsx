import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/dashboard';
import pathRoutesPage from './pathPage';

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path={pathRoutesPage.home} element={<Home />} />
        <Route path={pathRoutesPage.dashboard} element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
