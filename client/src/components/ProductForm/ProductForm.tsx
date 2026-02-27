import type { Product } from '@/interfaces/product.interface';
import './ProductForm.css';
import { Container } from 'react-bootstrap';



interface ProductsFormProps {
  product: Product;
  
  
}

export const ProductForm = ({ product}: ProductsFormProps) => {
  return (
    <Container>
      <div className="card  ">
        <img className="img" src={product.image_url} alt="product.name" />
        <div className="detail">
          <span className="brand">{product.brand_name}</span>
          <h4>{product.product_name}</h4>
          <p className="fw-bold mt-5">{product.price}</p>
        </div>
        <button>Add to  LIST</button>
      </div>
    </Container>
  );
};
