import './index.css';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { AppRouter } from './routers/AppRouter';
import { AuthContextProvider } from './context/AuthContext/AuthContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FashionApp = () => {
  return (
    <AuthContextProvider>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <RouterProvider router={AppRouter} />
      </Suspense>
    </AuthContextProvider>
  );
};
