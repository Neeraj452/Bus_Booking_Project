
import React, {useState} from 'react'
import pizza from '../image/pizza.jpg';
import {useHistory} from 'react-router-dom';
// var nodemailer = require('nodemailer');

// const HandelEmail = ()=>{
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'neerajmaurya75725611@gmail.com',
//       pass: 'Neeraj@75725611'
//     }
//   });
  
//   var mailOptions = {
//     from: 'neerajmaurya75725611@gmail.com',
//     to: 'namitamaurya70@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: `Hi Smartherd, thank you for your nice Node.js tutorials.
//             I will donate 50$ for this course. Please send me payment options.`
//     // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

const Signup = ()=> {
  const history = useHistory();

  const [user, setUser] = useState({
  name:"", email:"", password:"",cpassword:"" });

  let name,value;
  const handleInputs = (e)=>{
    name = e.target.name;  // here access the attribute of input field
    value = e.target.value// access the value of input field
    console.log(value) 
    setUser({...user,[name]:value});
  }

          const PostData = async(e)=>{
            e.preventDefault();
            const {name, email, password,cpassword} = user;
            console.log("datapost1")
            const res = await fetch("/register", {
              method: "POST",
              headers: {"Content-Type" : "application/json" },
              body: JSON.stringify({
                name, email, password,cpassword
              })

            });
            console.log("datapost")

    const data = await res.json();
    console.log("status",data.error)
    console.log("status",data.status)
    if(parseInt(data.error) === 422){
        window.alert("Invalid Registration");
        console.log("Invalid Registration")
  }  else{
   
    window.alert("Registration Successfull");
    console.log("Registration Successfull");
    history.push("/Login");
     }
  
}
  return(
            <>
            <section>
            <div className="imgBox">
              <img src = {pizza} alt="pizaa" />
              </div>
              <div className="contentBox">
                <div className = "formBox">
                  <h1>Ragister</h1>
                  <form method="POST"> 

                  <div className ="inputBox">
                    <span>Username</span>
                    <input type = "text" name="name"  
                        value={user.name}
                        onChange={handleInputs}
                         id="name"></input>
                    </div>

                    <div className ="inputBox">
                    <span>Email</span>
                    <input type = "email" name="email" 
                        value={user.email}
                        onChange={handleInputs}
                         id="email"></input>
                    </div>

                    <div className ="inputBox">
                    <span>Password</span>
                    <input type = "password" name="password" 
                        value={user.password}
                        onChange={handleInputs}
                         id="password"></input>
                    </div>

                    <div className ="inputBox">
                    <span>Confome Password</span>
                    <input type = "password" name="cpassword" 
                        value={user.cpassword}
                        onChange={handleInputs}
                         id="Confirm password"></input>
                    </div>

                    <div className ="inputBox">
                      <input type="submit" value= "Ragister" name = "ragister"  onClick={PostData}></input>
                    </div>

                    </form>
                    <h5>Login with social media</h5>
                    <ul className = "social">
                          <li><i class="fab fa-google"></i></li>
                          <li><i class="fab fa-instagram-square"></i></li>
                          <li><i class="fab fa-facebook"></i></li>
                    </ul>
                  </div>
                 </div>
            </section>

</>
      )
}


export default Signup