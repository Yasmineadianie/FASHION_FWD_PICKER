import { Footer } from '@/components/Footer/Footer';
import { NavbarPublic } from '@/components/Navbar/NavbarPublic/NavbarPublic';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <div className='app-cont'>
   
        <NavbarPublic />
     

      <main className='main-cont'>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default PublicLayout;
