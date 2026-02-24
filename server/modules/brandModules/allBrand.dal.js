import executeQuery from '../../config/database.js';



class AllBrandDal {

getAllBrand = async () => {

  try {
    let sql = 'SELECT * FROM brand' ;
 let result = await executeQuery(sql);
 return result ;

  }catch(error) {
    throw error
  }
}







}

export default new AllBrandDal();