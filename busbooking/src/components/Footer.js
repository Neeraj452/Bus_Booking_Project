import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Footer() {
      return (
            <>
            <footer className="bg-dark text-white pt-4 pb-4 ">
                  <div className="container text-center text-md-left inline">
                        <div className="col-md-3 col-lg-3 col-xl-3 mt-3 inline dblock">
                              <h5 className="text-uppercase mb-4 font-weight-hold text-warning">
                          About Greenbus
                              </h5>
                              <p><NavLink to="#" className="text-white text-decoration-none">About Us </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Contact Us</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Mobile Version </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Offer </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Careers </NavLink></p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mt-3 inline dblock">
                              <h5 className="mb-4 font-weight-hold text-warning">
                        Info
                              </h5>
                           <p><NavLink to="#" className="text-white text-decoration-none">T & C </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Privacy</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">FAQ </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Blog</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Insurance Partner</NavLink></p>

                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mt-3 inline dblock">
                              <h5 className=" font-weight-hold text-warning">
                              Global Sites
                              </h5>
                           <p><NavLink to="#" className="text-white text-decoration-none">India</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Singapore</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Mlaysis </NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">Indonesia</NavLink></p>
                           <p><NavLink to="#" className="text-white text-decoration-none">peru</NavLink></p>

                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 inline dblock">
                              <h5 className="font-weight-hold text-warning ">
                             GREEN BUS
                              </h5>
                              <p>
                             GreenBus is the world's largest online bus ticket 
                             booking service trusted by over 25 million happy
                             customers globally. redBus offers bus ticket booking
                             through its website,iOS and Android mobile apps
                             for all major routes
                              </p>
                              <div className="">
                              <div className="inline">
                                    <NavLink to="#"><i class="fab fa-google-plus-g fontasome"></i></NavLink>
                                    </div>
                                    <div className="inline"> <NavLink to="#"><i class="fab fa-facebook-square fontasome"></i></NavLink>
                              </div>
                              </div>
                          
                          

                        </div>
                       
                        
                  </div>
          
            </footer>
                  
            </>
      )
}
