import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from '../image/logo.jpg';
const Novbar = ()=>{
      return (
            <> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <ul className="navbar-nav">
                     <li className="nav-item logo">
                      <img src={logo} alt="logo" width="80" height="40px" />
                        </li>
                        <li >
                          <NavLink className="nav-link active text-white" to="/">GreenBus</NavLink>
                        </li>
              </ul>

              <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse margin " id="navbarSupportedContent">
                <ul className="navbar-nav me-2 mb-2 mb-lg-0 margin ">
                  <li className="nav-item">
                          <NavLink className="nav-link text-light active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link text-light" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link text-light" to="/Signup">Ragister</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link text-light" to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link text-light" to="/About">About</NavLink>
                        </li>
                    </ul>
                
              </div>
            </div>
          </nav>
            </>
      )
}
export default Novbar;