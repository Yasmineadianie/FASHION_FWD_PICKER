import express from 'express';
import userController from './user.controller.js';

const routes = express.Router();

//localhost:4000/api/user
routes.get('/allUsers', userController.allUser)

routes.post('/register', userController.userRegister)

routes.post('/login', userController.userLogin)

export default routes;