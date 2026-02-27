import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const verifyToken = (req, res, next) => {

  const tokenBearer = req.headers.authorization;

  if(!tokenBearer){
    res.status(401).json({message: "Unauthaurized"})
  }else{
    const token = tokenBearer.split(" ")[1];
    jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err , result)=> {
      if(err){
        res.status(401).json({message: "Unauthaurized"})
      }else{
        req.user_id = result.user_id;
        next()
      }
    })
  }
}