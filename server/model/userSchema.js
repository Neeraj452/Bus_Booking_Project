const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
      name:{
            type:String,
            required:true
      },
      phone:{ 
            type:String,
            required:false

      },
      email:{
            type:String,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      cpassword:{
            type:String,
            required:true
      },
      reservations:[
            {
                  bus_no:{
                        type:Number,
                        required:true
                  },
                  Initial_place:{
                        type:String,
                        required:true
                  },
                  Destination:{
                        type:String,
                        required:true
                  },
                  Date:{
                        type:String,
                        required:true
                  },
                  time:{
                        type:String,
                        required:true
                  },
                  Amount:{
                        type:Number,
                        required:false
                  },
                  Seat_NO:{
                        type:String,
                        required:false
                  },
            }

      ],
      tokens:[
            {
                  token:{
                        type:String,
                        require:true
                  }
            }
      ]

})

// we are hashing the password
userSchema.pre('save',async function(next){
      console.log("hi from inside");
      if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
      }
      next();
})
//We are generating token 
userSchema.methods.generateAuthToken = async function(){
      try{
            let token2 = jwt.sign({_id:this._id},process.env.SECRET_KEY); // generating the token
            this.tokens = this.tokens.concat({ token:token2 });
            const token1 = await this.save();
            if(token1){
                  console.log("token save succusefull");
            }
            else{
                  console.log("Not save token");
            }
            return token2;

      }
      catch(err){
            console.log(err);
      }
}

// BusBooking Resevation details save in database

userSchema.methods.generateResevation = async function(bus_no,Initial_place,Destination,Date,time,Amount,Seat_NO){
      try{
           
            this.reservations = this.reservations.concat({bus_no,Initial_place,Destination,Date,time,Amount,Seat_NO})
            const reservationDeatails = await this.save();
            if(reservationDeatails){
                  console.log("reservationDeatails save succusefull");
            }
            else{
                  console.log("Not save reservationDeatails");
            }
            return reservationDeatails
            

      }
      catch(err){
            console.log(err);
      }
}
// collection creating USER
const User = mongoose.model('USER', userSchema);

module.exports = User;

