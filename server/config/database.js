import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
//configuracio de la pool
export const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//fn que realiza la llamada a la dbPool

const executeQuery = async (sql, values = []) => {
  let connection;
  try {
    //abre una conexion con la pool
    connection = await dbPool.getConnection();

    //ejecutamos la peticion , extraendo el 1er elem que nos trae el resultado.
    const [result] = await connection.query(sql, values);
    return result;

  } catch (error) {
    console.log('query error',error);
    throw error;
  } finally {

    //libera la conexion
    if(connection){
      connection.release();
    }
  }
};

export default executeQuery;