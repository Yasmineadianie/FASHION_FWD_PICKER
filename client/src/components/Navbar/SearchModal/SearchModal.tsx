import { useState } from 'react';
import './SearchModal.css';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const SearchModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="search-btn" onClick={handleShow}>
        {' '}
        Search
      </button>

      <Modal  size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Find your piece</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group  >
              <Form.Label className='text'>category</Form.Label>
              <Form.Select className='p-3'
                value={''} // Aquí va el estado 
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="">All category</option>
                <option value="1">Coton</option>
                <option value="2">Line</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
            
            >
               <Form.Label className='text'>brand</Form.Label>
              <Form.Select className='p-3'
                value={''} // Aquí va el estado estado
                onChange={(e) => console.log(e.target.value)}
              >
                <option value="">All Brands</option>
                <option value="1">Coton</option>
                <option value="2">Line</option>
              </Form.Select>
              <Form.Label className='text'>product name</Form.Label>
              <Form.Control 
              className='p-3 text-muted'
              type="email"
              placeholder="e.g Soft Cotton Tee.. "
              
                autoFocus  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='footer-btn' onClick={handleClose}>
            Cancel
          </button>
          <button className='footer-btn btn-outline'onClick={handleClose}>
           search
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
