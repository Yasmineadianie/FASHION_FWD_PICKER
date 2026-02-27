import { ProductForm } from '@/components/ProductForm/ProductForm';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import { fetchData } from '@/helpers/axiosHelpers';

import { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const OneBrandProduct = () => {
  // Rescatamos el id del brand del parámetro dinámico
  const { id } = useParams();

  const { brand, setProduct, product } = useContext(AuthContext);

  // Hacemos un filtro mediante el id de brand del parámetro dinámico para elegir el brand.

  const oneBrand = brand?.filter((brand) => brand.brand_id == id) ?? [];

  useEffect(() => {
    
    const fetchOneBrand = async () => {

      try {
        let result = await fetchData(
        `/product/getProducts/${id}`,
        'GET',
        null,
        null,
      );

      setProduct(result.data.result);
        
      } catch (error) {
        console.log(error);
        
      }
    }
    
     
     fetchOneBrand();
  }, []);

  return (
 <div>
    {oneBrand.length > 0 && (
      <h2>{oneBrand[0].brand_name}</h2>
    )}
    <Container className="grid">
      {product?.map((elem) => (
        <ProductForm key={elem.product_id} product={elem} />
      ))}
    </Container>
  </div>
);


  
};

export default OneBrandProduct;
