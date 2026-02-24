import { AuthContext } from "@/context/AuthContext/AuthContext"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"

interface Props {
  requiredType: 1 | 2;
}

export const PrivateRoutes = ({ requiredType}: Props) => {
 
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
      const userType = user?.type;
    if(user === null)  navigate ("/login" );
      if (userType !== requiredType) navigate('/', {replace: true})
  
console.log(userType);

  },[user, requiredType])


console.log(user);


  return (
    <Outlet/>
  )
}
