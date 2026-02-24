import axios, { type Method } from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_URL;

//Method: tipo de axios para los metodos GPCDP..
export const fetchData = async (
  url: string,
  method: Method,
  data: unknown = null,
  token: String | null = null,
) => {

  let headers = {};


  //si hay token, modificamos el objeto headers para meter la auth con el Bearer
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }

  const config = {
    url: apiUrl + url,
    method,
    data,
    headers,
  };

  //peticion
  const res = await axios(config);
  return res;
};
