import express from 'express';
import allProductController from './allProduct.controller.js';
import { verifyToken } from '../../middlewares/verifyToken.js';

const routes = express();

//falta el token a todas las rutas

//ruta para traer todos los productos.
routes.get('/allProduct', allProductController.selectAllProduct);

//ruta para crear productos
routes.post('/createProduct', verifyToken, allProductController.createProduct)

//ruta para traer los productos por marcas
routes.get('/getProducts/:id', allProductController.getOneBrandProduct);

//ruta para editar un producto
routes.put('/editProduct/:id', verifyToken, allProductController.editProduct);

routes.put('/delLogig/:id', allProductController.delLogicProduct);


export default routes ;