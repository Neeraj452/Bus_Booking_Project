const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs/dist/bcrypt');
const express = require('express');
const authenticate = require("../middelware/authenticate");
const emailsend = require("../model/emailsend"); 

const router = express.Router()
require('../db/connection');
const User = require("../model/userSchema");

router.get('/',(req,res) =>{
      res.send('hello word from the server')
     

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

router.post("/register",async(req,res) =>{
      console.log(req.body);
      const {name, phone, email,password, cpassword} = req.body;
      const Email= email;
    
      console.log(Email);
      if(!name || !phone ||!email || !password || !cpassword){
            return res.status(422).json({error:422})
      }
      try{
            const userExist = await User.findOne({email:email});
            if(userExist){
                 
                  return res.status(422).json({ error:422});
                  }

            else if(password != cpassword ){
                  return res.status(422).json({ error:422});

            }
            else{
                        const user = new User({name, phone, email, password, cpassword})
                        // as middileware use for ncriptjs #code in userSchema.js
                        const usergistere = await user.save();
                        if(usergistere){
                             
                              console.log(Email)
                              emailsend.Emailsend(Email,name)
                          
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
                  return res.status(400).json({error:400})
            }
            const userLogin = await User.findOne({email:email});
            console.log(userLogin);
            if(userLogin){
                  const isMatch = await bcrypt.compare(password,userLogin.password);

                  const token = await userLogin.generateAuthToken();
                  res.cookie("jwtoken",token,{
                        expires:new Date(Date.now() + 1000000),
                        httpOnly:true
                  })

                if(!isMatch){
                      res.status(400).json({error:400})
                  }
                  else{
                        res.json({message:"User signin successfully"}) 
                  }
            }
            else{
            res.status(400).json({error:400})
            }
      }
      catch(err){
             console.log(err);
      }
})

router.post('/reservation', async(req,res)=>{
            console.log("body",req.body);
            const {bus_no,email,Initial_place,Destination,Date,time,Amount,Seat_NO} =req.body
            if(!bus_no || !email || !Initial_place || !Destination || !Date || !time || !Amount || !Seat_NO){
                  console.log("Please Fill All Data")
                              return res.status(400).json({error:"Please Fill All Data"})
            }
            try{
            const userExist = await User.findOne({email:email});
            console.log(userExist);
            if(!userExist){
                 
                  return res.status(422).json({ error:"Not ragistered"});
                  }
                  else{
                              //  generateResevation funtion definition written in userSchema.js 
                        reservationDeatails = await userExist.generateResevation(bus_no,Initial_place,Destination,Date,time,Amount,Seat_NO)
                        if(reservationDeatails){
                              emailsend.SendEmailResevation(bus_no,email,Initial_place,Destination,Date,time,Amount,Seat_NO)
                              res.json({message:"User reservationDeatails` successfully"})
                        }
                        else{
                              res.status(400).json({error:"Not save reservationDeatails"})
                        }
      }}
      catch(err){
            console.log(err)
      }

})

router.get('/about',authenticate,(req,res) =>{
     
      console.log("hello my About")
      console.log("rootcheck",req.rootUser);
      res.send(req.rootUser)

})


router.get('/checkLogin',authenticate,(req,res) =>{
     
      console.log("hello my checkLogin")
      console.log("checkLogin",req.rootUser);
      res.send(req.rootUser)

})


router.get('/getData',authenticate,(req,res) =>{
     
      console.log("hello my getData")
      console.log("getData",req.rootUser);
      res.send(req.rootUser)

})

router.get('/Reservation',authenticate,(req,res) =>{
     
      console.log("hello my Reservation")
      console.log("Reservation",req.rootUser);
      res.send(req.rootUser)

})
module.exports = router;