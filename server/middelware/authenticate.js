const jwt = require('jsonwebtoken');
const User = require("../model/userSchema");


const Authenticate = async(req, res, next)=>{
      console.log("Authenticate");
      try{
         const token = req.cookies.jwtoken;  //get the token
         console.log("token",token)
         const verifyToken = jwt.verify(token,process.env.SECRET_KEY); //Verify the token and return the data of user
           console.log("verifyToken",verifyToken)
         const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token": token}); // return user genvine hai
         if(!rootUser){
               throw new Error("user not found")
         }
         console.log("rootUser",rootUser)
         req.token = token;
         req.rootUser= rootUser;
         req.userID = rootUser._id;
         next();
      }catch(err){
          res.status(401).send('Unauthorized:No token provided');
          console.log(err);
      }
}
module.exports = Authenticate;