import allBrandDal from "./allBrand.dal.js";




class AllBrandController {

  getAllBrand = async (req, res) => {

    try {
   let result = await allBrandDal.getAllBrand();
      res.status(200).json({message: 'ruta ok', result})
    }catch(error) {
     res.status(500).json('error en la consulta')
    }
  }





}

export default new AllBrandController();