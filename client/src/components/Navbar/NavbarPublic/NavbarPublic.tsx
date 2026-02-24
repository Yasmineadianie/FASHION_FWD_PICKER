import { Nav } from 'react-bootstrap';
import { SearchModal } from '../SearchModal/SearchModal';
import './NavbarPublic.css';
import { navigate, useNavigate } from 'react-router';

export const NavbarPublic = () => {

  const navigate = useNavigate();
  return (
    <Nav className="navbar">
      <div className="navbar-brand" onClick={()=> navigate('')}>
        Fashion <span className="span">Fwd</span> Picker
      </div>
      <div className="links">
        <button className="nabvar-btn">Our Brands</button>
        <div className="split"></div>
         <SearchModal />
        <div className="split"></div>
        {/* renderizacion {!login ? (} */}
        <div>
          <button className="nabvar-btn navbar-btn-outline" onClick={()=> navigate('/register')}>Register</button>
          <button className="nabvar-btn btn-bg" onClick={()=> navigate('/login')}>Login</button>
        
        </div>
        {/* ) : ( */}
        <div>
          <button className="nabvar-btn navbar-btn-outline" >Logout</button>
          <button className="nabvar-btn">whislist</button>
        </div>
      </div>
    </Nav>
  );
};
