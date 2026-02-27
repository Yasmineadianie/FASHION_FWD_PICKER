import { compareString } from "../../utils/bcryptUtil.js";
import { generateToken } from "../../utils/jwtUtils.js";
import userDal from "./user.dal.js";
import bcrypt from 'bcrypt';

class UserController {
  allUser = async (req, res) => {
    try {
      let result = await userDal.allUser();
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  userRegister = async (req, res) => {
    try {
      const { email, name, lastname, password } = req.body;

      let hashedPass = await bcrypt.hash(password, 10);
      let values = [email, name, lastname, hashedPass];

      let result = await userDal.userRegister(values);
      res.status(200).json({ message: 'todo ok', result });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

  userLogin = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      //comprobamos que el email exist en la db
      let result = await userDal.finUserEmail(email);   

      //si no hay usuario con ese email
      if (result.length === 0) {
        res.status(401).json({ message: "email doesn't exist" });
      } else {
        //si hay usuario,comprabamos la contraseña
        let result2 = await compareString(password, result[0].password)
        if(!result2){
        res.status(401).json({message: "incorrect password"})
        }else{

          //generamos el token
         const token = generateToken (result[0].user_id)
        res.status(200).json({ message: 'login ok', token});
        }
     
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };


userByToken = async (req, res) => {
//pedir los datos del usuario q se está intendando louear
  const {user_id} = req;
 console.log(user_id);
 
  try {
    const result = await userDal.userByToken(user_id)
     res.status(200).json({message: 'ok', user:result[0]})
  }catch(error) {
    res.status(500).json(error)
    console.log(error);
    
  }
}



}




export default new UserController();
