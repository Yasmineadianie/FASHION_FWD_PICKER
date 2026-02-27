import productDal from './allProduct.dal.js';

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



  
}

export default new AllProductController();
