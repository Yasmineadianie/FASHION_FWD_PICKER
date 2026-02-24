import wishlistDal from "./wishlist.dal.js";


class WishistController {

  getWishlist = async (req, res) => {

    try {
let result = wishlistDal.getWishlist();
res.status(200).json({message: 'ruta ok'})


    }catch(error) {
      res.status(500).json('error')
    }
  }
}

export default new WishistController;