import Form from 'react-bootstrap/Form';
import './Loginpage.css'
import { useNavigate } from 'react-router';
import type { LoginForm } from '@/interfaces/user.interface';
import { useContext, useState } from 'react';
import { fetchData } from '@/helpers/axiosHelpers';
import { AuthContext } from '@/context/AuthContext/AuthContext';



const initialValue: LoginForm = {
  email: '',
  password: '',
};

const LoginPage = () => {

  const [login, setLogin] = useState<LoginForm>(initialValue);
  const [errorMsg, setErroMsg] = useState<string>("")

const navigate = useNavigate();
const {setUserData, setToken} = useContext(AuthContext);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };


const onSubmit = async () => {
  try {
    // Fetch para mandar el input del usuario a autenticación
    const res = await fetchData('/user/login', 'POST', login);
    const token = res.data.token;

    //peticion para traer datos de 1usuario logueado
    const resUser = await fetchData('/user/userByToken', 'GET', null, token);

    //guardamos el token en el localstorage
    localStorage.setItem('token', token);

    console.log('ressss', resUser);
    setUserData(resUser.data.user);
    setToken(token);

  } catch (error:any) {
    console.log(error);
    setErroMsg(error.response.data.message);
  }
};



  return (
    <div className='cont d-flex justify-content-center  p-4 '>
     <Form className=" mt-5 w-25 p-4 form-login "
         onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
      <h1 className='text-center pb-5'>Login Form</h1>
      
      <Form.Group className="mb-1 p-1 " 
      >
         <Form.Label >
         Email
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
           value={login.email}
           onChange={handleChange}
        />
     
      </Form.Group>
       <Form.Label >
         Password
        </Form.Label>
      <Form.Group className="mb-3 ">
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
           value={login.password}
           onChange={handleChange}
        />
       
      </Form.Group>
        <p className='error-msg fs-6'>{errorMsg}</p>
      <Form.Group className='gap-4 d-flex justify-content-center py-4 mb-3'>

       <button type='button' onClick={()=> navigate(-1)} className='btn-r bg-black text-light'>Cancel</button>
        <button type='submit' className='btn-r'>Send</button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default LoginPage