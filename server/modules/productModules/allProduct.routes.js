import express from 'express';
import allProductController from './allProduct.controller.js';

const routes = express();

//falta el token a todas las rutas

//ruta para traer todos los productos.
routes.get('/allProduct', allProductController.selectAllProduct);

//ruta para crear productos
//routes.post('/createProduct', allProductController.createProduct)



export default routes ;