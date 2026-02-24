import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const PublicRoutes = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

 // permite averiguar si hay o no un usuario
  useEffect(() => {
    if (user) {
      if (user.type === 1) navigate('/allUsers');
      if (user.type === 2) navigate('/admin');
    }
  }, [user]);

  return <Outlet />;
};
