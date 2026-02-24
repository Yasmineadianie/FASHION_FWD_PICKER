import userDal from "./user.dal.js";
import bcrypt from 'bcrypt';

class UserController {
  allUser = async (req, res) => {

    try {
      let result = await userDal.allUser();
      res.status(200).json(result);
    }catch(error) {
      console.log(error);
      res.status(500).json(error)
      
    }
    
  };

userRegister = async(req, res) => {

  try {

   const {email,name,lastname, password} = req.body;

   let hashedPass = await bcrypt.hash(password, 10);
    let values = [email,name,lastname,hashedPass];

    let result = await userDal.userRegister(values);
     res.status(200).json({message: 'todo ok', result})

  }catch(error) {
     console.log(error);
    res.status(500).json(error)
  }



}

userLogin = async (req, res) => {

console.log(req.body);
const {email, hashedPass} = req.body;
try {
  
  //comprobamos que el email exist en la db
  let result = await userDal.finUserEmail(email);
  console.log(result);
  
  res.status(200).json({message: 'login ok', result})
}catch(error) {
  console.log(error);
  res.status(500).json(error)
}

}


}




export default new UserController();
