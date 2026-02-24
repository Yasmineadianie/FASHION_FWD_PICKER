import { Footer } from '@/components/Footer/Footer';
import { NavbarPublic } from '@/components/Navbar/NavbarPublic/NavbarPublic';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <>
      <header>
        <NavbarPublic />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default PublicLayout;
