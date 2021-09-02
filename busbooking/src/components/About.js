import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';

const About = ()=> {
    const history = useHistory();
    const callAboutPage = async()=>{
          console.log("callaboutpage")
          try{
               
                const res = await fetch('/about', {
                      method:"GET",
                      headers:{
                            Accept:"application/json",
                            "Content-Type":"application/json"
                      },
                      credentials:"include"
                });
                console.log("about res.status",res.status);
                // now data have all details user
                const data = await res.json();
             
               
                if(!res.status === 200){
                      const error = new Error(res.error);
                      throw error;
                }
          } catch(err){
                console.log(err);
                history.push('/Login')

          }

      
    }

      useEffect( ()=>{
            callAboutPage();
      })
      return (
            <div>
                  <form method="GET">
               <h1 className = "contact"> hello  About
                  
               </h1>
               </form>
            </div>
      )
}

export default About;