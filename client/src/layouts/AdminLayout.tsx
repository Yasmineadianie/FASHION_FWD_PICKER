import { NavbarAdmin } from "@/components/Navbar/NavbarAdmin/NavbarAdmin";
import { NavbarPublic } from "@/components/Navbar/NavbarPublic/NavbarPublic";
import { Outlet } from "react-router";


 const AdminLayout = () => {
  return (
    <div>
   <header>


<div><NavbarPublic /></div>
<div><NavbarAdmin/></div>
   </header>

<main>
  <h1>alfo</h1>
<Outlet />
</main>


    </div>
  )
}
export default AdminLayout;