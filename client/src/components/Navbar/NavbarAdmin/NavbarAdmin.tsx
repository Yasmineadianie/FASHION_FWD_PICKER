import './AdminNavbar.css'
import { Link } from 'react-router'

export const NavbarAdmin = () => {



  return (
     <div className="front-page">
      <section className="lateral-bar">
        <div>
        
          <div className="container-logo">
            <i className="fa-regular fa-house"></i>
            <Link className='link' to={"/tests"} > HOME</Link>
          </div>
          <div className="container-logo">
            <i className="fa-brands fa-squarespace"></i>
            <Link className='link' to={"/admin"}>Admin Dashboard</Link>
          </div>
          <div className="container-logo">
            <i className="fa-solid fa-business-time"></i>
            <Link className='link' to={"/allUsers"}>Users Registered</Link>
          </div>

          <div className="container-logo">
            <i className="fa-regular fa-file-lines"></i>
            <Link className='link' to={"/admin/Products"}>Products</Link>
          </div>
        </div>
        
        <div className="child2">
          <p>Privacidad</p>
          <p>Cookies</p>
          <p>Aviso legal</p>

          
        </div>
      </section>
    </div>
  )
}
