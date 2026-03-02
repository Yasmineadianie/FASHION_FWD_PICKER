import { ProductForm } from '@/components/ProductForm/ProductForm';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import type { Product } from '@/interfaces/product.interface';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './dashboard.css'
//import { Pagination } from '@/components/CustumPages/Pagination';

const DashboardProduct = () => {
  const { product } = useContext(AuthContext);

  return (
    <Container className='grid'>
      <h1 className='text-center'>Explore ours Products</h1>
      {product?.map((item: Product) => {
        return (
          <div key={item.product_id}>
            <ProductForm product={item} />
          </div>
        );
      })}
      {/* <Pagination/> */}
    </Container>
  );
};

export default DashboardProduct;
