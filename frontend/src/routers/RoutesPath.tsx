import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import pathRoutesPage from './pathPage';
import Dashboard from '../pages/dashboard/Dashboard';

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
