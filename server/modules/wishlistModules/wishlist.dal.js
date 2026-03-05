import executeQuery, {dbPool} from '../../config/database.js';


class WishistDal {

getWishlist = async (values) => {

  try {
    let sql = 'INSERT INTO wishlist (user_id, product_id) VALUES (?,?)' ;
     let result = await executeQuery(sql,values);
     return result;
  }catch(error) {
    throw error;
  }
}

}

export default new WishistDal;