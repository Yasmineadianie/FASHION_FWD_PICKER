import { ProductForm } from '@/components/ProductForm/ProductForm';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import type { Product } from '@/interfaces/product.interface';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';

const AdminProductsPage = () => {
  const { product } = useContext(AuthContext);

  return (
    <Container>
      <h2>All Products</h2>
      <div className="grid">
        {product?.map((elem: Product) => (
          <ProductForm key={elem.product_id} product={elem} />
        ))}
      </div>
      
    </Container>
  );
};

export default AdminProductsPage;
