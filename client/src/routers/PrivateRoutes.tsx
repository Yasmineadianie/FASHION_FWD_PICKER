import { AuthContext } from "@/context/AuthContext/AuthContext"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

interface Props {
  requiredType: 1 | 2;
}

export const PrivateRoutes = ({ requiredType}: Props) => {
 
  const {userData} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
  
    
    if (userData?.type !== requiredType) navigate('/')
  

  },[userData])


console.log(userData);


  return (
    <Outlet/>
  )
}
