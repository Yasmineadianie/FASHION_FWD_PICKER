
import { NavbarPublic } from '@/components/Navbar/NavbarPublic/NavbarPublic';
import { NavbarUser } from '@/components/Navbar/NavbarUser/NavbarUser';
import { Outlet } from 'react-router';

const UserLayout = () => {
  return (
    <div className='app-cont'>

        <NavbarPublic />
        <NavbarUser />
   

      <main className='main-cont'>
        <Outlet />
      </main>

    </div>
  );
};
export default UserLayout;
