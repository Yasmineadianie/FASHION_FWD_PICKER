import { useContext, useState } from 'react';
import './SearchModal.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '@/context/AuthContext/AuthContext';
import type { Product } from '@/interfaces/product.interface';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';

export const SearchModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  //estado para controlar el input
  const [search, setSearch] = useState<string>('');
  const [selectBrand, setSelectedBran] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

  const { product} = useContext(AuthContext);

  const handleClose = () =>{
    setShow(false);
    reset();
    setFilteredProduct([]);
  } 
  const handleShow = () => setShow(true);

  const searchProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newArray = product!.filter((elem: Product) => {
      const sameName = elem.product_name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());

      const sameBrand =
        selectBrand === '' ||
        selectBrand === 'All categories' ||
        String(elem.brand_id) === selectBrand;

      const sameCategorie =
        selectedCategory === '' ||
        selectedCategory === 'All categories' ||
        String(elem.category) === selectedCategory;
      return sameBrand && sameCategorie && sameName;
    });

    setFilteredProduct(newArray);
  };

  //Limpiamos busqueda
  const reset = () => {
    setSearch('');
    setSelectedBran('');
    setSelectedCategory('');
    setFilteredProduct([])
  };

  return (
    <div>
      <button className="search-btn" onClick={handleShow}>
        {' '}
        Search
      </button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Find your piece</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="text">category</Form.Label>
              <Form.Select
                className="p-3"
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedCategory(e.target.value)
                }
              >
                <option value="">All categories</option>
                <option value="T-Shirt">Camisetas</option>
                <option value="Hoodie">Sudaderas</option>
                <option value="Sweater">Jerséis</option>
                <option value="Shirt">Camisas</option>
                <option value="Jacket">Chaquetas</option>
                <option value="Coat">Abrigos</option>
                <option value="Pants">Pantalones</option>
                <option value="Jeans">Vaqueros</option>
                <option value="Shorts">Pantalones cortos</option>
                <option value="Dress">Vestidos</option>
                <option value="Skirt">Faldas</option>
                <option value="Shoes">Zapatos</option>
                <option value="Blazer">Blazers</option>
                <option value="Top">Tops</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text">brand</Form.Label>
              <Form.Select
                className="p-3"
                value={selectBrand}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedBran(e.target.value)
                }
              >
                <option value="">All Brands</option>
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
              </Form.Select>
              <Form.Label className="text">product name</Form.Label>
              <Form.Control
                className="p-3 text-muted"
                type="text"
                placeholder="e.g Soft Cotton Tee.. "
                autoFocus
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="footer-btn" onClick={reset}>
            Clean
          </button>
          <button className="footer-btn btn-outline" onClick={searchProduct}>
            search
          </button>
        </Modal.Footer>
        {filteredProduct.length > 0 ? (
          filteredProduct.map((elem: Product) => (
            <Container>
              <div className='detail'
              key={elem.product_id}
              onClick={() => navigate(`/product/${elem.product_id}`)}
            >
              <img className='img' src={elem.image_url} alt={elem.product_name} />
              <div >
              
              <p>{elem.product_name}</p>
               <p className="brand">{elem.brand_name}</p>
              <p>{elem.price}€</p>
              </div>
            </div>
            </Container>
          ))
        ) : (
          <div>
            <p>try with another name</p>
          </div>
        )}

        <Form.Group></Form.Group>
      </Modal>
    </div>
  );
};
