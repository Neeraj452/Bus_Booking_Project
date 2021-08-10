const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const router = express.Router()
require('../db/connection');
const User = require("../model/userSchema");

const middelware = (req,res,next) =>{
      console.log('hello my middleware')
      next();
}

router.get('/',(req,res) =>{
      res.send('hello word from the server')
     

})
router.get('/about',middelware,(req,res) =>{
      res.send('hello about from the server')

})
router.get('/contact',(req,res) =>{
      res.send('hello contact from the server')

})

router.get('/signin',(req,res) =>{
      res.send('hello sighin from the server')

})

router.get('/signup',(req,res) =>{
      res.send('hello signUp from the server')

})

// user Registered using Promis

// router.post('/register',(req,res) =>{
//       console.log(req.body);
//       const {name, email, phone, work, password, cpassword} = req.body;
//       if(!name || !email || !phone || !work || !password || !cpassword){
//             return res.status(422).json({error:"Plz filled properly"})
//       }
//       User.findOne({email:email}).then((userExist)=>{
//             if(userExist){
//                         return res.status(422).json({ error: "email already Exist"});
//             }

//            const user = new User({name, email, phone, work, password, cpassword})
//            user.save().then( ()=>{
//                 res.status(201).json({message:"user registed successfuly"})

//            }).catch( (err)=>{

//             res.status(500).json({error:"Failed to registered"})

//            })

//       }).catch(err =>{console.log(err)});



//       //res.send("era refister pase");
//      // res.json({ message: req.body});

// })



// user Registered using Async and wait

router.post('/register',async(req,res) =>{
      console.log(req.body);
      const {name, email, phone, work, password, cpassword} = req.body;
      if(!name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({error:"Plz filled properly"})
      }
      try{
            const userExist = await User.findOne({email:email});
            if(userExist){
                  return res.status(422).json({ error: "email already Exist"});
                  }

            else if(password != cpassword ){
                  return res.status(422).json({ error: "Password are not matching"});

            }
            else{
                        const user = new User({name, email, phone, work, password, cpassword})
                        // as middileware use for ncriptjs #code in userSchema.js
                        const usergistere = await user.save();
                        if(usergistere){
                         res.status(201).json({message:"user registed successfuly"})
                 }  
      }}
      catch(err){
            console.log(err)

      }      
});

router.post('/signin',async(req,res)=>{
      try{
            const { email, password } = req.body;
            if(!email || !password){
                  return res.status(400).json({erro:"Plz Filled the data"})
            }
            const userLogin = await User.findOne({email:email});
            console.log(userLogin);
            if(userLogin){
                  const isMatch = await bcrypt.compare(password,userLogin.password);

                  const token = await userLogin.generateAuthToken();
                  res.cookie("jwtoken",token,{
                        expires:new Date(Date.now() + 100000),
                        httpOnly:true
                  })

                if(!isMatch){
                      res.status(400).json({error:"Invalid crendials"})
                  }
                  else{
                        res.json({message:"User signin successfully"}) 
                  }
            }
            else{
            res.status(400).json({error:"Invalid crendials"})
            }
      }
      catch(err){
             console.log(err);
      }
})

module.exports = router;