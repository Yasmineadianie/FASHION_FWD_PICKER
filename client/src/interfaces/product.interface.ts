import type { User } from './user.interface';

export interface Product {
  product_id: string;
  brand_id: string;
  product_name:string
  category: string
  price: number;
  description: string;
  image_url: string[];
  product_is_deleted: boolean;
  user: User;
}
