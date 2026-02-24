import {z} from 'zod';

export const registerSchema = z.object(({
name: z.string()
       .min(3,'name must be at least 3 characters')
       .max(50, 'name cannot exceed 50 characters'),
lastname: z.string()
       .min(3,'Lastname must be at least 3 characters')
       .max(50, 'Lastname cannot exceed 50 characters'),
email: z.email('invalid email address'),
password: z
                .string()
                .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, "Password is not secure")
}))