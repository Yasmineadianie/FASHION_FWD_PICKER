import type { Product } from '@/interfaces/product.interface';
import './ProductForm.css';
import { Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { fetchData } from '@/helpers/axiosHelpers';

export interface ProductsFormProps {
  product: Product;
}

export const ProductForm = ({ product }: ProductsFormProps) => {
  const { userData, token , setWishlist, wishlist} = useContext(AuthContext);
  const navigate = useNavigate();

  const [isDeleted, setIsDeleted] = useState<number>(
    product.product_is_deleted ? 1 : 0,
  );

  
  const adminEdit = userData?.type === 2;

   const onSubmit = async () => {

    try {

       await fetchData(`/wishlist/${product.product_id}`, "POST", null, token);
      setWishlist([...wishlist, product])
      
    } catch (error) {
      console.log(error);
      
    }

  }


  const bandHandler = async (product_id: string) => {
    try {
      await fetchData(`/product/delLogig/${product_id}`, 'PUT', null, token);
      setIsDeleted((prev) => (prev === 0 ? 1 : 0));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="card  ">
        <img className="img" src={product.image_url} alt="product.name" />
        <div className="detail">
          <h4 className="brand">{product.brand_name}</h4>
          <h4>{product.product_name}</h4>
          <p className="fw-bold mt-5">{product.price} €</p>
        </div>
        {!adminEdit ? (
          <button
            className="btn btn-warning mt-2"
            onClick={onSubmit}
          >
            Add to list
          </button>
        ) : (
          <div className="d-flex-wrap justify-content-center">
            <button
              className="btn btn-danger mt-2"
              onClick={() => bandHandler(product.product_id)}
            >
              {isDeleted ? 'Enable product' : 'Disable product'}
            </button>

            <button
              className="btn btn-warning mt-2"
              onClick={() =>
                navigate(`/admin/editProduct/${product.product_id}`)
              }
            >
              Edit product
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};
