import { Nav } from 'react-bootstrap';
import { SearchModal } from '../SearchModal/SearchModal';
import './NavbarPublic.css';
import {  useNavigate } from 'react-router';
import { useContext} from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext';

export const NavbarPublic = () => {

  const {token, logout, userData} =useContext(AuthContext);

  const isLogin = Boolean(token)

  const navigate = useNavigate();
  return (
    <Nav className="navbar">
      <div className="navbar-brand" onClick={()=> navigate('')}>
        Fashion <span className="span">Fwd</span> Picker
      </div>
      <div className="links">
        <button className="nabvar-btn" onClick={()=> navigate('/product/allProduct')}>Our Products</button>
        <div className="split"></div>
         <SearchModal />
        <div className="split"></div>
         {!isLogin ? (
        <div>
          <button className="nabvar-btn navbar-btn-outline" onClick={()=> navigate('/register')}>Register</button>
          <button className="nabvar-btn btn-bg" onClick={()=> navigate('/login')}>Login</button>
        
        </div>
        ) : ( 
        <div className='d-flex gap-4'>
          
          <div className='d-flex gap-2'>
            <p onClick={()=> navigate('/user/profile')}> Hello {userData?.name}</p>
            <p>{userData?.avatar}</p>
         
          </div>
          <button onClick={logout} className="nabvar-btn navbar-btn-outline" >Logout</button>
          <button className="nabvar-btn"><i className="fa-solid fa-heart"></i></button>
        </div>)}
      </div>
    </Nav>
  );
};
