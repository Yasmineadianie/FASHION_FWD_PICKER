import Form from 'react-bootstrap/Form';
import './Register.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { registerSchema } from '../../../../schemas/RegisterSchema';
import { ZodError } from 'zod';
import type { RegisterForm } from '@/interfaces/user.interface';
import { fetchData } from '@/helpers/axiosHelpers';

const initialValue: RegisterForm = {
  name: '',
  lastname: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState<RegisterForm>(initialValue);
  const [valErrors, setValErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = async () => {
    try {
      // parse compara los valores del objeto register con el schema
      registerSchema.parse(register);

      //mandar los datos al back
      const res = await fetchData('/user/register', 'POST', register);
      console.log('mmmm', res);

      navigate('/login');
    } catch (error) {
      if (error instanceof ZodError) {
        //objeto para guardar los erores
        const fieldsErrors: Record<string, string> = {};

        error.issues.forEach((elem) => {
          fieldsErrors[elem.path[0] as string] = elem.message;
          console.log('dame el error:', fieldsErrors);
        });

        setValErrors(fieldsErrors);
      } else {
        setValErrors({});
        console.log('otro error');
      }
    }
  };

  return (
    <div className="cont d-flex justify-content-center  p-4 ">
      <Form
        className="mt-5 w-25 p-4 form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h1 className="text-center pb-5">Register Form</h1>

        <Form.Group className=" p-1">
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={register.name}
            onChange={handleChange}
          />
          {valErrors?.name && (
            <p className="error-msg fs-6">{valErrors.name}</p>
          )}
        </Form.Group>
        <Form.Group className=" p-1">
          <Form.Label>LastName</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            value={register.lastname}
            onChange={handleChange}
          />

          {valErrors?.lastname && (
            <p className="error-msg fs-6">{valErrors.lastname}</p>
          )}
        </Form.Group>

        <Form.Group className=" p-1">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="mail@gamil.com"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
          {valErrors?.email && (
            <p className="error-msg fs-6">{valErrors.email}</p>
          )}
        </Form.Group>

        <Form.Group className=" p-1">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
          {valErrors?.password && (
            <p className="error-msg fs-6">{valErrors.password}</p>
          )}
        </Form.Group>

        <Form.Group className="gap-4 d-flex justify-content-center py-4 mb-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-r bg-black text-light"
          >
            Cancel
          </button>
          <button type="submit" className="btn-r">
            Send
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RegisterPage;
