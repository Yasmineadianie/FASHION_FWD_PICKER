import { Footer } from "@/components/Footer/Footer";
import { NavbarPublic } from "@/components/Navbar/NavbarPublic/NavbarPublic";
import { NavbarUser } from "@/components/Navbar/NavbarUser/NavbarUser";
import { Outlet } from "react-router";


 const UserLayout = () => {


  return (
    <div>
   <header>
<NavbarPublic />
<NavbarUser/>
   </header>

<main>
  
<Outlet />
</main>

<footer>
  <Footer />
</footer>


    </div>
  )
}
export default UserLayout;