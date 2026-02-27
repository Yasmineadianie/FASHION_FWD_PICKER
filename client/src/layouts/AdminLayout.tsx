
import { NavbarAdmin } from '@/components/Navbar/NavbarAdmin/NavbarAdmin';
import { NavbarPublic } from '@/components/Navbar/NavbarPublic/NavbarPublic';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="app-cont">
     <div>
       <NavbarPublic />
     </div>
     
     <div>
       <NavbarAdmin />
     </div>

      <main className="main-cont">
        <Outlet />
      </main>
      
    </div>
  );
};
export default AdminLayout;
