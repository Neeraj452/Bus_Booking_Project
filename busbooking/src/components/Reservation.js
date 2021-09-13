import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
const Reservation = ()=> {

      const [userData, setuserData] = useState([])
      const history = useHistory();
    const GetData = async()=>{
          console.log("Reservation")
          try{
               
                const res = await fetch('/Reservation', {
                      method:"GET",
                      headers:{
                           
                            "Content-Type":"application/json"
                      },
                      
                });
                console.log("about res.status",res.status);
                // now data have all details user
                const data = await res.json();
                setuserData(data.reservations)
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
            GetData();
      },[])

      return (
            <div>
            <div className="table2">
            <h1 className="text-center mt-4 text-primary">Reservation Details</h1>
<table className="table  table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Bus NO.</th>
      <th scope="col">Intial_place</th>
      <th scope="col">Destination</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Seat</th>
      <th scope="col">Amount</th>
      <th scope="col">Cancel</th>
    </tr>
  </thead>
  <tbody>
        {
              userData && userData.map(Element => {
                    const {bus_no,Initial_place, Destination, Date,time,Seat_NO,Amount} = Element;
                  return (<tr>
                        <th scope="row">{bus_no}</th>
                        <td>{Initial_place}</td>
                        <td>{Destination}</td>
                        <td>{Date}</td>
                        <td>{time}</td>
                        <td>{Seat_NO}</td>
                        <td>{Amount}</td>
                        <td><button type="button" className="btn-danger">Click Here</button></td>
                        
                      </tr>)
                    
              })}
       
   
  </tbody>
</table>

</div>

</div>
      )
}

export default Reservation