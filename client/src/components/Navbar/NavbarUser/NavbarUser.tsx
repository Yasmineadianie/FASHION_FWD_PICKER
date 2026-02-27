import './NavbarUser.css'
import { Link } from 'react-router'
export const NavbarUser = () => {
  return (
   <div className="front-page">
      <section className="lateral-bar">
        <div>
        
          <div className="container-logo">
            <i className="fa-regular fa-house"></i>
            <Link className='link' to={"/"} > HOME</Link>
          </div>
          <div className="container-logo">
            <i className="fa-brands fa-squarespace"></i>
            <Link className='link' to={"/user/profile"}>Profile</Link>
          </div>
          <div className="container-logo">
            <i className="fa-solid fa-business-time"></i>
            <Link className='link' to={"/user/wishlist"}>Wishlist</Link>
          </div>

          <div className="container-logo">
            <i className="fa-regular fa-file-lines"></i>
            <Link className='link' to={"/product/allProduct"}>All Products</Link>
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
