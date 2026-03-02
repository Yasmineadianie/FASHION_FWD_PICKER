import { useEffect, useState, type PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';
import { fetchData } from '@/helpers/axiosHelpers';
import type { User } from '@/interfaces/user.interface';
import type { Product } from '@/interfaces/product.interface';
import type { Brand } from '@/interfaces/brand.interface';


export interface ContextProviderProps {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
  product: Product[] | null;
  brand: Brand[] | null;
  setProduct:React.Dispatch<React.SetStateAction<Product[] | null>>
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>
  
}

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [product, setProduct] = useState<Product[] | null>(null);
  const [brand, setBrand] = useState<Brand[] | null>(null);
  //permite a react no actualiza estado si el componente no existe
    const [reset, setReset] = useState<boolean>(false);


  useEffect(() => {
    const checkTokenLS = localStorage.getItem('token');

    if (checkTokenLS) {
      const fetchUserData = async () => {
        try {
          const result = await fetchData(
            '/user/userByToken',
            'GET',
            null,
            checkTokenLS,
          );
          setToken(checkTokenLS);
          setUserData(result.data.user);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserData();
    }


  //traemos todos los productos
    const fetchProduct = async () => {
      try {
        let result = await fetchData('/product/allProduct', 'GET', null, null);
        setProduct(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();



const fetchBrand = async ()=> {


  try {

    let result  = await fetchData('/brand/allBrand', "GET", null, null);
      setBrand(result.data.result);
      console.log(setBrand);
      
  } catch (error) {
    console.log(error);
    
  }
}
fetchBrand();

  }, [reset]);

  const logout = () => {
    setUserData(null);
    setToken(null);
    localStorage.removeItem('token');
   
  };

  return (
    <AuthContext.Provider
      value={{
         userData,
          setUserData, 
          token, 
          setToken, 
          logout , 
          product,
          brand,
          setProduct,
          reset,
         setReset
        }}
    >
      {children}
    </AuthContext.Provider>
  );
};
