import React, {useState} from 'react'
export default function Bustable(props) {

const [seat, setSeat]=useState({Seat_NO:""})
const [Amount, setAmount]=useState()

  let name,value;
  const handleInputs = (e)=>{
    name = e.target.name;  // here access the attribute of input field
    value = e.target.value// access the value of input field
    console.log(value) 
    setSeat({...seat,[name]:value});
   
    
  }
  const handelBooking=()=>{
    console.log("seat.SeatN",seat)
    console.log("props.amount",props.amount)
    const Amount1 = seat.Seat_NO * props.amount;
    console.log("Amount",Amount1)
    setAmount(Amount1)
  }

  const Payment = async(e)=>{
    e.preventDefault();
            const {bus_no,Initial_place, Destination, Date,time,email} = props;
            const Seat_NO = seat.Seat_NO
            console.log("Seat_NO",Seat_NO)
            console.log("datapost1")
            const res = await fetch("/reservation", {
              method: "POST",
              headers: {"Content-Type" : "application/json" },
              body: JSON.stringify({
                bus_no,email,Initial_place, Destination, Date,time,Amount,Seat_NO
              })

            });
            console.log("datapost")
    const data = await res.json();
    console.log("status",data.error)
    console.log("status",res.status)
    if(res.status === 400){
        window.alert("Invalid reservation");
        console.log("Invalid reservation")
  }  else{
   
    window.alert("reservation Successfull");
    console.log("reservation Successfull");
    // history.push("/Login");
     }
    

  }
 


      return (
        <>
        <div>
            <div>
              <form method="POST">
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
      <th scope="col">Payment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{props.bus_no}</th>
      <td>{props.Initial_place}</td>
      <td>{props.Destination}</td>
      <td>{props.Date}</td>
      <td>{props.time}</td>
      <td>{seat.Seat_NO ? seat.Seat_NO: 1 }</td>
    {
      Amount ? <td>{Amount}</td>:<td>{props.amount}</td>
    }  
    <td><button type="button" className=" btn-primary" onClick={Payment}>Click here</button></td>
    </tr>
  </tbody>
</table>
</form>
</div>
<div>
 <lebel className="seatLebel">Enter the number of Seat</lebel>
 <input type="text" className = "seatInput" name="Seat_NO" value ={seat.SeatNo} onChange={handleInputs}></input>
 <button type="button" className=" btn-primary btn2" onClick={handelBooking}> Book</button>
</div>
</div>
</>
)
      }
