import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
const Contact = ()=> {

   const history = useHistory();
    const getData = async()=>{
          console.log("getData")
          try{
               
                const res = await fetch('/getData', {
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
                console.log(data.reservations)
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
            getData();
      })

      return (
            <div>
               <h1 className = "contact"> hello  Contact
                  
               </h1>
            </div>
      )
}

export default Contact