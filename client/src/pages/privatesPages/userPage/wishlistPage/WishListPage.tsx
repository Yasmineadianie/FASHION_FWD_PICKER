import { ProductForm } from "@/components/ProductForm/ProductForm"
import { AuthContext } from "@/context/AuthContext/AuthContext"
import type { Product } from "@/interfaces/product.interface"
import { useContext } from "react"
import { Container } from "react-bootstrap"


const WishListPage = () => {
  const { wishlist } = useContext(AuthContext)

  return (
    <Container className="d-grid">
     <div className=" ">
       <h1>My wishlist</h1>

      {wishlist?.map((elem: Product) => (
        <ProductForm key={elem.product_id} product={elem}
        />
      ))}

     </div>
    </Container>
  )
}

export default WishListPage