import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import cors from 'cors';
import userRouter from './modules/userModules/user.routes.js';
import productRouter from './modules/productModules/allProduct.routes.js';
import brandRouter from './modules/brandModules/allBrand.routes.js'
import wishlistRouter from './modules/wishlistModules/wishlist.routes.js'

//conseguimos la ruta exacta para generar el dirname
// (q hace referencia a la ruta exacta de la carpeta server para idicar donde está public)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/brand', brandRouter);
app.use('/api/wishlist', wishlistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respuesta a un posible error
  res.status(err.status || 500).json(err);

});

export default app;
