import {z} from 'zod';

export const createProductSchema = z.object({

 category: z.string().
           min(1, 'Category is required'),
  brand_id: z.string()
             .min(1, 'Brand is required'),
  image_url: z.string()
              .url('Invalid image URL'),
  product_name: z.string()
                 .min(3, 'Name must be at least 3 characters').max(100),
  description: z.string()
                .min(5, 'Description is required'),
  price: z.string()
          .min(1, 'Price is required'),
                  
})