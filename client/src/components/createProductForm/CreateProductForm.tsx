import { AuthContext } from "@/context/AuthContext/AuthContext"
import { fetchData } from "@/helpers/axiosHelpers"
import type { CreateProduct } from "@/interfaces/create.product"
import { createProductSchema } from "@/schemas/createProductSchema"
import { useContext, useState } from "react"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router";
import {ZodError } from 'zod'


const initialValue : CreateProduct = {
  category: '',
  brand_id: '',
  image_url: '',
  product_name: '',
  description: '',
  price: '',
}


  export const CreateProductForm = () => {

const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const [createForm, setCreateForm] = useState<CreateProduct>(initialValue);
  const [valErrors, setValErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>('');

  //control de los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) => {
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };

  //envio de datos al back
  const onSubmit = async () => {

    //validaciones
    try {
      createProductSchema.parse(createForm);

      const data = {
        ...createForm,
        price: Number(createForm.price),
        brand_id: Number(createForm.brand_id),
      };

      const res = await fetchData(
        '/product/createProduct',
        'POST',
        data,
        token,
      );

      navigate('/admin/products');
      console.log('new product', res);

    } catch (error) {
      if (error instanceof ZodError) {
        //objeto para guardar los erores
        const fieldsErrors: Record<string, string> = {};

        error.issues.forEach((elem) => {
          fieldsErrors[elem.path[0] as string] = elem.message;
          console.log('dame el error:', fieldsErrors);
        });

        setValErrors(fieldsErrors);
      } else {
        setErrorMsg('Error creando product');
      }
    }
  };

  return (

    <Container>
    <div className="container mt-4">
      <h2>Create Product</h2>

      {errorMsg && 
      <p style={{ color: 'red' }}>{errorMsg}</p>}

      <div className="mb-3">
        <label>Category</label>
        <select
         name="category"
          value={createForm.category} 
          onChange={handleChange}
           className="form-select">
          <option value="">Select category</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Sweater">Sweater</option>
          <option value="Shirt">Shirt</option>
          <option value="Jacket">Jacket</option>
          <option value="Coat">Coat</option>
          <option value="Pants">Pants</option>
          <option value="Jeans">Jeans</option>
          <option value="Shorts">Shorts</option>
          <option value="Dress">Dress</option>
          <option value="Skirt">Skirt</option>
          <option value="Shoes">Shoes</option>
          <option value="Blazer">Blazer</option>
          <option value="Top">Top</option>
        </select>
        {valErrors.category &&
         <p style={{ color: 'red' }}>{valErrors.category}</p>}
      </div>

      <div className="mb-3">
        <label>Brand</label>
        <select name="brand_id" 
        value={createForm.brand_id}
         onChange={handleChange}
          className="form-select">
          <option value="">Select brand</option>
          <option value="1">Jack & Jones</option>
          <option value="2">Vero Moda</option>
          <option value="3">Only</option>
          <option value="4">Selected</option>
          <option value="5">Name It</option>
          <option value="6">Pieces</option>
          <option value="7">Only & Sons</option>
          <option value="8">Vila</option>
          <option value="9">Noisy May</option>
          <option value="10">JDY</option>
          <option value="11">Object</option>
          <option value="12">Y.A.S</option>
        </select>
        {valErrors.brand_id && 
        <p style={{ color: 'red' }}>{valErrors.brand_id}</p>}
      </div>

      <div className="mb-3">
        <label>Image URL</label>
        <input 
        name="image_url" 
        value={createForm.image_url}
         onChange={handleChange} 
         className="form-control" 
         placeholder="https:" />
        {valErrors.image_url && 
        <p style={{ color: 'red' }}>{valErrors.image_url}</p>}
      </div>

      <div className="mb-3">
        <label>Product name</label>
        <input
         name="product_name" 
        value={createForm.product_name} 
        onChange={handleChange} 
        className="form-control"
         placeholder="Product name" />
        {valErrors.product_name && 
        <p style={{ color: 'red' }}>{valErrors.product_name}</p>}
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea 
        name="description" 
        value={createForm.description}
         onChange={handleChange} className="form-control" placeholder="Description" />
        {valErrors.description && 
        <p style={{ color: 'red' }}>{valErrors.description}</p>}
      </div>

      <div className="mb-3">
        <label>Price (€)</label>
        <input
        name="price" 
        type="number"
         value={createForm.price} 
         onChange={handleChange} 
         className="form-control" 
         placeholder="29.99" />
        {valErrors.price && 
        <p style={{ color: 'red' }}>{valErrors.price}</p>}
      </div>

      <div className="d-flex gap-3">
        <button onClick={() => navigate('/admin/products')} className="btn btn-secondary">Cancel</button>
        <button onClick={onSubmit} className="btn btn-dark">Create product</button>
      </div>
    </div>
    </Container>
  );
};
