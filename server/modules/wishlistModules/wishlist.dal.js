import executeQuery, {dbPool} from '../../config/database.js';


class WishistDal {

getWishlist = async () => {

  try {
    let sql = 'SELECT * FROM wishlist' ;
     let result = await executeQuery(sql);
     return result;
  }catch(error) {
    throw error;
  }
}

}

export default new WishistDal;