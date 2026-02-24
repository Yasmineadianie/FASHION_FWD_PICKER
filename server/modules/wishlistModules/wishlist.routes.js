import express from 'express';
import wishlistController from './wishlist.controller.js';

const routes = express();

//ruta para traer todos los productos.
routes.get('/wishlist', wishlistController.getWishlist);

//ruta
export default routes ;