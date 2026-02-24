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






  
}

export default new AllProductController();
