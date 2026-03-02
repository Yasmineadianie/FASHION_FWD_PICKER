import { log } from 'console';
import allProductDal from './allProduct.dal.js';
import productDal from './allProduct.dal.js';
import executeQuery from '../../config/database.js';

class AllProductController {



  selectAllProduct = async (req, res) => {
    try {
      let result = await productDal.selectAllProduct();
      res.status(200).json({ message: 'ruta perfecta' , result});
    } catch (error) {
      res.statut(500).json('error en la consulta');
    }
  };


getOneBrandProduct = async (req, res) => {

  const {id} = req.params;
  const values = [id]
  try {
    let result = await productDal.getOneBrandProduct(values)
    console.log('result:', result);
     res.status(200).json({message: 'los productos', result})
  } catch (error) {
    res.status(500).json('error')
  }
}


 createProduct = async(req, res) => {

  try {
    const {category,  brand_id, image_url, product_name, description, price} = req.body

    let data = {category,  brand_id, image_url, product_name, description, price};
    let result = await productDal.createProduct(data);
    res.status(200).json({message: "creacion ok", result})
    
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
    
  }

 }
  

editProduct = async (req, res) => {
  const {id} = req.params;
  const { description, price} = req.body;
  const values = [price,description, id]

try {
  let result = await productDal.editProduct( values)
  res.status(200).json({message: 'datos editados', result})

} catch (error) {
  console.log(error);
  (error);
  res.status(500).json('error')
}
}



delLogicProduct = async (req, res) => {
 const {product_id} = req.params;

  try {
    let result = await productDal.delLogicProduct(product_id);
    res.status(200).json({message: 'borrado ok', result});
    
  } catch (error) {
    console.log(error)
    res.status(500).json('error');
    
  }
}




}

export default new AllProductController();
