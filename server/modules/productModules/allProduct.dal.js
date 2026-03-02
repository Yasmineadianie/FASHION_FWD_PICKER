import { connect } from 'http2';
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
}
  
createProduct = async (data) => {

  const {category,  brand_id, image_url, product_name, description, price} = data;

  try {
  
    let sql = "INSERT INTO product (category,  brand_id, image_url, product_name, description, price) VALUES(?,?,?,?,?,?)";

    let values = [category,  brand_id, image_url, product_name, description, price]
    let result = await executeQuery( sql, values);
    console.log(result);
            return result

  }catch(error) {
    throw error;
  }
  }




getOneBrandProduct = async(values) => {

  try {
    let sql = "SELECT * FROM product WHERE brand_id = ?";
    let result = await executeQuery(sql, values)
    return result;
  } catch (error) {
    throw error;
  }


}

editProduct = async(values) => {

  try {
    let sql = "UPDATE product SET price = ?, description = ? WHERE product_id = ?";
    let result = await executeQuery(sql, values)
    return result;
  } catch (error) {
    throw error;
  }
}



delLogicProduct = async (id) => {

  try {

    let sql = "UPDATE product SET product_is_deleted = 1 WHERE product_id = ?"
    let result = await executeQuery(sql, [id]);
    return result;
    
  } catch (error) {
    throw error;
  }

}



}



export default new ProductDal();