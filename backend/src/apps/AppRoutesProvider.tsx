import { BrowserRouter, Routes, Route } from 'react-router';
import { PublicRoutes } from '@/domain/routes/routes';

import Error404 from './shared/pages/errors/404/Error404';
import Home from './home/Home';
// import App from './App';

function AppRoutesProvider() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={PublicRoutes.home} element={<Home />} />
            <Route path={PublicRoutes.generic} element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutesProvider;