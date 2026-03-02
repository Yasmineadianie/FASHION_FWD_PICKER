import './edit.css'
import { AuthContext } from "@/context/AuthContext/AuthContext";
import { fetchData } from "@/helpers/axiosHelpers";
import type { EditProduct as EditProduct } from "@/interfaces/create.product";
import type { Product } from "@/interfaces/product.interface";
import { useContext, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router"


const initialValue : EditProduct = {
  description: '',
  price: '',
}


const EditProduct = () => {

  //rescatamos el id del producto
  const {id} = useParams();
  const {token, product, setProduct} = useContext(AuthContext);
 const [show, setShow] = useState<boolean>(false);
const [productToEdit, setProductToEdit] = useState<EditProduct>(initialValue)


  const handleClose = () =>{
    setShow(false);
   
  } 

  //control de los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) => {
    const { name, value } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
  };
  
  const handleShow = () => setShow(true);



const onSubmit = async () => {

try {
   await fetchData(`/product/editProduct/${id}`, 'PUT',  productToEdit ,token)
  setProduct(product!.map((elem: Product): Product => {

    //comparamos con el id del useParams
    if(String(elem.product_id) === id){
      return {...elem, ...productToEdit} as Product;
    }else{
      return elem;
    }
  }));
  handleClose();
} catch (error) {
  console.log(error);
  
  
}

}





  return (
     <Container className="mt-4">
      <h1>Edit product</h1>
       {product?.filter((elem: Product) => String(elem.product_id) === id).map((elem: Product) => (
      <div key={elem.product_id} className="d-flex gap-4 mb-4 align-items-start">
        <img src={elem.image_url} alt={elem.product_name} className='edit-img mt-4'/>
        <div>
          <h2>{elem.product_name}</h2>
          <p className="text-muted">{elem.brand_name}</p>
          <p>{elem.description}</p>
          <p className="fw-bold">{elem.price} €</p>
          <p className="text-muted small">Category: {elem.category}</p>
        </div>
      </div>
    ))}
      <Button variant="warning" onClick={handleShow}>Edit</Button>
  <Modal
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter title" 
                            value={productToEdit.description}
                            onChange={handleChange}
                            name='description'
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCountry">
                        <Form.Label>Price (€)</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter country" 
                            value={productToEdit.price}
                            onChange={handleChange}
                            name='price'
                            />
                    </Form.Group>
                   </Form>
                   </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button 
                    variant="primary"
                    onClick={onSubmit}
                >Save changes</Button>
            </Modal.Footer>
        </Modal>
        </Container>
  )
}

export default EditProduct