import express from 'express';
import wishlistController from './wishlist.controller.js';
import {verifyToken} from '../../middlewares/verifyToken.js'

const routes = express();

//ruta para traer todos los productos.
routes.post('/:product_id',verifyToken, wishlistController.getWishlist);

//ruta
export default routes ;