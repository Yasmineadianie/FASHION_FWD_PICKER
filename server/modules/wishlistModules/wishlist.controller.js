import wishlistDal from "./wishlist.dal.js";


class WishistController {

  getWishlist = async (req, res) => {
     const{product_id } = req.params; 
     console.log(req.params);
     
     const user_id = req.user_id;
     const values = [user_id, product_id];
    try {
let result = wishlistDal.getWishlist(values);
res.status(200).json({message: 'ruta wishlist ok', result})
console.log('wishlist', result);


    }catch(error) {
      res.status(500).json('error')
    }
  }
}

export default new WishistController;