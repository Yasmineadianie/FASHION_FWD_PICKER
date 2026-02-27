import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const PublicRoutes = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();

 // permite averiguar si hay o no un usuario
  useEffect(() => {
    if (userData) {
      if (userData.type === 1) navigate('/user/profile');
      if (userData.type === 2) navigate('/admin');
    }
  }, [userData]);

  return <Outlet />;
};
