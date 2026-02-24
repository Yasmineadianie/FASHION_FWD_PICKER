import { log } from "console"
import { useEffect } from "react"


const DashboardProduct = () => {

  const [allProducts, setAllProducts] = useState([])

useEffect(()=> {

  const fetchAllProducts = async () => {
     try {

      let res = await fetchData('/products/allProducts', 'GET', null, null)
     }catch(error){
      console.log(error);
      
     }
  }
  fetchAllProducts
},[])
  return (
    <div>DashboardProduct</div>
  )
}

export default DashboardProduct