import React, {useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import pizza from '../image/pizza.jpg';

const Login = ()=> {
  const history = useHistory();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email)
  console.log(password)

  const loginuser =async(e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method: "POST",
      headers: {"Content-Type" : "application/json" },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();
    if(data.status ===400 || !data){
      window.alert("Invalid Credentials")
    }
    else{
      window.alert("Login Successful")
      history.push("/")
    }
  }

      return (
            <div>
               <section>
            <div className="imgBox">
              <img src = {pizza} alt="pizaa" />
              </div>
              <div className="contentBox">
                <div className = "formBox">
                  <h1>Sign In</h1>
                  <form method="POST">
                  
                    <div className ="inputBox">
                    <span>Email</span>
                    <input type = "email" name="email" id="email"
                     value={email}
                     onChange={ (e)=>{ setEmail(e.target.value)
                     }}
                    ></input>
                    </div>
                    <div className ="inputBox">
                    <span>Password</span>
                    <input type = "password" name="password" id="password"
                     value={password}
                     onChange={ (e)=>{setPassword(e.target.value)
                     }}
                    ></input>
                    </div>
                    <div className ="inputBox">
                      <input type="submit" value= "Sign In" name = "Login"
                       onClick={loginuser}
                      ></input>
                    </div>

                    <div className ="inputBox">
                    <p>Don't have an account?<NavLink to="Signup">Sign up</NavLink></p>
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
          </div>
      )
}

export default Login