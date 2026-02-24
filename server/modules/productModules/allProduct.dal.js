import executeQuery, {dbPool} from '../../config/database.js'
class ProductDal {


selectAllProduct = async () => {
  try {

    let sql = 'SELECT * FROM product';
    let result = await executeQuery(sql)
    return result;
  }catch(error) {
    throw error;
  }

// createProduct = async (values) => {

//   try {
//     const values = {}
//     let sql = 

//   }catch(error) {
//     throw error;
//   }
// }

}


















}






export default new ProductDal();