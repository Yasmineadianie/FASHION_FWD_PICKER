export interface CreateProduct {
  category: string;
  brand_id: string;
  image_url: string;
  product_name: string;
  description: string;
  price: string;
}

export interface EditProduct {
  description: string;
  price: string;
}