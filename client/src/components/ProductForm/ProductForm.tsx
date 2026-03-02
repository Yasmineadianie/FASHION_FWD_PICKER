import type { Product } from '@/interfaces/product.interface';
import './ProductForm.css';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';



export interface ProductsFormProps {
  product: Product;
  
  
}

export const ProductForm = ({ product}: ProductsFormProps) => {

  const {userData} = useContext(AuthContext);
  const navigate = useNavigate();

const adminEdit = userData?.type === 2;




  return (
    <Container>
      <div className="card  ">
        <img className="img" src={product.image_url} alt="product.name" />
        <div className="detail">
          <h4 className="brand">{product.brand_name}</h4>
          <h4>{product.product_name}</h4>
          <p className="fw-bold mt-5">{product.price} €</p>
        </div>
         {!adminEdit ?  (
        <button className="btn btn-warning mt-2"
            onClick={() => navigate(`/user/wishlist/${product.product_id}`)}>Add to list</button>

         ):(
         <div className='d-flex-wrap justify-content-center'>
           <button
            className="btn btn-danger mt-2"
            onClick={() => navigate(`/admin/delLogicProduct/${product.product_id}`)}
          >
            Deseable product
          </button>
          
           <button
            className="btn btn-warning mt-2"
            onClick={() => navigate(`/admin/editProduct/${product.product_id}`)}
          >
            Edit product
          </button>
         </div>
        )}
      </div>
    </Container>
  );
};
