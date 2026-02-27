import { BrandCard } from "@/components/BrandCard/BrandCard";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import type { Brand } from "@/interfaces/brand.interface";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import './BrandGrid.css'


 const BrandGrid = () => {


const { brand } = useContext(AuthContext);
console.log('nnnnmmop',brand);



  return (
    <>
     <div> <h2 className="text-center ">There's a brand for you wiht Fashion FwD Picker!</h2>
   
     </div>
   
<Container className='grid py-5'>
  
      {brand?.map((elem: Brand) => {
        return (
          <div key={elem.brand_id}>
            <BrandCard brand={elem} />
          </div>
        );
      })}
     
    </Container>

</>
  )
}
export default BrandGrid;