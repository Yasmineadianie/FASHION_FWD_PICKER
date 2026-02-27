import executeQuery from "../../config/database.js";

class userDal {
  //fn que hace la llamada a la db
  allUser = async () => {
    try {

      let sql = "SELECT * FROM user"
     let result = await executeQuery(sql);
     console.log(result);
     return result;
     
     
    } catch (error) {
      throw error
    }
  };


  userRegister = async(values) => {

  try {
   
   let sql = "INSERT INTO user (email,name,lastname, password) VALUES (?,?,?,?)";
 let result = await executeQuery(sql,values);
 return result
  }catch(error) {
   throw error
    
  }
}

//busca un usuario por un email
finUserEmail= async(email) => {

  try {
   let sql = "SELECT  user_id, password FROM user WHERE email = ? AND user_is_deleted = 0 "

    let result = await executeQuery(sql, [email]);
    return result;

  }catch(error) {
    throw error
  }
}



userByToken = async (id) => {

  try{
    let sql = "SELECT  user_id, email, name, lastname, avatar, phone_number, type FROM user WHERE user_id= ? AND user_is_deleted = 0"
    let result = await executeQuery(sql, [id])
      return result
  }catch(error){
    throw error;
  }
}









}



export default new userDal();
