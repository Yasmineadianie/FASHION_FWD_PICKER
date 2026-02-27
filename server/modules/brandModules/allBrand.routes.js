import express from 'express';
import allBrandController from './allBrand.controller.js'

const routes = express();

//ruta para traer todos las marcas.
routes.get('/allBrand', allBrandController.getAllBrand);



//ruta
export default routes ;