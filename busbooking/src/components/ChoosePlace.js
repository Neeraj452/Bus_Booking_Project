import React, {useState} from 'react';
import Bustable from '../components/Bustable';
import {useHistory} from 'react-router-dom';
export default function ChoosePlace() {

      const [place, setPlace] = useState({Initial_place:"", Destination:"", Date:"" }) // here pass paramiter is name attribute of select tag 
      const [trueflag,setTrueflag] = useState(false);
      const [falseflag,setFalseflag] = useState(false);
    
      const [userDetails,setDatails] =useState({
        amount:null,
        bus_no:null,
        Initial_place:null,
        Destination:null,
        Date:null,
        time:null
      })

      const [userdata, setuserData]= useState({});
    
     
  
  let name,value;
  const handleInputs=(e)=>{
    name = e.target.name;  // here access the attribute of input field
    value = e.target.value; // access the value of input field
    console.log(value);
    setTrueflag(false) 
    setFalseflag(false)
    setPlace({...place,[name]:value});
  }

  
  const SearchBus = ()=>{
    checkLogin()
    const {Initial_place,Destination,Date} = place;
    if(Initial_place === "Jaunpur" && Destination === "Allahabad" || Initial_place === "Allahabad" && Destination === "Jaunpur")
    {
      setDatails({...userDetails,['amount']:130,['bus_no']:152463,['Initial_place']:Initial_place,['Destination']:Destination,['Date']:Date,
      ['time']:"9:30 AM", })
      setTrueflag(true)   
    }
    
    else if(Initial_place === "Jaunpur" && Destination === "Varansi" || Initial_place === "Varansi" && Destination === "Jaunpur")
    {
      setDatails({...userDetails,['amount']:100,['bus_no']:152464,['Initial_place']:Initial_place,['Destination']:Destination,['Date']:Date,
      ['time']:"9:30 AM", })
      setTrueflag(true)   
    }
  


    else if(Initial_place === "Allahabad" && Destination === "Varansi" || Initial_place === "Varansi" && Destination === "Allahabad")
    {
      setDatails({...userDetails,['amount']:150,['bus_no']:152465,['Initial_place']:Initial_place,['Destination']:Destination,['Date']:Date,
      ['time']:"9:30 AM", })
      setTrueflag(true)   
    }
   
 
    else if(Initial_place === "Allahabad" && Destination === "Delhi" || Initial_place === "Delhi" && Destination === "Allahabad")
    {
      setDatails({...userDetails,['amount']:700,['bus_no']:152466,['Initial_place']:Initial_place,['Destination']:Destination,['Date']:Date,
      ['time']:"9:30 AM", })
      setTrueflag(true)   
    }
   

    else if(Initial_place === "Varansi" && Destination === "Delhi" || Initial_place === "Delhi" && Destination === "Varansi")
    {
      setDatails({...userDetails,['amount']:800,['bus_no']:152467,['Initial_place']:Initial_place,['Destination']:Destination,['Date']:Date,
      ['time']:"9:30 AM", })
      setTrueflag(true)   
    }
    else{
      setFalseflag(true)
    }
  }





  const history = useHistory();
  const checkLogin = async()=>{
    console.log("checkLogin")
    try{
         
          const res = await fetch('/checkLogin', {
                method:"GET",
                headers:{
                   
                      "Content-Type":"application/json"
                },
               
          });
          console.log("about res.status",res.status);
          // now data have all details user
          const data = await res.json();
    
          setuserData(data);
          console.log("data",userdata.email)
        
          if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
          }
          // console.log("data",email)
    } catch(err){
          console.log(err);
          history.push('/Login')

    }


}

      return (
        <>
<div>
<form>
<select name="Initial_place" id="Initial_place"  onChange={handleInputs} >
  <option value="" disabled selected hidden>Initial Place</option>
  <option   value={place.name} >Allahabad</option>
    <option value={place.name} >Jaunpur</option>
  <option value={place.name} >Varansi</option>
  <option value={place.name} >Delhi</option>
</select>
<h6 className="inline To">To</h6>

<select name="Destination" id="Destination"  onChange={handleInputs}>
<option value=""disabled selected hidden>Destination</option>
<option  value={place.name}>Allahabad</option>
  <option value={place.name}>Jaunpur</option>
<option  value={place.name}>Varansi</option>
<option  value={place.name}>Delhi</option>
</select>
<input type="date"  value={place.name} name="Date" onChange={handleInputs} />
<button type = "button" className="btn-2" onClick={SearchBus} >Search</button>
</form>
  </div>
  
    {
 
        (trueflag && <Bustable amount={userDetails.amount} bus_no={userDetails.bus_no} Initial_place={userDetails.Initial_place}
          Destination={userDetails.Destination} Date={userDetails.Date} time={userDetails.time} email={userdata.email}/>)
         
    }
    {
       (falseflag && window.alert("Buses Not Available"))
    }
   </>
  
      )
}
