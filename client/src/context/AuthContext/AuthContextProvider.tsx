import  { useState, type PropsWithChildren } from 'react';
import { AuthContext } from './AuthContext';
import type { User } from '@/interfaces/user.interface';




export interface ContextProviderProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContextProvider = ({children}: PropsWithChildren ) => {

const [user, setUser] = useState <User | null >(null)
 //const [token, setToken] = useState(null);

console.log(user);



  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}
//   value={{
  // userData,
  // productData,
  // login,
  // logout,

  //   }}>