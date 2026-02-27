import { Container } from 'react-bootstrap';
import './BrandCard.css'
import type { Brand } from "@/interfaces/brand.interface"
import {  useNavigate } from 'react-router';

export interface BrandProps {

  brand: Brand;
}

export const BrandCard = ({brand}: BrandProps) => {

const navigate = useNavigate();


  return (
  
<Container>
      <div className="brand-card "> 
        <div className='div-img'>
          <img className="b-img" src={brand.image_url}  />
        </div> 
        <div></div>
        
        <div className="">
          <span className="brand">{brand.brand_name}</span>
          <h4>{brand.brand_name}</h4>
          <button onClick={()=> navigate(`/brand/${brand.brand_id}`)} className='b-btn'>View product</button>
        </div>
      </div>
    </Container>

  )
}
