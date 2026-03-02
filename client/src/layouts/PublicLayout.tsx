//import { Footer } from '@/components/Footer/Footer';
import { NavbarPublic } from '@/components/Navbar/NavbarPublic/NavbarPublic';
import { Outlet } from 'react-router';
import './layout.css'

const PublicLayout = () => {
  return (
    <div className='app-cont'>
   
        <NavbarPublic />
     

      <main className='main-cont'>
        <Outlet />
      </main>

      <footer>
      
      </footer>
    </div>
  );
};
export default PublicLayout;
